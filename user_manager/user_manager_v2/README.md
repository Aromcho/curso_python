# Cliente App

Este proyecto es una aplicación de gestión de usuarios utilizando Flask y Programación Orientada a Objetos (POO). La aplicación permite registrar, iniciar sesión y gestionar compras de usuarios.

## Instalación

Para instalar el paquete, sigue estos pasos:

1. Clona el repositorio o descarga el archivo comprimido.
2. Navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar el paquete:

    ```shell
    pip install .
    ```

## Uso

Para ejecutar la aplicación, utiliza el siguiente comando:

```shell
run-app
```

Esto iniciará el servidor Flask en modo de desarrollo. La aplicación estará disponible en `http://127.0.0.1:5000/`.

## Endpoints

### Página principal

- **GET /api/**: Devuelve un mensaje de bienvenida.

### Gestión de usuarios

- **POST /api/register**: Registra un nuevo usuario.
  - Parámetros:
    - `username` (str): Nombre de usuario.
    - `password` (str): Contraseña del usuario.
    - `email` (str): Correo electrónico del usuario.
    - `edad` (int): Edad del usuario.
  - Respuestas:
    - 200: Usuario registrado exitosamente.
    - 400: Usuario ya existe.

- **POST /api/login**: Inicia sesión con un usuario existente.
  - Parámetros:
    - `username` (str): Nombre de usuario.
    - `password` (str): Contraseña del usuario.
  - Respuestas:
    - 200: Inicio de sesión exitoso.
    - 400: Usuario o contraseña incorrectos.

- **GET /api/users**: Obtiene la lista de usuarios registrados.
  - Respuesta:
    - 200: Lista de usuarios en formato JSON.

### Gestión de compras

- **POST /api/compras**: Agrega una compra a un usuario.
  - Parámetros:
    - `username` (str): Nombre de usuario.
    - `producto` (str): Producto comprado.
  - Respuestas:
    - 200: Producto agregado a las compras del usuario.
    - 400: Usuario no encontrado.

- **GET /api/compras/<username>**: Obtiene la lista de compras de un usuario específico.
  - Parámetros:
    - `username` (str): Nombre de usuario en la URL.
  - Respuesta:
    - 200: Lista de compras del usuario en formato JSON.
    - 400: Usuario no encontrado.

## Organización del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```
cliente_app/
│
├── cliente_app/
│   ├── __init__.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── cliente.py
│   ├── api/
│   │   ├── __init__.py
│   │   └── routes.py
│   └── app.py
├── templates/
│   └── index.html
├── static/
│   ├── script.js
│   └── styles.css
├── setup.py
└── README.md
```

## Funcionalidades Adicionales

- **Cliente**: La clase `Cliente` en `cliente.py` maneja la información y acciones relacionadas con los usuarios, incluyendo el registro de compras.
- **Compras**: Los usuarios pueden agregar y ver sus compras a través de la API.

Este enfoque modularizado mejora la organización del proyecto, separando las responsabilidades y facilitando el mantenimiento y la escalabilidad. También hemos agregado más funcionalidad a la clase `Cliente` y a la API para gestionar las compras de los usuarios.
```

Esta versión del README incluye instrucciones claras de instalación y uso, así como una descripción detallada de los endpoints y la organización del proyecto. Además, proporciona una visión general de las funcionalidades adicionales, destacando la modularización y el manejo de compras.