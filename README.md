# Sistema de Control de Inventario - Almacén

Aplicación web desarrollada con **React 19**, **Vite** y **Firebase Firestore** para la gestión de inventario de un almacén. Permite realizar operaciones integrales de CRUD (Crear, Leer, Actualizar y Eliminar) con persistencia y sincronización en tiempo real en la nube.

---

**Requisitos Previos**

- Node.js (versión 18 o superior)
- npm (gestor de paquetes)
- Navegador web moderno
- Cuenta de Firebase con Firestore Database habilitada

---

**Instalación y Puesta en Marcha**

1. Clonar la aplicación e intreducirse en la carpeta:
   git clone https://github.com/fay465/inventario-almacen.git
   cd inventario-almacen

2. Instalar dependencias del proyecto:
   npm install

3. Configurar variables de entorno:
   cp .env.example .env

   Abrir .env y completar las credenciales con los valores de Firebase:
   VITE_FIREBASE_API_KEY=ejemplo
   VITE_FIREBASE_AUTH_DOMAIN=ejemplo
   VITE_FIREBASE_PROJECT_ID=ejemplo
   VITE_FIREBASE_STORAGE_BUCKET=ejemplo
   VITE_FIREBASE_MESSAGING_SENDER_ID=ejemplo
   VITE_FIREBASE_APP_ID=ejemplo

4. Ejecutar en desarrollo:
   npm run dev

---

**Estructura del Proyecto**

- src/components/form.jsx: Formulario controlado de registro y edición.
- src/components/table.jsx: Tabla de datos con acciones editar y eliminar.
- src/components/report.jsx: Resumen de totales, métricas y bajo stock.
- src/firebase/config.js: Inicialización de Firebase y conexión a Firestore.
- src/firebase/inventarioService.js: Funciones CRUD desacopladas (addDoc, updateDoc, deleteDoc, onSnapshot).
- src/App.jsx: Contenedor principal, manejo de estado y suscripción a la base de datos.

---

**Funcionalidades**

- Crear (productos con nombre, categoría, precio y stock).
- Leer (en tiempo real desde Firestore con onSnapshot).
- Actualizar (reutilizando el formulario con el id único).
- Eliminar (borrado dísico en Firestore con validación).
- Reporte (cálculo automático de sumas y alertas de bajo stock).
