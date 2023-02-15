# Kanban Board API #
Es un tablero donde se asignan posits(stickers con notas) dentro de cada sector, los sectores o columnas son buffer, working y done.
- [/] Antes de ingresar al tablero debe existir un registro y autenticación del usuario. (Los datos a considerar son name, email y password, usar una autenticación simple)
- [X] Cada card debe pertenecer en base de datos a un usuario
- [X] Se debe poder agregar tarjetas. Las tarjetas tendrán nombre y descripción.
- [X] Se podrá editar los valores de los card.
- [X] La base de datos debe iniciar con los siguientes cards:
    - 1 card en buffer con el nombre "Agregar subtareas al kanban".
    - 1 card en working con el nombre "Testing Kanban".
- [X] Tener unos ejemplos de postman para ejecutar API calls al backend

### Detalles tecnicos
- [X] El proyecto usa NodeJS/Express
- [X] Base de datos en MongoDB Atlas
- [ ] Frontend

### Ejemplos con POSTMAN
Se han elaborado diferentes CRUDS(POST, GET, PUT, DELETE) para operar los diferentes elementos de la Kanban Board, para todos los casos revise las rutas en el folder `routes`:
- `http://localhost:5000/users`
- `http://localhost:5000/posits`
- `http://localhost:5000/login`
- `http://localhost:5000/register`