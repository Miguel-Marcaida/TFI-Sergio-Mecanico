# CU-03: Registrar diagnóstico técnico

* **Actor principal:** Mecánico
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Descripción:** Este caso de uso comienza cuando el mecánico selecciona el vehículo para registrar su ficha técnica con sus respectivas observaciones, este finaliza cuando el sistema válida los datos y la ficha técnica queda guardada en el sistema.
* **Precondiciones:** El vehículo debe encontrarse admitido en el taller y disponible para la evaluación técnica.
* **Postcondiciones:** El diagnóstico técnico queda registrado en el sistema y asociado al vehículo correspondiente, quedando disponible para la generación del presupuesto. Se genera el informe técnico preliminar.
* **Frecuencia:** Cada vez que un vehículo admitido en el taller requiera una evaluación y diagnóstico técnico.

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. El mecánico selecciona en el sistema el vehículo correspondiente. | |
| | 2. El sistema muestra la información del vehículo y habilita el registro del diagnóstico técnico. |
| 3. El mecánico realiza la evaluación técnica del vehículo utilizando inspección manual y, cuando corresponda, herramientas de apoyo como el escáner. | |
| 4. El mecánico ingresa en el sistema los códigos de error y fallas detectadas y la lista de repuestos necesarios. | |
| | 5. El sistema registra los códigos de error, fallas detectadas y la lista de repuestos. |
| | 6. El sistema valida la información ingresada. |
| 7. El mecánico confirma el diagnóstico registrado. | |
| | 8. El sistema guarda el diagnóstico, genera el informe técnico preliminar y lo asocia al historial del vehículo. |
| 9. El mecánico aprueba el diagnóstico técnico para presupuestación. | |
| | 10. El sistema informa que el diagnóstico fue registrado correctamente. (Fin del caso de uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: Se produce una falla de energía, red o disponibilidad del sistema. El sistema no puede completar el registro. El caso de uso se interrumpe. |
| **2.a** | Vehículo no encontrado: El sistema no encuentra el vehículo seleccionado o ingresado. Informa la situación al mecánico. El mecánico verifica los datos del vehículo. Vuelve al paso 2. |
| **6.a** | Datos del diagnóstico incompletos o inválidos: El sistema informa que existen datos obligatorios incompletos o incorrectos. El mecánico corrige o completa la información. Vuelve al paso 5. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-03 Registrar diagnóstico técnico](/images/avance3/ds3-registrar-diagnostico.png)

## Modelo de Análisis

![Modelo de Análisis - CU-03 Registrar diagnóstico técnico](/images/avance3/ma3-registrar-diagnostico.png)