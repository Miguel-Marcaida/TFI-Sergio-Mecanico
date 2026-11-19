# CU-01: Solicitar turno

* **Actor principal:** Recepcionista
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Descripción:** Este caso de uso comienza cuando la recepcionista quiere registrar un turno, el sistema deberá mostrar la agenda con los turnos disponibles para confirmar el turno ingresando los datos del cliente.
* **Precondiciones:** El sistema debe tener configurada la agenda digital del taller con los horarios de atención disponibles.
* **Postcondiciones:** El turno queda registrado en el sistema para la fecha y horario acordados, asociado a los datos del cliente y del vehículo. La agenda digital queda actualizada.
* **Frecuencia:** Múltiples veces al día.

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. La recepcionista accede a la agenda digital. | |
| 2. La recepcionista ingresa los datos del cliente (nombre, número de teléfono) y del vehículo (modelo, patente), junto con el motivo de la solicitud. | |
| | 3. El sistema valida los datos ingresados. |
| | 4. El sistema muestra las opciones de fecha disponibles con sus respectivos horarios. |
| 5. La recepcionista selecciona el turno acordado con el cliente. | |
| 6. La recepcionista confirma el registro del turno. | |
| | 7. El sistema verifica la disponibilidad, registra el turno y actualiza la agenda digital. |
| | 8. El sistema envía el comprobante del turno al cliente vía WhatsApp. |
| | 9. El sistema informa que el turno fue registrado correctamente. (Fin del caso de uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **3.a** | Cliente no registrado: El sistema detecta que el cliente no existe en la base de datos. El sistema habilita el registro del nuevo cliente. |
| **3.b** | Datos ingresados inválidos o incompletos: El sistema informa cuáles son los datos inválidos o faltantes. Vuelve al paso 2. |
| **4.a** | No existen turnos disponibles: El sistema informa que no hay turnos disponibles para el período solicitado. Vuelve al paso 4. |
| **5.a** | El cliente rechaza las opciones disponibles: El sistema cancela la operación y finaliza el caso de uso. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-01 Solicitar turno](/images/avance3/ds1-solicitar-turno.png)

## Modelo de Análisis

![Modelo de Análisis - CU-01 Solicitar turno](/images/avance3/ma1-solicitar-turno.png)