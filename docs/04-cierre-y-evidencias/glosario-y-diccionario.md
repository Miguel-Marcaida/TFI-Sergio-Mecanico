# Glosario y Diccionario de Datos

Síntesis de los términos clave del dominio y la estructura de datos del **Sistema de Gestión Integral Automotriz** para **"Sergio Mecánico"**.

## 1. Alcance y Límites de Referencia

* **Alcance funcional:** Admisión y turnos, diagnóstico y presupuesto, orden de trabajo y reparación (con control técnico final), y cobranza y cuentas corrientes.
* **Exclusiones del sistema:** Ejecución física de reparaciones manuales, gestión de stock/proveedores de repuestos (provistos por el cliente) y procesos contables, fiscales o impositivos.

---

## 2. Términos Clave del Negocio

| Término / Alias | Definición operativa |
| :--- | :--- |
| **Agenda Digital** *(Agenda de turnos)* | Herramienta para consultar disponibilidad horaria y agendar citas presenciales o virtuales en tiempo real. |
| **Diagnóstico Técnico** *(Inspección técnica, Ficha técnica)* | Evaluación de fallas, códigos de escáner y repuestos necesarios para elaborar el presupuesto. |
| **Presupuesto Formal** *(Cotización, Ficha de Presupuesto)* | Cotización con mano de obra y listado de piezas a cargo del cliente (vigencia base de 7 días corridos). |
| **Orden de Trabajo** *(OT)* | Registro del ingreso, tareas, repuestos usados, mano de obra y estado de avance de la reparación. |
| **Estado de la Orden** *(Estado OT)* | Situación de la OT a lo largo de su ciclo: `Creada`, `EnReparacion`, `EnEspera`, `ControlCalidad`, `Presupuestado`, `Finalizada` y `Entregada`. |
| **Control Final de Calidad** *(Control de Calidad, Inspección final)* | Verificación técnica posterior a la reparación antes de habilitar la entrega de la unidad. |
| **Historial de Reparaciones** *(Legajo histórico)* | Registro acumulativo de diagnósticos, OTs, servicios y mantenimientos asociados a un vehículo. |
| **Pago** *(Cobro, Registro de pago)* | Transacción registrada para saldar el servicio facturado, contemplando medios de pago y descuentos aplicables. |
| **Trazabilidad** *(Seguimiento)* | Seguimiento del vehículo y su OT a través de cada etapa del flujo del taller. |

---

## 3. Síntesis del Diccionario de Datos

| Entidad / Categoría | Campos y validaciones principales |
| :--- | :--- |
| **Clientes** | ID, nombre y apellido (alfanumérico hasta 30), DNI (8 dígitos), teléfono (hasta 15), correo y dirección. |
| **Turnos** | ID, fecha (`DD/MM/AAAA`), hora (`HH:MM`) y motivo (texto hasta 150). |
| **Vehículos** | Patente (alfanumérico hasta 7), marca, modelo (hasta 15), año, color, kilometraje y número de chasis / VIN (alfanumérico hasta 17). |
| **Diagnóstico** | ID, descripción de falla (hasta 255), códigos de error OBD-II (hasta 100) y lista de repuestos (hasta 255). |
| **Presupuesto** | ID, fecha de emisión (`DD/MM/AAAA`), monto de mano de obra (decimal), validez (por defecto 7 días corridos) y estado de aprobación (booleano). |
| **Órdenes de Trabajo** | Número de OT, fecha de ingreso, diagnóstico, estado y costo total. |
| **Control de Calidad** | Resultado del control (`Aprobado` / `No Aprobado`) y prueba realizada (ej. prueba de rodaje o escaneo final). |
| **Repuestos, Mecánicos, Facturación y Pagos** | Repuestos (código, nombre, precio, stock), mecánicos (legajo, nombre, especialidad), facturación (número, fecha, forma de pago, total) y pagos (ID, monto, medio, fecha, ID de transacción hasta 36). |