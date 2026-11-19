# 2. Reglas del Dominio y Procesos del Sistema

En esta sección se presentan las **Reglas de Negocio** y los **6 Procesos Automatizados (BPD)** del **Sistema de Gestión Integral Automotriz** para el taller **"Sergio Mecánico"**, tomados de la **Especificación Complementaria** del informe final del Grupo 3 (UTN FRT, Comisión 2K5).

## 1. Reglas del Dominio (Reglas de Negocio)

El sistema formaliza políticas operativas, esquemas de codificación obligatorios, vigencias de presupuestos y descuentos comerciales mediante las siguientes reglas:

| ID | Descripción | Grado de Variación | Origen |
| :--- | :--- | :--- | :--- |
| **Regla 01** | El horario de atención al público del taller es de lunes a sábado, en el horario de 08:00 hs a 22:00 hs. | Bajo | Políticas de la empresa |
| **Regla 02** | Al realizar un trabajo, se deben registrar obligatoriamente los datos del cliente y del vehículo bajo los siguientes parámetros: Nombre completo del cliente (hasta 30 caracteres), Número del cliente (15 dígitos, 0 a 9), Patente (hasta 7 caracteres) y Modelo del vehículo (hasta 15 caracteres). | Bajo | Políticas de la empresa / Esquema de codificación |
| **Regla 03** | Para todos los pagos por el servicio realizado abonados mediante transferencia o efectivo, el comprobante de pago recibido (o su correspondiente número de transacción y respaldo digital) deberá ser registrado obligatoriamente en la base de datos con la siguiente estructura: Nombre del cliente (hasta 30 caracteres), Monto de pago (hasta 7 dígitos, 0 al 9), Fecha (hasta 6 dígitos) e ID de transacción (hasta 36 caracteres). | Bajo | Políticas de la empresa / Esquema de codificación |
| **Regla 04** | Todo presupuesto generado a partir del diagnóstico técnico tiene una validez máxima de 7 días corridos desde su emisión; vencido ese plazo, el presupuesto debe ser recalculado y requiere la aprobación explícita del cliente para iniciar la orden de trabajo. | Medio | Políticas de la empresa |
| **Regla 05** | Los descuentos aplicados sobre el total de la mano de obra o de los servicios se rigen por la siguiente escala fija: 10% de bonificación para clientes habituales o con flotas registradas, y 5% adicional por pagos abonados estrictamente en efectivo. | Medio | Políticas de Descuentos del Negocio |

## 2. Procesos Automatizados del Sistema (BPD)

A partir de la **Especificación Complementaria**, el flujo del sistema se organiza en **6 procesos**, vinculando actores, precondiciones y controles obligatorios:

| Proceso | Actores principales | Precondición | Foco y control del proceso |
| :--- | :--- | :--- | :--- |
| **1. Recepción y Solicitud de Turno** | Cliente, Recepcionista, Sistema | El cliente requiere atención mecánica | Solicitud presencial o virtual; consulta de agenda digital en tiempo real para evitar superposiciones y registro inicial |
| **2. Admisión Vehicular Obligatoria** | Recepcionista, Sistema, Cliente | El vehículo se presenta física y puntualmente en el taller | Validación estricta de campos codificados (`Regla 02`) para crear el legajo histórico del vehículo |
| **3. Diagnóstico Técnico** | Mecánico, Sistema | Vehículo admitido en planta técnica | Inspección física y escaneo electrónico/mecánico; registro formal del diagnóstico como insumo previo a presupuestar |
| **4. Confección y Aprobación del Presupuesto** | Sistema, Recepcionista/Administrador, Cliente | Diagnóstico técnico cargado en el sistema | Cálculo de mano de obra y repuestos; vigencia de 7 días corridos (`Regla 04`) y aprobación explícita para emitir la OT |
| **5. Ejecución y Control Final** | Mecánico, Sistema | Presupuesto aprobado explícitamente por el cliente | Emisión automática de la Orden de Trabajo (OT), actualización de avance y control técnico de calidad obligatorio antes de salir |
| **6. Facturación y Cobranza** | Recepcionista/Cajero, Sistema, Cliente | Control técnico final aprobado | Aplicación de escala de descuentos (`Regla 05`), registro estructurado del comprobante (`Regla 03`), emisión final y entrega |

### Diagramas BPD de los 6 Procesos Automatizados

1. **Proceso 1 — Recepción y Solicitud de Turno:** Gestión de pedido presencial o virtual con agenda digital en tiempo real.
   ![BPD Automatizado Proceso 1 - Recepción y Solicitud de Turno](/images/avance2/bpda1-recepcion-solicitud-turno.png)

2. **Proceso 2 — Admisión Vehicular Obligatoria:** Carga y validación de datos del cliente y vehículo según `Regla 02`.
   ![BPD Automatizado Proceso 2 - Admisión Vehicular Obligatoria](/images/avance2/bpda2-adminision-vehicular.png)

3. **Proceso 3 — Diagnóstico Técnico:** Registro de inspección y diagnóstico técnico previo al presupuesto.
   ![BPD Automatizado Proceso 3 - Diagnóstico Técnico](/images/avance2/bpda3-diag-tecnico.png)

4. **Proceso 4 — Confección y Aprobación del Presupuesto:** Presupuestación, control de vigencia de 7 días (`Regla 04`) y aprobación explícita.
   ![BPD Automatizado Proceso 4 - Confección y Aprobación del Presupuesto](/images/avance2/bpda4-confec-aprob-presupuesto.png)

5. **Proceso 5 — Ejecución y Control Final:** Emisión de OT, avance en planta y control de calidad obligatorio.
   ![BPD Automatizado Proceso 5 - Ejecución y Control Final](/images/avance2/bpda5-ejecucion-control.png)

6. **Proceso 6 — Facturación y Cobranza:** Escala de descuentos (`Regla 05`), comprobante obligatorio (`Regla 03`) y entrega.
   ![BPD Automatizado Proceso 6 - Facturación y Cobranza](/images/avance2/bpda6-facturacion-cobranza.png)