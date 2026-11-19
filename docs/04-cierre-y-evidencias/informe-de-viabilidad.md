# Informe de Viabilidad

Síntesis ejecutiva del estudio de viabilidad para el **Sistema de Gestión Integral Automotriz** del taller **"Sergio Mecánico"**.

## 1. Viabilidad Técnica

* **Hardware previsto:** PC de escritorio en recepción (Core i5, 8GB RAM, SSD 512GB, monitor, teclado, mouse e impresora de comprobantes), tablet de gama media para el mecánico, escáner automotriz (carga manual de códigos), router Wi-Fi con conexión a internet y teléfono celular de gama media para llamadas y mensajería.
* **Stack de software (sin costo de licencias):** Windows 11 Pro OEM (incluido en PC), JavaScript sobre Node.js en backend, HTML5 y CSS3 en frontend, MySQL con `mysql2` como base de datos, Windows Defender, WhatsApp Web para notificaciones, Google Drive (15 GB) para respaldo y Gmail para notificaciones internas.

---

## 2. Viabilidad Económica

| Rubro | Monto estimado | Síntesis del respaldo |
| :--- | :---: | :--- |
| **Hardware** | **$1.855.906** | PC completa ($903.700), impresora ($346.999), router + celular ($380.207) y tablet ($225.000). |
| **Software** | **$0** | Herramientas y servicios gratuitos o ya incluidos con la PC. |
| **Desarrollo (Personal)** | **$4.025.000** | Estimación a 3,5 meses: gestor de proyecto ($1.400.000), analista de sistemas ($1.400.000) y programador ($1.225.000). |

---

## 3. Viabilidad Operacional

* **Disposición del equipo:** El dueño (Sergio) impulsa el cambio para dejar atrás la libreta manual y mejorar el control y la toma de decisiones, mientras que el recepcionista y los mecánicos aceptan la adopción de PC y tablet para agilizar la carga.
* **Capacitación (*micro-learning*):** Videos cortos paso a paso (estilo Shorts/Reels/TikTok) alojados en Google Drive para consultar desde celular o tablet, complementados con una demo presencial inicial de 15 minutos a cargo del equipo analista sin costo adicional para el taller.

---

## 4. Gestión del Proyecto y Marco RUP

### Riesgos principales identificados
* **Tecnológicos:** Fallas de conexión Wi-Fi en la tablet o cortes/picos de tensión que afecten la PC donde reside la base de datos.
* **Operativos y de negocio:** Errores de tipeo al cargar códigos, duplicación de datos en libreta por costumbre, demoras del cliente en llevar repuestos, falta de aprobación presupuestaria o cambios de alcance a mitad del proyecto.
* **Herramientas:** Inestabilidad de internet que impacte en WhatsApp o respaldos en Google Drive.

### Cronograma (14 semanas)

![Diagrama de Gantt del proyecto (14 semanas)](/images/avance4/gantt.png)

| Fase | Inicio | Fin | Duración |
| :--- | :---: | :---: | :---: |
| Análisis y Diseño | Semana 1 | Semana 8 | 8 semanas |
| Construcción | Semana 9 | Semana 12 | 4 semanas |
| Pruebas | Semana 13 | Semana 13 | 1 semana |
| Implementación | Semana 14 | Semana 14 | 1 semana |

### Marco de desarrollo (Proceso Unificado)
Referencias: `c` = comenzar, `r` = refinar.

| Disciplina | Artefactos | Inicio | Elaboración | Construcción | Transición |
| :--- | :--- | :---: | :---: | :---: | :---: |
| Modelado del negocio | Modelo del dominio | c | r | | |
| Requisitos | Modelo de caso de usos, Visión, Especificación complementaria, Glosario | c | r | | |
| Análisis y diseño | Modelo del análisis | | c | | |
| Implementación | Modelo de implementación | | | | |
| Gestión de proyecto | Plan de desarrollo, Informe de viabilidad | c | c | | |
| Pruebas | Modelo de Prueba | | | | |
| Entorno | Marco de Desarrollo | c | | | |