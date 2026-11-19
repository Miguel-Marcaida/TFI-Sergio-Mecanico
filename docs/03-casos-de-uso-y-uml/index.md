# 3. Casos de Uso y Modelos UML

En esta sección se integran los artefactos funcionales, estructurales y de comportamiento del **Sistema de Gestión Integral Automotriz** para **"Sergio Mecánico"** a partir de las fases de **Inicio y Elaboración** del informe final del Grupo 3 (UTN FRT, Comisión 2K5) y los recursos de `avance3`.

## 1. Diagrama General de Casos de Uso

El modelo de casos de uso contempla el ciclo operativo completo del taller, desde la solicitud del turno y admisión vehicular hasta el diagnóstico, presupuesto, orden de trabajo, control de calidad, facturación/cobranza y entrega final.

![Diagrama de Casos de Uso](/images/avance3/diag-Caso-uso.png)

## 2. Índice de Casos de Uso (`CU-01` a `CU-09`)

Cada caso de uso tiene su propia página con la especificación completa (actores, descripción, precondiciones, postcondiciones, flujo básico y flujos alternativos/excepciones), su **Diagrama de Secuencia** y su **Modelo de Análisis**:

| ID | Caso de Uso | Actores principales | Ficha | Diagramas incluidos |
| :--- | :--- | :--- | :--- | :--- |
| **CU-01** | Solicitar turno | Cliente, Recepcionista | [Ver CU-01](./cu-01-solicitar-turno) | Secuencia y Modelo de Análisis |
| **CU-02** | Registrar vehículo | Recepcionista, Cliente | [Ver CU-02](./cu-02-registrar-vehiculo) | Secuencia y Modelo de Análisis |
| **CU-03** | Registrar diagnóstico técnico | Mecánico | [Ver CU-03](./cu-03-registrar-diagnostico) | Secuencia y Modelo de Análisis |
| **CU-04** | Confeccionar presupuesto | Recepcionista / Mecánico | [Ver CU-04](./cu-04-confeccionar-presupuesto) | Secuencia y Modelo de Análisis |
| **CU-05** | Registrar aprobación del presupuesto | Recepcionista, Cliente | [Ver CU-05](./cu-05-registrar-aprobacion-presupuesto) | Secuencia y Modelo de Análisis |
| **CU-06** | Registrar orden de trabajo | Recepcionista / Mecánico | [Ver CU-06](./cu-06-registrar-orden-de-trabajo) | Secuencia y Modelo de Análisis |
| **CU-07** | Registrar control final de calidad | Mecánico / Responsable | [Ver CU-07](./cu-07-registrar-control-calidad) | Secuencia y Modelo de Análisis |
| **CU-08** | Crear factura y registrar pago | Cajero / Recepcionista, Cliente | [Ver CU-08](./cu-08-crear-factura-registrar-pago) | Secuencia y Modelo de Análisis |
| **CU-09** | Entregar vehículo | Recepcionista / Responsable, Cliente | [Ver CU-09](./cu-09-entregar-vehiculo) | Secuencia y Modelo de Análisis |

## 3. Modelo del Dominio

El modelo del dominio sintetiza las entidades conceptuales del taller y sus relaciones principales.

![Modelo del Dominio](/images/avance3/mod-dominio.png)

## 4. Diagrama de Transición de Estados

Modela los cambios de estado de la Orden de Trabajo a lo largo de su ciclo de atención.

![Diagrama de Transición de Estados](/images/avance3/diag-trans-estado-OT.png)