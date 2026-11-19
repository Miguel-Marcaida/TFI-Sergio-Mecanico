// https://vitepress.dev/guide/custom-theme
import { h, computed, defineComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import './style.css'

const SECTION_MAP = {
  '01-empresa-y-vision': 'Empresa y Visión',
  '02-reglas-y-procesos': 'Reglas y Procesos',
  '03-casos-de-uso-y-uml': 'Casos de Uso y UML',
  '04-cierre-y-evidencias': 'Cierre y Evidencias'
}

const BackNavigation = defineComponent({
  name: 'BackNavigation',
  setup() {
    const route = useRoute()

    const navInfo = computed(() => {
      const cleanPath = route.path
        .replace(/\/index\.html$/, '/')
        .replace(/\.html$/, '')
        .replace(/^\/+|\/+$/g, '')

      if (!cleanPath) return null

      const segments = cleanPath.split('/')
      const sectionSlug = segments[0]
      const sectionLabel = SECTION_MAP[sectionSlug]

      if (!sectionLabel) {
        return {
          primaryHref: '/',
          primaryLabel: '← Volver al inicio',
          secondaryHref: null,
          secondaryLabel: null
        }
      }

      const isSectionIndex = segments.length === 1
      if (isSectionIndex) {
        return {
          primaryHref: '/',
          primaryLabel: '← Volver al inicio',
          secondaryHref: null,
          secondaryLabel: null
        }
      }

      return {
        primaryHref: `/${sectionSlug}/`,
        primaryLabel: `← Volver a ${sectionLabel}`,
        secondaryHref: '/',
        secondaryLabel: 'Inicio'
      }
    })

    return () => {
      if (!navInfo.value) return null

      const links = [
        h(
          'a',
          {
            class: 'volver-btn',
            href: navInfo.value.primaryHref
          },
          navInfo.value.primaryLabel
        )
      ]

      if (navInfo.value.secondaryHref && navInfo.value.secondaryLabel) {
        links.push(
          h(
            'a',
            {
              class: 'volver-btn',
              href: navInfo.value.secondaryHref
            },
            navInfo.value.secondaryLabel
          )
        )
      }

      return h('div', { class: 'volver-nav' }, links)
    }
  }
})

function initImageModal() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (document.getElementById('vp-img-modal-overlay')) return

  const overlay = document.createElement('div')
  overlay.id = 'vp-img-modal-overlay'
  overlay.className = 'vp-img-modal-overlay'
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-modal', 'true')

  const content = document.createElement('div')
  content.className = 'vp-img-modal-content'

  const closeBtn = document.createElement('button')
  closeBtn.className = 'vp-img-modal-close'
  closeBtn.type = 'button'
  closeBtn.setAttribute('aria-label', 'Cerrar imagen')
  closeBtn.innerHTML = '&times;'

  const modalImg = document.createElement('img')
  modalImg.className = 'vp-img-modal-img'

  const modalCaption = document.createElement('p')
  modalCaption.className = 'vp-img-modal-caption'

  content.appendChild(closeBtn)
  content.appendChild(modalImg)
  content.appendChild(modalCaption)
  overlay.appendChild(content)
  document.body.appendChild(overlay)

  const closeModal = () => {
    overlay.classList.remove('is-open')
    document.body.style.overflow = ''
  }

  const openModal = (imgEl) => {
    modalImg.src = imgEl.currentSrc || imgEl.src
    modalImg.alt = imgEl.alt || 'Diagrama ampliado'

    const captionText = imgEl.getAttribute('alt') || ''
    modalCaption.textContent = captionText
    modalCaption.style.display = captionText ? 'block' : 'none'

    overlay.classList.add('is-open')
    document.body.style.overflow = 'hidden'
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn || e.target === modalImg) {
      closeModal()
    }
  })

  document.addEventListener('click', (e) => {
    const target = e.target
    if (target && target.tagName === 'IMG' && target.closest('.vp-doc')) {
      e.preventDefault()
      openModal(target)
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeModal()
    }
  })
}

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(BackNavigation)
    })
  },
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initImageModal, { once: true })
      } else {
        initImageModal()
      }

      if (router) {
        const prevAfterEach = router.onAfterRouteChanged
        router.onAfterRouteChanged = (to) => {
          if (typeof prevAfterEach === 'function') prevAfterEach(to)
          initImageModal()
        }
      }
    }
  }
}