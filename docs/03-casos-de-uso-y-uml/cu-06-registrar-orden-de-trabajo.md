# CU-06: Registrar orden de Trabajo

* **Actor principal:** Mecánico
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Descripción:** Este caso de uso comienza cuando el mecánico selecciona un vehículo y crea una nueva ficha de orden de trabajo dependiente del vehículo, con el fin de registrar el estado del vehículo, detalles de la reparación y repuestos utilizados. Estos datos deben guardarse en el sistema.
* **Precondiciones:** El presupuesto correspondiente debe haber sido aprobado previamente por el cliente.
* **Postcondiciones:** La OT queda actualizada en el sistema con el nuevo estado de la reparación. Se actualiza la trazabilidad del vehículo.

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. El mecánico selecciona un vehículo y crea una nueva orden de trabajo. | |
| | 2. El sistema crea una nueva ficha llamada “orden de trabajo” dependiente del vehículo, con su ID de OT. |
| | 3. El sistema informa que la orden de trabajo ha sido creada con éxito. |
| 4. El mecánico ingresa los detalles de la reparación, como los repuestos utilizados, horas reales dedicadas a la reparación y observaciones técnicas adicionales. | |
| | 5. El sistema revisa que los datos sean válidos. |
| 6. El mecánico confirma la actualización. | |
| | 7. El sistema registra los datos ingresados y emite un mensaje de éxito. (Fin del caso de uso). |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: Se produce una falla de energía, red o disponibilidad del sistema. El sistema no puede registrar la actualización. El caso de uso se interrumpe. |
| **2.a** | El sistema no encuentra al cliente o vehículo en la base de datos. |
| **5.a** | El sistema detecta un error en la validación del ingreso de datos. Vuelve al paso 4.. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-06 Registrar orden de Trabajo](/images/avance3/ds6-registrar-OT.png)

## Modelo de Análisis

![Modelo de Análisis - CU-06 Registrar orden de Trabajo](/images/avance3/ma6-registrar-OT.png)