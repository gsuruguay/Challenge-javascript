# ReactApp con Nodejs

## Objetivo

**Desarrollar una aplicación para administración de presupuesto personal. La misma debe permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las operaciones registradas.**

## Secciones
### Home

* Muestra el balance actual. 
* Un listado de las últimas 10 operaciones registradas.

![Imagen del Home](https://i.postimg.cc/G2DsQCB1/Home.jpg)

### Abm (Alta-baja-modificación)

*  Listado de operaciones registradas según su tipo (ingreso o egreso).

![Imagen de listado Ingresos](https://i.postimg.cc/G2DsQCB1/Home.jpg)

![Imagen de listado Egresos](https://i.postimg.cc/G2DsQCB1/Home.jpg)

*  Desde el listado, se debe poder modificar o eliminar una operación registrada previamente.
*  No es posible modificar el tipo de operación (ingreso o egreso) una vez creada.
*  Formulario de registro de operación (contiene Concepto, Monto, Fecha, Tipo).

![Imagen del Formulario](https://i.postimg.cc/kgj8MwrL/form.jpg)

## API
### Index.js
Contiene 4 endpoints

* GET "/": entrega un json con 4 objetos obtenidos de la Base de datos. AllOperations (Todos los registros de operaciones), limitOperations (ultimos 10 registros), amountOperations (monto total de operaciones entry y egress), balance (El resultado de la resta de entry y egress)
* POST "/createOperation": Capta el envio de los datos del formulario de operaciones nuevas.
* PUT "/setOperation/:id": Modifica la operación seleccionada por el id del listado de todas las operaciones.
* DELETE "/deleteOperation/:id": Elimina la operación seleccionada según el parametro id pasado por el listado de todas las operaciones.

## Navbar
Contiene un navbar fijo superior con los links para el acceso rápido entre las 2 secciones.

![Imagen del Navbar](https://i.postimg.cc/fRWmhpPx/navbar.jpg)

## Footer
Contiene información del Desarrollador y un link hacia mi Linkedin.

![Imagen del Footer](https://i.postimg.cc/bN9kWpmy/Footer.jpg)

## Skills usados
* React
* Javascript
* Nodejs
* Express
* Mysql
* react-Bootstrap
* SweetAlert2
* Css

## Instalación
* Clonar el proyecto con **git clone https://github.com/gsuruguay/Challenge-javascript.git**
* Ejecutar por consola desde la carpeta raiz del proyecto **npm install** para instalar las dependencias usadas.
* Ejecutar en consola **node API/index.js**
* Ejecutar en consola desde la carpte de Client **npm start**

## Autor
**Guillermo Suruguay**
[Escríbeme en Linkedin](https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web)

