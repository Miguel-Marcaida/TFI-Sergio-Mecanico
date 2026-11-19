# CU-08: Crear factura y registrar pago

* **Actor principal:** Dueño (Administrador)
* **Personas involucradas (Actores Secundarios):** Ninguno
* **Descripción:** Este caso de uso comienza cuando el dueño selecciona crear una factura, el sistema deberá incluir datos como número de factura, nombre y número de teléfono del cliente, fecha y hora de emisión, número de orden de trabajo, vehículo asociado, descripción, cantidad y precio unitario, monto total a pagar.
* **Precondiciones:** El control técnico final debe encontrarse aprobado. Debe existir un trabajo finalizado correspondiente a ese vehículo.
* **Postcondiciones:** Factura creada y pago queda registrado en el sistema. El comprobante del pago queda asociado al cliente. Se emite e imprime el comprobante definitivo. Se actualiza el estado de la cuenta del cliente.

## Escenario Principal (Flujo Básico)

| Acción del actor (o intención) | Responsabilidad del sistema |
| :--- | :--- |
| 1. el dueño selecciona la OT | |
| | 2. El sistema valida el ingreso de datos y muestra los detalles de la OT |
| 3. el dueño selecciona la opción “generar factura” | |
| | 4. el sistema crea una factura vinculada al vehículo con los siguientes datos:<br>encabezado: ID factura, fecha y hora de emisión, nombre y número del cliente, modelo y patente del auto.<br>cuerpo: descripción del servicio, repuestos, cantidad,precio unitario y monto final. |
| 5. El dueño confirma la factura. | |
| 6. El dueño confirma el pago realizado por el cliente con su respectivo método de pago. | |
| | 7. El sistema valida la información ingresada. |
| | 8. El sistema registra el pago y emite un mensaje de éxito. |
| | 9.El sistema genera el comprobante digital, habilita su impresión y actualiza el estado de la cuenta del cliente. (Fin del caso de uso) |

## Extensiones (Flujos Alternativos)

| Código | Descripción |
| :--- | :--- |
| **\*** | Falla general del sistema: Se produce una falla de energía, red o disponibilidad del sistema. El sistema no puede registrar el cobro. El caso de uso se interrumpe. |
| **7.a** | Datos del pago incompletos o inválidos: El sistema detecta información incorrecta o faltante. Informa cuáles son los datos que deben corregirse. El dueño completa o corrige la información. Vuelve al paso 7. |
| **7.b** | Pago mediante transferencia: El sistema registra el pago mediante transferencia y valida los datos del comprobante o transacción. Continúa en el paso 8. |
| **7.c** | Pago en efectivo: El sistema registra el pago en efectivo y aplica el 5% de descuento adicional. Continúa en el paso 8. |
| **9.a** | Pago parcial / saldo pendiente: El sistema registra el pago parcial y deja constancia del saldo pendiente. El estado de la cuenta del cliente queda como "Pendiente". Finaliza el caso de uso. |

## Diagrama de Secuencia

![Diagrama de Secuencia - CU-08 Crear factura y registrar pago](/images/avance3/ds8-crear-factura-registrar-pago.png)

## Modelo de Análisis

![Modelo de Análisis - CU-08 Crear factura y registrar pago](/images/avance3/ma8-crear-factura-resgistrar-pago.png)