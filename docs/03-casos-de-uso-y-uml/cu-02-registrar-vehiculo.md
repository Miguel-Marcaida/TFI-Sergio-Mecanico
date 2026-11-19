# CU-02: Registrar vehículo

* **Actor principal:** Recepcionista
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Descripción:** Este caso de uso comienza cuando la recepcionista ingresa los datos del vehículo en el sistema, para que los mismos queden registrados en la base de datos.
* **Precondiciones:** El vehículo se encuentra físicamente en las instalaciones del taller para su admisión. El cliente titular debe estar previamente registrado en el sistema.
* **Postcondiciones:** El vehículo queda registrado en el sistema de forma unívoca (patente y chasis) y asociado al cliente correspondiente. Se genera el legajo histórico del vehículo. Se emite el comprobante de admisión.
* **Frecuencia:** Frecuente (cada vez que ingresa un cliente nuevo o un cliente habitual adquiere una nueva unidad).

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. La recepcionista selecciona la opción para registrar un vehículo. | |
| 2. La recepcionista ingresa los datos del cliente y del vehículo. | |
| | 3. El sistema valida que los datos obligatorios cumplan con las reglas de codificación establecidas. |
| 4. La recepcionista confirma los datos ingresados. | |
| | 5. El sistema verifica que la patente y el número de chasis no se encuentren registrados previamente. |
| | 6. El sistema vincula el vehículo con el cliente correspondiente. |
| | 7. El sistema registra el vehículo y genera su legajo histórico y emite el comprobante de admisión. |
| | 8. El sistema informa que el registro se realizó correctamente. (Fin del caso de uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: El sistema informa que no es posible continuar con la operación. El registro queda sin completar. El caso de uso se interrumpe. |
| **3.a** | Datos obligatorios inválidos o incompletos: El sistema informa cuáles son los datos inválidos o faltantes. Vuelve al paso 2. |
| **5.a** | Vehículo ya registrado: El sistema detecta que la patente o el número de chasis ya se encuentran registrados. El sistema informa que el vehículo ya existe. No se genera un nuevo registro. Finaliza el caso de uso. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-02 Registrar vehículo](/images/avance3/ds2-registrar-vehiculo.png)

## Modelo de Análisis

![Modelo de Análisis - CU-02 Registrar vehículo](/images/avance3/ma2-registrar-vehiculo.png)