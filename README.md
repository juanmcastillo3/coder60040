JabarScript
Ecommerce de Bar para programadores. Hecho en React + Vite, se utilizó Firebase para gestión de bases de datos y almacenamiento

Este proyecto está desplegado en las siguientes plataformas:

Vercel: https://coder60040.vercel.app
Funciones principales
Navegación y páginas: la aplicación cuenta con una página principal donde podrá ver la lista total de los productos,
Gestión Global: El contexto global (GlobalProvider) facilita el intercambio de datos entre los diversos componentes, como el carrito de compras.
Uso de LocalStorage: En el hook useCarrito.jsx, se emplea localStorage para conservar de forma persistente los datos del carrito de compras en el navegador. Esto permite que, si el usuario cierra el navegador o actualiza la página, los productos en el carrito permanezcan almacenados hasta que sean eliminados o procesados.
**Integración con Firebase:**Configuración de Firebase destinada al almacenamiento de datos y posibles futuras implementaciones, como autenticación y análisis.
Instalación
Clonar el repositorio:
https://github.com/juanmcastillo3/coder60040
Instalar las dependencias:
npm install
Ejecutar el servidor de Desarrollo:
npm run dev
Dependencias utilizadas:
bootstrap: Framework para crear interfaces responsivas con componentes y utilidades CSS predefinidos.
firebase: Plataforma para autenticación, almacenamiento y bases de datos en aplicaciones web y móviles.
react: Biblioteca para construir interfaces de usuario con componentes reutilizables.
react-bootstrap: Versiones de componentes de Bootstrap optimizadas para usarse con React. - react-dom: Permite renderizar componentes de React en el DOM de navegadores.
react-hook-form: Herramienta para gestionar formularios en React de manera eficiente.
react-router-dom: Librería para manejar rutas y navegación en aplicaciones React.