# CU-09: Entrega de Vehículo

* **Actor principal:** Recepcionista
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Precondiciones:** El control técnico debe estar aprobado. El vehículo debe estar listo para la entrega. El cobro debe estar registrado.
* **Postcondiciones:** La entrega del vehículo queda registrada como completa. El vehículo deja de estar bajo resguardo del taller. El proceso del servicio se da por finalizado.

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. El vehículo se encuentra habilitado para su entrega al cliente. | |
| 2. La recepcionista selecciona en el sistema el vehículo. | |
| | 3. El sistema muestra la información del servicio, el estado del control técnico y la situación del cobro. |
| 4. La recepcionista verifica que se cumplan las condiciones necesarias para efectuar la entrega. | |
| 5. El cliente se presenta en el taller para retirar el vehículo. | |
| 6. El mecánico realiza una breve demostración técnica del funcionamiento del vehículo frente al cliente. | |
| 7. La recepcionista confirma en el sistema la entrega del vehículo. | |
| | 8. El sistema registra la entrega como realizada. |
| | 9. El sistema actualiza el estado final correspondiente del servicio o de la Orden de Trabajo. |
| | 10. El sistema informa que la entrega fue registrada correctamente. (Fin del caso de uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: Se produce una falla de energía, red o disponibilidad del sistema. El sistema no puede registrar la entrega. El caso de uso se interrumpe. |
| **4.a** | Control técnico no aprobado: El sistema detecta que el control técnico final no se encuentra aprobado. Informa que el vehículo no está habilitado para la entrega. La entrega no se realiza. Finaliza el caso de uso. |
| **4.b** | Situación de cobro no regularizada: El sistema detecta que el estado del cobro no cumple con las condiciones acordadas. Informa la situación al encargado o dueño. Debe resolverse o registrarse correctamente la condición de pago antes de continuar. Vuelve al paso 4. |
| **5.a** | El cliente demora el retiro: El sistema registra que el vehículo permanece bajo resguardo interno del taller. La entrega queda pendiente. Cuando el cliente se presenta, se retoma desde el paso 5. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-09 Entrega de Vehículo](/images/avance3/ds9-entregar-vehiculo.png)

## Modelo de Análisis

![Modelo de Análisis - CU-09 Entrega de Vehículo](/images/avance3/ma9-entregar-vehiculo.png)