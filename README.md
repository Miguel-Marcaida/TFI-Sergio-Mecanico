# Taller Mecánico "Sergio" — TPFI (Análisis de Sistemas de Información)

Documentación y soporte visual para la exposición y defensa del Trabajo Final Integrador correspondiente a la cátedra **Análisis de Sistemas de Información** (**UTN — Facultad Regional Tucumán**, curso **2K5**).

## Integrantes del Equipo (Grupo 3)

* **Miguel Ángel Marcaida Marquez**
* **Celeste Valentina Toledo**
* **Facundo Agustín Sal**

---

## Requisitos previos

* [Node.js](https://nodejs.org/) (se recomienda versión LTS actual)
* `npm` (incluido con Node.js)
* [Git](https://git-scm.com/)

---

## Instalación y ejecución local

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Miguel-Marcaida/TFI-Sergio-Mecanico.git
   cd TFI-Sergio-Mecanico
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Levantar el servidor de desarrollo (VitePress):**

   ```bash
   npm run docs:dev
   ```

   *(Revisá en tu `package.json` los nombres exactos bajo `"scripts"` por si usás `docs:dev` o `dev`).*

4. **Generar versión de producción (opcional, para validar el build antes de presentar):**

   ```bash
   npm run docs:build
   ```

---

## Características implementadas en el sitio

* **Temas duales controlados por variables CSS (`docs/.vitepress/theme/style.css`):** modo oscuro con acento verde neón y modo claro con contraste índigo, orientados a la lectura y exposición en defensa.
* **Modal de ampliación de imágenes (`docs/.vitepress/theme/index.js`):** clic sobre cualquier imagen o diagrama dentro del contenido para ampliarlo a pantalla completa; se cierra presionando `Esc`, haciendo clic fuera o clic sobre la imagen.
* **Navegación interna y footer global:** botones automáticos para volver a la sección o al inicio en páginas internas, y pie de página visible en todas las vistas con la autoría del equipo.

---

## Estado del trabajo

La base técnica y visual del sitio en VitePress está operativa. Los ajustes de redacción, alcance de fichas, anexos y criterios finales quedan sujetos a revisión en conjunto del equipo antes de la defensa.