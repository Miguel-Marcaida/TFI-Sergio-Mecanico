# CU-05: Registrar aprobación del presupuesto

* **Actor principal:** Dueño (Administrador)
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Descripción:** Este caso de uso comienza cuando el dueño accede al sistema para registrar la aprobación del cliente en el sistema, con el fin de cambiar el estado del vehículo, indicando el inicio del proceso manual.
* **Precondiciones:** Debe existir un presupuesto previamente generado y asociado al vehículo en cuestión, el cliente debe haber aprobado este presupuesto.
* **Postcondiciones:** La aprobación queda registrada y el proceso queda habilitado para continuar hacia la Orden de Trabajo.

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. El dueño selecciona en el sistema el presupuesto correspondiente. | |
| | 2. El sistema muestra el detalle del presupuesto, su fecha de emisión. |
| 3. El dueño registra en el sistema la aprobación del cliente. | |
| | 4. El sistema registra la aprobación explícita del presupuesto. |
| | 5. El sistema informa que la aprobación fue registrada correctamente y cambia el estado del vehículo a apto para ejecución de obra de trabajo.(FIn de caso de Uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: En cualquier momento se produce una falla de energía, red o disponibilidad del sistema. No es posible completar el registro de la decisión. El caso de uso se interrumpe. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-05 Registrar aprobación del presupuesto](/images/avance3/ds5-registrar-aprob-presupuesto.png)

## Modelo de Análisis

![Modelo de Análisis - CU-05 Registrar aprobación del presupuesto](/images/avance3/ma5-registrar-aprob-presupuesto.png)