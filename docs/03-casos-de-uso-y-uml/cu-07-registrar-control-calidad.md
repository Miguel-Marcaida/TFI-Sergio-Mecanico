# CU-07: Registrar control final de calidad

* **Actor principal:** Mecánico
* **Personas involucradas (Actores Secundarios):** Dueño
* **Descripción:** Este caso de uso comienza cuando el mecánico accede a la orden de trabajo del respectivo vehículo, con el fin de registrar que el control de calidad fue exitoso.
* **Precondiciones:** La reparación correspondiente debe haber finalizado y la Orden de Trabajo debe estar en un estado que permita realizar el control.
* **Postcondiciones:** El resultado del control de calidad queda registrado, el dueño notifica al cliente que su vehículo está listo, y el sistema actualiza el estado del mismo para continuar hacia cobranza y entrega.

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. El mecánico selecciona el vehículo, para ingresar a su respectiva orden de trabajo. | |
| | 2. El sistema muestra la información de la OT. |
| 3. El mecánico selecciona que el control de calidad fue exitoso. | |
| | 4. El sistema valida la información ingresada. |
| | 5. El sistema registra el control técnico como aprobado y emite un mensaje de éxito. (Fin del caso de uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: Se produce una falla de energía, red o disponibilidad del sistema. El sistema no puede registrar el resultado. El caso de uso se interrumpe. |
| **\*** | Se detecta una falla en la reparación realizada: El sistema detecta que la reparación presenta una falla. Registra el resultado no satisfactorio y no habilita la salida ni la facturación. El vehículo vuelve a la etapa de reparación. Una vez corregida la falla, se repite este control técnico. |
| **\*** | Se detecta una nueva falla no incluida en el diagnóstico inicial: El sistema detecta una nueva falla no incluida en el diagnóstico inicial. Registra el resultado como no aprobado y no habilita la salida ni la facturación. El proceso vuelve a la etapa de confección de un nuevo presupuesto. Se requiere una nueva aprobación del cliente antes de continuar. |
| **4.a** | Datos del control incompletos o inválidos: El sistema informa cuáles son los datos faltantes o incorrectos. El mecánico corrige o completa la información. Vuelve al paso 7. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-07 Registrar control final de calidad](/images/avance3/ds7-registrar-control-calidad.png)

## Modelo de Análisis

![Modelo de Análisis - CU-07 Registrar control final de calidad](/images/avance3/ma7-registrar-control-calidad.png)