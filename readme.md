# Prueba Final Módulo VII - Banco Solar (Acceso a datos en aplicaciones Node)

## Descripción del proyecto

Validación conocimientos de Conectar una base de datos PostgreSQL con Node, Realizar consultas DML con Node y el paquete pg, Realizar consultas TCL con Node y el paquete pg, Construir una API RESTful utilizando PostgreSQL para la persistencia de datos, Manejar errores y Manejar códigos de estado HTTP.

## Prerrequisitos o Dependencias
- Windows, Mac, Linux.
- Javascript, PostgreSQL, Node.js.
- Visual Studio Code.
- PGAdmin o DBeaver.
- Postman

### Para inicializar el programa se requiere:

1. Instalar las dependencias Express, PG y DOTENV usadas con el comando `npm i express pg dotenv`.
2. Se requiere crear una base de datos en postgres llamada "bancosolar", usando las consultas de la carpeta SQL.
3. Crear un archivo `.env` con las variables de entorno necesarias (DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE).

### Ejemplos de uso:

Ruta para la página:
URL: http://localhost:3000/

- Agregar Usuario; ingresar Nombre, Balance y click en botón `Agregar`:

![Imagen](/assets/img/agregar.png)

- Hacer Transferencia; agregar un segundo usuario y elegir nombre de Emisor y Receptor, agregar Monto y click en botón `Transferir`:

![Imagen](/assets/img/transferencia1.png)
![Imagen](/assets/img/transferencia2.png)

- Editar Usuario; click en botón `Editar` en tabla Registro de Usuarios e ingresar actualización de datos:

![Imagen](/assets/img/editar1.png)
![Imagen](/assets/img/editar2.png)

- Eliminar Usuario; click en `Eliminar` en tabla Registro de Usuarios:

![Imagen](/assets/img/eliminar.png)

## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE) para detalles

---

## Eric Arancibia (https://github.com/ericarancibia) - G68 Desarrollo Aplicaciones Full Stack JavaScript. Talento Digital - Academia Desafío Latam