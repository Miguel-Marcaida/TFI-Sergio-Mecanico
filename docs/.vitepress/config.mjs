import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sergio Mecánico - TPFI",
  description: "Sistema de Gestión Integral Automotriz",
  appearance: "dark",
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Empresa y Visión", link: "/01-empresa-y-vision/" },
      { text: "Reglas y Procesos", link: "/02-reglas-y-procesos/" },
      { text: "Casos de Uso y UML", link: "/03-casos-de-uso-y-uml/" },
      {
        text: "Cierre y Evidencias",
        items: [
          {
            text: "Informe de Viabilidad",
            link: "/04-cierre-y-evidencias/informe-de-viabilidad",
          },
          {
            text: "Glosario y Diccionario",
            link: "/04-cierre-y-evidencias/glosario-y-diccionario",
          },
          {
            text: "Cierre, Bibliografía y Anexos",
            link: "/04-cierre-y-evidencias/cierre-bibliografia-y-anexos",
          },
        ],
      },
      {
        text: "Figma",
        link: "https://www.figma.com/proto/NGoC7YZ0Fwf1nG232nZtSl/Prototipo-Sergio-Mecanico?node-id=19-789&t=zFeUaic3X8OkpTa6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A789",
        target: "_blank",
        rel: "noopener",
      },
      // {
      //   text: "Descargar PDF",
      //   link: "/docs/public/sergio-mecanico-tpfi.pdf",
      //   target: "_blank",
      //   rel: "noopener",
      // },
    ],

    sidebar: [
      {
        text: "Empresa y Visión",
        items: [
          {
            text: "Visión General y Relevamiento",
            link: "/01-empresa-y-vision/",
          },
        ],
      },
      {
        text: "Reglas y Procesos",
        items: [
          {
            text: "Reglas de Negocio y Procesos",
            link: "/02-reglas-y-procesos/",
          },
        ],
      },
      {
        text: "Casos de Uso y UML",
        items: [
          { text: "Resumen y Modelos UML", link: "/03-casos-de-uso-y-uml/" },
          {
            text: "CU-01 · Solicitar Turno",
            link: "/03-casos-de-uso-y-uml/cu-01-solicitar-turno",
          },
          {
            text: "CU-02 · Registrar Vehículo",
            link: "/03-casos-de-uso-y-uml/cu-02-registrar-vehiculo",
          },
          {
            text: "CU-03 · Registrar Diagnóstico",
            link: "/03-casos-de-uso-y-uml/cu-03-registrar-diagnostico",
          },
          {
            text: "CU-04 · Confeccionar Presupuesto",
            link: "/03-casos-de-uso-y-uml/cu-04-confeccionar-presupuesto",
          },
          {
            text: "CU-05 · Aprobar Presupuesto",
            link: "/03-casos-de-uso-y-uml/cu-05-registrar-aprobacion-presupuesto",
          },
          {
            text: "CU-06 · Registrar Orden de Trabajo",
            link: "/03-casos-de-uso-y-uml/cu-06-registrar-orden-de-trabajo",
          },
          {
            text: "CU-07 · Registrar Control de Calidad",
            link: "/03-casos-de-uso-y-uml/cu-07-registrar-control-calidad",
          },
          {
            text: "CU-08 · Facturar y Registrar Pago",
            link: "/03-casos-de-uso-y-uml/cu-08-crear-factura-registrar-pago",
          },
          {
            text: "CU-09 · Entregar Vehículo",
            link: "/03-casos-de-uso-y-uml/cu-09-entregar-vehiculo",
          },
        ],
      },
      {
        text: "Cierre y Evidencias",
        items: [
          {
            text: "Informe de Viabilidad",
            link: "/04-cierre-y-evidencias/informe-de-viabilidad",
          },
          {
            text: "Glosario y Diccionario de Datos",
            link: "/04-cierre-y-evidencias/glosario-y-diccionario",
          },
          {
            text: "Cierre, Bibliografía y Anexos",
            link: "/04-cierre-y-evidencias/cierre-bibliografia-y-anexos",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Miguel-Marcaida/TFI-Sergio-Mecanico" },
    ],

    footer: {
      message: 'TPFI — Análisis de Sistemas de Información · Taller "Sergio" Mecánico',
      copyright:
        "Autores: Miguel Ángel Marcaida Marquez · Celeste Valentina Toledo · Facundo Agustín Sal",
    },
  },
});