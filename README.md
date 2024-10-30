# JabarScript

Ecommerce de Bar para programadores, desarrollado con **React** y **Vite**. Utiliza **Firebase** para la gestión de bases de datos y almacenamiento de datos.  

Este proyecto está desplegado en las siguientes plataformas:

- **Vercel**: [https://coder60040.vercel.app](https://coder60040.vercel.app)

## Funciones Principales

- **Navegación y Páginas**: La aplicación cuenta con una página principal donde podrás ver la lista completa de productos.
- **Gestión Global**: Utiliza un contexto global (`GlobalProvider`) para facilitar el intercambio de datos entre componentes, como el carrito de compras.
- **Uso de LocalStorage**: En el hook `useCarrito.jsx`, se emplea `localStorage` para conservar de forma persistente los datos del carrito de compras en el navegador. Esto permite que, si el usuario cierra el navegador o actualiza la página, los productos en el carrito permanezcan almacenados hasta que sean eliminados o procesados.
- **Integración con Firebase**: Configuración de Firebase para el almacenamiento de datos y posibles futuras implementaciones, como autenticación y análisis.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/juanmcastillo3/coder60040
```
Instalar las dependencias:
```bash
npm install
```
Ejecutar el servidor de desarrollo:
```bash
npm run dev
```
Dependencias Utilizadas:
bootstrap
firebase
react
react-bootstrap
react-dom
react-hook-form
react-router-dom

¡Explora, experimenta y disfruta de la experiencia de JabarScript!