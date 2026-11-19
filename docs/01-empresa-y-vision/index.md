# 1. Contexto, Relevamiento y Visión

Presentación del **Taller de Mecánica Integral "Sergio Mecánico"** a partir del **Documento de la Empresa**, el relevamiento y elicitación, y el **Documento de Visión** del informe final del Grupo 3 (UTN FRT, Comisión 2K5).

## 1. Identidad de la Organización

* **Historia:** Emprendimiento independiente fundado en **2014** en **calle Juan José Paso 158, Villa Luján, San Miguel de Tucumán**, operando como sociedad de hecho. Conducido por su fundador (Gerente General y Técnico Senior) junto a dos ayudantes mecánicos con formación técnica, conserva su ubicación original y la atención personalizada.
* **Misión:** Proveer asistencia técnica, mantenimiento y reparación mecánica integral automotriz, garantizando la seguridad operativa de los vehículos mediante la integración de diagnósticos electrónicos y manuales, con transparencia informativa y precisión técnica.
* **Visión:** Lograr la excelencia operativa y la estandarización técnica en el diagnóstico de sistemas automotrices complejos, siendo reconocidos en la comunidad por la eficiencia en los tiempos de respuesta, la calidad de los procesos administrativos y el rigor en el control de la información técnica y financiera.
* **Valores de la Organización:** Transparencia técnica, responsabilidad y ética profesional, compromiso con la seguridad del cliente, mejora continua y respeto por los tiempos acordados.

### Objetivos Organizacionales

| Objetivo | Enfoque en el taller |
| :--- | :--- |
| **Sistematización de la Admisión** | Migrar del registro manual (libreta) a una base de datos digital, asegurando integridad de datos del cliente y trazabilidad desde el ingreso |
| **Estandarización de la Comunicación Presupuestaria** | Implementar un protocolo de notificación digital para validar presupuestos y reducir ambigüedad en los costos |
| **Gestión de Estados Operativos** | Diferenciar órdenes de trabajo en reparación activa vs. en espera (por falta de repuestos) para optimizar el espacio físico |
| **Control de Cartera** | Institucionalizar el registro de saldos pendientes de pago para cuentas corrientes y cierres de caja |

## 2. Organización, Alcance y Límites

El taller brinda servicios de mecánica integral automotriz **multimarca** y diagnóstico computarizado (motores, transmisión y embrague, frenos, suspensión y tren delantero, mantenimiento preventivo con filtros y aceite, y escaneo electrónico), con planta flexible sin sectores fijos y toma de decisiones centralizada en la Gerencia General.

| Dentro del alcance | Fuera del alcance / sin intervención del taller |
| :--- | :--- |
| Gestión de turnos y recepción del vehículo | Chapa, pintura y gomería |
| Diagnóstico técnico y presupuestos | Servicio de grúa o traslado (a cargo del cliente) |
| Ejecución de órdenes de trabajo (OT) y control de calidad | Tercerización de procesos |
| Cobro y entrega de vehículos | Compra o gestión de stock de repuestos (provistos por el cliente) |

![Organigrama del taller](/images/avance1/organigrama.png)

![Diagrama de Venn - Límites y alcance](/images/avance1/diagrama-venn-limites-alcance.png)

## 3. Relevamiento y Situación Actual (AS-IS)

El relevamiento se apoyó en entrevistas operativas (24 puntos relevados en la elicitación), observación en planta y revisión del registro manual en libreta, respaldado formalmente por la nota de presentación de la cátedra.

* **Criterios operativos vigentes:** Ordenamiento según urgencia técnica y gravedad de la falla; diagnóstico sin costo (sin registro si se rechaza el presupuesto) mediante escáner OBD2 (con patente y chasis obligatorios) o método manual; repuestos provistos por el cliente y validación remota de fallas ocultas; cobro en efectivo, transferencia o cuenta corriente, con recibos manuales a pedido y garantía acotada a la mano de obra ante incompatibilidad de repuestos.

![Nota de presentación cátedra - taller](/images/avance1/nota-presentacion-catedra-taller.png)

![Registro manual actual](/images/avance4/registro-manual.png)

> **Espacio para fotos de campo (`docs/public/images/exposicion/`):**
> Sumá acá las fotos del taller, del equipo y con Sergio Lezcano usando `![Descripción](/images/exposicion/nombre-foto.jpg)`.

### Procesos del Negocio Actuales (BPD)

| Proceso | Alcance del flujo | Punto crítico en el estado actual |
| :--- | :--- | :--- |
| **1. Gestión de Turnos y Recepción del Vehículo** | Recepción del pedido, disponibilidad y registro de ingreso | Registro manual en libreta y saturación en picos de demanda |
| **2. Diagnóstico Técnico, Presupuesto y Gestión de Repuestos** | Diagnóstico (OBD2/manual), presupuesto y repuestos del cliente | Dependencia de repuestos externos y validación informal |
| **3. Reparación y Control de Calidad** | Ejecución de la reparación, fallas ocultas y verificación final | Seguimiento disperso del avance y estados de la unidad |
| **4. Cobro y Entrega de Vehículo** | Liquidación (efectivo/transferencia/cta. cte.), recibo y entrega | Control manual de saldos pendientes y comprobantes |

1. **Proceso 1: Gestión de Turnos y Recepción del Vehículo**
   ![BPD Proceso 1 - Gestión de Turnos y Recepción del Vehículo](/images/avance1/bpd-p1.png)

2. **Proceso 2: Diagnóstico Técnico, Presupuesto y Gestión de Repuestos**
   ![BPD Proceso 2 - Diagnóstico Técnico, Presupuesto y Gestión de Repuestos](/images/avance1/bpd-p2.png)

3. **Proceso 3: Reparación y Control de Calidad**
   ![BPD Proceso 3 - Reparación y Control de Calidad](/images/avance1/bpd-p3.png)

4. **Proceso 4: Cobro y Entrega de Vehículo**
   ![BPD Proceso 4 - Cobro y Entrega de Vehículo](/images/avance1/bpd-p4.png)

## 4. Documento de Visión

* **Descripción del problema / oportunidad:** La dependencia de registros manuales y comunicaciones informales dificulta la trazabilidad de vehículos, el seguimiento de presupuestos/repuestos y el control de saldos y entregas, abriendo la oportunidad de sistematizar y centralizar la información operativa.
* **Actores y partes interesadas (Stakeholders):** Gerencia General / Dueño (Sergio Lezcano), ayudantes mecánicos, clientes (particulares y cuentas corrientes) y el equipo del proyecto / sistema.
* **Visión general de la solución:** Centralizar turnos, vehículos, diagnósticos, presupuestos, órdenes de trabajo, cobros y entregas con trazabilidad clara y reglas consistentes.

![Diagrama de bloques - Visión general](/images/avance2/diagrama-bloques-vision-gral.png)