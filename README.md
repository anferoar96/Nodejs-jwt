# Autenticación con JWT
## Prerrequisitos
Tener instalado:
- Docker
- Docker-compose
- Postman (Opcional)
## Ejecución
1. Ingresar desde la terminal a la ruta de la carpeta
2. Ejecutar **docker-compose up --build**
3. Probar la aplicacion.\
Cabe aclarar que el api se expone en el puerto 4001 y la base de datos en el 5430 
## Explicación
Se tienen 3 endpoints:
1. **/sign-up** Permite que el usuario se registre en la base de datos, recibe un json como el que se muestra a continuación. (Metodo POST)
```
{
    "username":"prueba",
    "password":"123456"
}
```
2. **/sign-in** Permite que el usuario se loguee en la base de datos, este recibe un objeto json con la misma estructura del anterior (Metodo POST)
3. **/change-password** Permite cambiar la contraseña de un usuario que se haya logueado es decir el usuario debia haber ingresado con el endpoint anterior y debe pasarle la nueva contraseña como un objeto json y en el header Authorization con el token que le devolvio al momento de loguearse.Ver ejemplo a continuación (Metodo POST)
#### Objeto JSON
```
{
    "newpassword":"1289"
}
```
#### Header
![alt text](https://i.imgur.com/4cZQjOO.png)

