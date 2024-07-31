# Sistema de Registro e Inicio de Sesión de Usuarios

Este programa permite el registro y almacenamiento de información de usuarios, incluyendo nombre de usuario y contraseña, utilizando funciones, diccionarios, bucles y condicionales en Python.

## Descripción

El programa proporciona funcionalidad para:
- Registrar un nuevo usuario con un nombre de usuario y una contraseña.
- Imprimir todos los usuarios registrados.
- Iniciar sesión de un usuario verificando el nombre de usuario y la contraseña.

## Estructura del Código

### Diccionario

El diccionario `users` se utiliza para almacenar los nombres de usuario y las contraseñas como pares clave-valor.

### Funciones

1. **register_user(username, password)**

   Registra un nuevo usuario en el diccionario `users`.
   - **Parámetros**: 
     - `username` (str): El nombre de usuario.
     - `password` (str): La contraseña del usuario.
   - **Devuelve**: 
     - `str`: Mensaje que indica si el usuario fue registrado exitosamente o si el usuario ya existe.

2. **print_users()**

   Imprime todos los usuarios registrados.
   - **Devuelve**: 
     - `str`: Mensaje que indica si no hay usuarios registrados.
     - Imprime cada par de nombre de usuario y contraseña.

3. **user_login(username, password)**

   Verifica si el nombre de usuario y la contraseña coinciden con una entrada en el diccionario `users`.
   - **Parámetros**: 
     - `username` (str): El nombre de usuario.
     - `password` (str): La contraseña del usuario.
   - **Devuelve**: 
     - `str`: Mensaje que indica si el inicio de sesión fue exitoso o si el usuario no fue encontrado.

4. **menu()**

   Muestra un menú para que el usuario elija entre registrar un usuario, imprimir los usuarios registrados, iniciar sesión, o salir del programa.
   - Utiliza un bucle `while` para que el menú siga mostrándose hasta que el usuario decida salir.
   - Administra la entrada del usuario y llama a las funciones correspondientes basándose en la entrada.

## Ejecución

Para ejecutar el programa, simplemente corre el archivo Python. El menú se mostrará y podrás interactuar con el programa eligiendo las opciones disponibles.

```python
# Ejecutar el menú
menu()
```

### Menú

El menú ofrece las siguientes opciones:
1. **Registrar**: Permite registrar un nuevo usuario introduciendo un nombre de usuario y una contraseña.
2. **Imprimir usuarios**: Imprime todos los usuarios registrados.
3. **Iniciar sesión**: Permite iniciar sesión introduciendo un nombre de usuario y una contraseña.
4. **Salir**: Sale del programa.

## Ejemplo de Uso

1. **Registrar usuario**:
   - Introduce el nombre de usuario: `usuario1`
   - Introduce la contraseña: `contrasena1`
   - Mensaje: `User registered`

2. **Imprimir usuarios**:
   - Username: `usuario1`, Password: `contrasena1`

3. **Iniciar sesión**:
   - Introduce el nombre de usuario: `usuario1`
   - Introduce la contraseña: `contrasena1`
   - Mensaje: `User logged in`

4. **Salir**:
   - Mensaje: `Exiting...`

---

Este README proporciona una descripción detallada del programa y cómo utilizarlo. ¡Espero que te sea útil!