# Taller Mecánico "Sergio" — TPFI (Análisis de Sistemas de Información)

Documentación y soporte visual para la exposición y defensa del Trabajo Final Integrador correspondiente a la cátedra **Análisis de Sistemas de Información** (**UTN — Facultad Regional Tucumán**, curso **2K5**).

## Integrantes del Equipo (Grupo 3)

- **Miguel Ángel Marcaida Marquez**
- **Celeste Valentina Toledo**
- **Facundo Agustín Sal**

---

## 🔗 Enlaces de la Defensa

- **Presentación (VitePress):** [tfi-sergio-mecanico.vercel.app](https://tfi-sergio-mecanico.vercel.app/)
- **Prototipo Funcional (Extra):** [prototipo-tfi-sergio-mecanico.vercel.app](https://prototipo-tfi-sergio-mecanico.vercel.app/)
- **Prototipo No Funcional (Figma):** [Figma - Prototipo Sergio Mecánico](https://www.figma.com/proto/NGoC7YZ0Fwf1nG232nZtSl/Prototipo-Sergio-Mecanico?node-id=19-789&t=zFeUaic3X8OkpTa6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A789)
- **Informe Oficial (PDF):** Disponible en la carpeta `docs/public/pdf/` de este repositorio.

---

## 📂 Estructura del Repositorio

Este repositorio contiene el sitio de presentación (VitePress). El prototipo funcional es un proyecto independiente y se encuentra en:

- **Repositorio del Prototipo Funcional:** [github.com/Miguel-Marcaida/prototipo-tfi-sergio-mecanico](https://github.com/Miguel-Marcaida/prototipo-tfi-sergio-mecanico)

---

## ⚙️ Requisitos previos (para la presentación)

- [Node.js](https://nodejs.org/) (se recomienda versión LTS actual)
- npm (incluido con Node.js)
- [Git](https://git-scm.com/)

---

## 🚀 Instalación y ejecución local (VitePress)

1. **Clonar el repositorio:**

```bash
git clone https://github.com/Miguel-Marcaida/TFI-Sergio-Mecanico.git
cd TFI-Sergio-Mecanico
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Levantar el servidor de desarrollo:**

```bash
npm run docs:dev
```

_(Revisá en tu `package.json` los nombres exactos bajo `"scripts"` por si usás `docs:dev` o `dev`)._

4. **Generar versión de producción (opcional, para validar el build antes de presentar):**

```bash
npm run docs:build
```

---

## ✨ Características implementadas

- **Temas duales controlados por variables CSS (`docs/.vitepress/theme/style.css`):** modo oscuro con acento verde neón y modo claro con contraste índigo, orientados a la lectura y exposición en defensa.
- **Modal de ampliación de imágenes (`docs/.vitepress/theme/index.js`):** clic sobre cualquier imagen o diagrama dentro del contenido para ampliarlo a pantalla completa; se cierra presionando `Esc`, haciendo clic fuera o clic sobre la imagen.
- **Navegación interna y footer global:** botones automáticos para volver a la sección o al inicio en páginas internas, y pie de página visible en todas las vistas con la autoría del equipo.
- **Enlaces a Prototipos:** botones directos al Prototipo Funcional (Vercel) y al Prototipo No Funcional (Figma) desde la página de inicio y el menú de navegación.

---

## 📋 Estado del trabajo

El sitio de presentación en VitePress está operativo y listo para la defensa. Incluye la documentación completa de los 4 avances, los enlaces a los prototipos y el acceso al informe oficial en PDF. El prototipo funcional (proyecto aparte) simula el flujo completo del negocio (Recepción → Mecánico → Administración → Entrega) y está desplegado en Vercel.
