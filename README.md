# Parcial_02_LPPA
Consigna:
Crear una aplicación web utilizando solo HTML, CSS y Javascript. La misma deberá contar con 2 páginas:
- Página de login (Inicio de sesión).
- Página de dashboard (tabla con información).
Cada página deberá contar con su archivo HTML, CSS y Javascript por separado, sumado a un archivo CSS
para resetear los estilos por defecto que aplican los navegadores web (archivo normalize.css o reset.css) y
otro archivo CSS opcional para compartir estilos entre pantallas. Ambas pantallas deberán contar con un
diseño agradable e intuitivo, respetando los estándares de UI/UX básicos (combinación de colores, tamaño
y tipos de fuentes, textos claros, etc) utilizando únicamente CSS sin librerías de terceros. Ambas pantallas
deberán contar con el mismo diseño de layout, conservando la misma estética. No es necesario que el
diseño sea responsivo, solo es requerido que sea vea correctamente en pantallas Desktop.

PANTALLA LOGIN
La página de Login debe contar con un formulario que contenga un input para ingresar un email y un input
para ingresar una contraseña, sumado a un botón con el texto “Iniciar sesión” para realizar dicha acción.
Ambos inputs deben tener sus respectivas validaciones (pueden ser validaciones HTML5 o validaciones JS).
Al momento de realizar el inicio de sesión, se deben obtener los datos ingresados desde Javascript y se debe
realizar una request de tipo POST a esta URL “https://basic-server-one.vercel.app/login”.
Ejemplo de request Login:

fetch("https://basic-server-one.vercel.app/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email: "test@test.com",
password: "test123"
})
})
Existe solo un usuario válido:
- email: valeria@gmail.com
- password: lppa2022
Dependiendo de los datos ingresados en el formulario de Login, la request dará un resultado exitoso o no. Si
la respuesta no es exitosa, se deberá mostrar un mensaje de error en el formulario indicando que los datos
ingresados no son válidos. Si la respuesta es exitosa se deben hacer 2 cosas:
1. Redirigir a la pantalla del Dashboard.
2. Guardar en LocalStorage un valor que indique que el usuario inició sesión.

Dicho valor en LocalStorage (se sugiere usar un valor booleano) se debe usar en la misma pantalla de Login.
Al momento de cargar dicha página, se debe consultar si el usuario ya inició sesión previamente o no. Si el
usuario ya inició sesión, la pantalla Login automáticamente deberá dirigirse a la pantalla Dashboard,
“salteando” el Login. Caso contrario, debe mostrarse la pantalla de Login.
PANTALLA DASHBOARD
La página de Dashboard debe realizar una request GET a la URL “https://basic-server-one.vercel.app/users”
mostrando el resultado en una tabla HTML. En caso de que la request falle, se debe mostrar un mensaje de
error. La tabla solo muestra información, solo lectura.
En el header de esta pantalla se debe agregar un botón “Logout” que borre el valor de login guardado en
LocalStorage y se debe redireccionar a la pantalla de Login.
Todas las navegaciones de una pantalla a la otra se deben realizar utilizando la web Api “Location”.

