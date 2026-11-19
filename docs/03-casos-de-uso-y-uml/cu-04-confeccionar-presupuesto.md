# CU-04: Confeccionar de Presupuesto

* **Actor principal:** Dueño (Administrador)
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Descripción:** Este caso de uso comienza cuando el dueño del taller busca un vehículo en el sistema para generar un presupuesto, se muestran los detalles del vehículo incluido el diagnóstico técnico, el actor ingresa el monto de cada repuesto y servicio para que el sistema calcule el monto total. Finalmente se emite una ficha de presupuesto al cliente vía Whatsapp.
* **Precondiciones:** Debe existir un diagnóstico técnico previo registrado en el sistema para el vehículo en cuestión. La lista de precios de mano de obra debe estar cargada.
* **Postcondiciones:** El presupuesto queda generado y registrado en el sistema, asociado al diagnóstico y al vehículo correspondiente, disponible para ser presentado al cliente. Se genera el documento de Presupuesto Formal. La Orden de Trabajo pasa a estado "Presupuestado".

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. El dueño selecciona el vehículo o diagnóstico correspondiente. | |
| | 2. El sistema muestra la información del diagnóstico técnico asociado. |
| 3. El dueño ingresa los costos de mano de obra correspondientes al diagnóstico. | |
| | 4. El sistema valida los datos ingresados y calcula el costo estimado total del presupuesto. |
| | 5. El sistema muestra el detalle del presupuesto generado, datos del vehículo (petente, modelo), datos del cliente (nombre, teléfono), incluyendo la lista de repuestos requeridos (tomada del diagnóstico). |
| 6. El Dueño revisa la información y confirma la generación del presupuesto. | |
| | 7. El sistema registra el presupuesto y su fecha de emisión, lo asocia al vehículo y diagnóstico correspondiente y genera el documento de Presupuesto Formal y lo envía al cliente vía WhatsApp |
| | 8. El sistema informa que la confección del presupuesto fue exitosa. (Fin del caso de uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: Se produce una falla de energía, red o disponibilidad del sistema. El sistema no puede completar la operación. El caso de uso se interrumpe. |
| **2.a** | Diagnóstico no encontrado: El sistema no encuentra un diagnóstico registrado para el vehículo seleccionado. Informa que no es posible generar el presupuesto. Finaliza el caso de uso. |
| **4.a** | Datos del presupuesto incompletos: El sistema detecta que faltan datos necesarios para calcular el presupuesto. Informa al actor cuáles deben completarse. Vuelve al paso 3. |
| **6.a** | El actor detecta información incorrecta antes de confirmar: El sistema permite modificar los conceptos del presupuesto. Vuelve al paso 3 para recalcular el total. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-04 Confeccionar de Presupuesto](/images/avance3/ds4-confeccionar-presupuesto.png)

## Modelo de Análisis

![Modelo de Análisis - CU-04 Confeccionar de Presupuesto](/images/avance3/ma4-confeccionar-presupuesto.png)