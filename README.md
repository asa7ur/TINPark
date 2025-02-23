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

- **Front-End**: Desarrollado con React.js.
- **Back-End**: API REST basada en Node.js/Express.
- **Base de Datos**: MongoDB para almacenar registros de vehículos, matrículas y permisos.

## Instalación

### Requisitos Previos

- Node.js (v14 o superior)
- Base de datos MongoDB

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
