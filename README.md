# TINPark - Sistema de Control de Acceso para Urbanizaciones

TINPark es una aplicación diseñada para gestionar el acceso vehicular a urbanizaciones, controlando la entrada y salida de coches mediante cámaras de vigilancia y tecnología de reconocimiento de matrículas. Ofrece una solución segura, eficiente y personalizable para mejorar la seguridad y el control en comunidades residenciales.

## Funcionalidades Principales

- **Reconocimiento Automático de Matrículas (ANPR)**: Detecta automáticamente las matrículas de los vehículos que intentan ingresar o salir de la urbanización.
- **Lista Blanca/Negra**: Gestión de vehículos autorizados y no autorizados para el acceso.
- **Notificaciones en Tiempo Real**: Envía alertas a los administradores o residentes cuando se detecta un vehículo no autorizado.
- **Historial de Entradas y Salidas**: Almacena registros detallados de cada entrada y salida para auditorías o revisiones.
- **Aplicación Móvil**: Consulta el historial, gestiona los permisos y recibe notificaciones desde la app móvil.
- **Integración con Cámaras y Barreras**: Se conecta a sistemas de cámaras de vigilancia y barreras automáticas para gestionar el acceso físico.
- **Escalabilidad**: Configurable para una única urbanización o para múltiples puntos de acceso en grandes comunidades.

## Requisitos del Sistema

- **Front-End**: Desarrollado con [React.js/Vue.js/Angular] (indicar cuál estás usando).
- **Back-End**: API REST basada en [Node.js/Express/Python/Django] (indicar el framework).
- **Base de Datos**: [MySQL/PostgreSQL/MongoDB] para almacenar registros de vehículos, matrículas y permisos.
- **Cámaras de Vigilancia**: Compatible con cámaras IP con transmisión en tiempo real.
- **Servidor**: Se recomienda un servidor en la nube (AWS, Google Cloud, Azure) o en instalaciones locales según el tamaño de la urbanización.

## Instalación

### Requisitos Previos

- Node.js (v14 o superior)
- Base de datos MySQL/PostgreSQL/MongoDB
- Acceso a una red de cámaras IP compatibles

### Pasos para Instalar

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/usuario/tinpark.git
    cd tinpark
    ```

2. Instala las dependencias del back-end:

    ```bash
    cd backend
    npm install
    ```

3. Configura las variables de entorno. Crea un archivo `.env` y añade los valores de configuración:

    ```bash
    DB_HOST=localhost
    DB_USER=usuario
    DB_PASS=contraseña
    DB_NAME=tinpark
    ```

4. Inicia el servidor del back-end:

    ```bash
    npm start
    ```

5. Instala las dependencias del front-end:

    ```bash
    cd ../frontend
    npm install
    ```

6. Configura las variables de entorno para el front-end (URL del API, configuración de notificaciones, etc.).

7. Inicia el servidor del front-end:

    ```bash
    npm start
    ```

8. Accede a la aplicación desde tu navegador:

    ```
    http://localhost:3000
    ```

## Uso

### Añadir Nuevos Vehículos

1. Accede a la sección de "Gestión de Acceso" desde el panel de administración.
2. Introduce la matrícula del vehículo, el nombre del residente asociado y selecciona los permisos de acceso.
3. Guarda los cambios.

### Monitorización en Tiempo Real

- Ve las transmisiones en vivo de las cámaras de acceso y el estado de los vehículos que intentan entrar.
- Filtra los registros por fecha o número de matrícula para revisiones.

### Notificaciones

- Activa las notificaciones automáticas para recibir alertas cuando un vehículo no autorizado intente ingresar.
- Personaliza las alertas para administradores o residentes.

## Precios

### Modelo de Licencia

- **Licencia única**: Pago único por la instalación y configuración del sistema en una urbanización.
- **Suscripción mensual/anual**: Incluye mantenimiento, soporte técnico y actualizaciones automáticas del software.

| Tamaño de la Urbanización  | Pago Único  | Suscripción Mensual |
|----------------------------|-------------|---------------------|
| Pequeña (1-2 accesos)       | $2,000      | $200                |
| Mediana (3-5 accesos)       | $5,000      | $500                |
| Grande (6+ accesos)         | $10,000     | $1,000              |

## Contacto y Soporte

Para más información sobre la instalación, integración o precios personalizados, contáctanos en:

- **Email**: soporte@tinpark.com
- **Teléfono**: +1 800 123 4567
- **Página Web**: [tinpark.com](http://www.tinpark.com)

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, revisa el archivo [LICENSE](LICENSE).
