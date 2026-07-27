#Sport Club Management - CRUD App
Una aplicación web completa para la gestión administrativa de un club deportivo ("Sport Club"). Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre seis entidades principales: Calendario, Usuarios, Futbolistas, Pagos, Cobros y Cuentas de Pago.

La aplicación cuenta con una API REST robusta construida con Node.js, Express y MongoDB (Mongoose), y una interfaz de usuario frontend premium e interactiva construida en HTML, CSS personalizado y JavaScript Vanilla (asíncrono).

## Tecnologías Utilizadas
Backend:
Node.js: Entorno de ejecución de JavaScript.
Express: Framework de servidor web para la API REST.
Mongoose: Modelado de objetos de MongoDB para Node.js, facilitando la validación y consultas a la base de datos.
dotenv: Manejo de variables de entorno seguras.
cors: Habilitación de intercambio de recursos de origen cruzado.
Frontend:
HTML5 Semántico: Estructura de la aplicación.
CSS3 Personalizado: Diseño responsivo y estético con un tema oscuro premium ("glassmorphism" moderno, tipografía Outfit e interacciones dinámicas).
JavaScript Vanilla: Lógica del cliente, manipulación del DOM y peticiones HTTP asíncronas mediante fetch().
FontAwesome: Iconos interactivos para los botones de acción y búsqueda.




## Instalación y Configuración
1. Prerrequisitos
Tener instalado Node.js (versión 18 o superior recomendada).
Tener instalado y en ejecución MongoDB localmente (puerto predeterminado 27017) o contar con una URI de conexión a MongoDB Atlas.
2. Instalación de Dependencias
Abre una terminal en la raíz del proyecto y ejecuta:

bash

npm install
3. Configuración de Variables de Entorno
Crea o edita el archivo .env en la raíz del proyecto con la siguiente configuración:

env

PORT=3000
MONGODB_URI=mongodb://localhost:27017/sport_club

# Cómo Iniciar la Aplicación
Modo Desarrollo (Recomendado)
Para iniciar el servidor con reinicio automático al detectar cambios:

bash

npm run dev
Modo Producción
Para iniciar el servidor de manera estándar:

bash

npm start
Una vez iniciado, abre tu navegador web e ingresa a: http://localhost:3000

## Endpoints de la API REST
Todos los endpoints retornan e interactúan con formato JSON y están organizados de la siguiente manera:

### Entidad	Ruta Base	Métodos Disponibles	Parámetro Dinámico
- Calendario	/api/calendario	GET, POST, PUT, DELETE	/api/calendario/:id_corto
  
- Usuarios	/api/usuarios	GET, POST, PUT, DELETE	/api/usuarios/:id_corto
  
- Futbolistas	/api/futbolistas	GET, POST, PUT, DELETE	/api/futbolistas/:id_corto
  
- Pagos	/api/pagos	GET, POST, PUT, DELETE	/api/pagos/:id_corto
- Cobros	/api/cobros	GET, POST, PUT, DELETE	/api/cobros/:id_corto
- Cuentas de Pago	/api/cuentas-pago	GET, POST, PUT, DELETE	/api/cuentas-pago/:id_corto
- GET /: Obtiene todos los registros de la colección.
- POST /: Crea un nuevo registro.
- PUT /:id_corto: Actualiza los datos del registro coincidente con el identificador único id_corto.
- DELETE /:id_corto: Remueve permanentemente el registro coincidente con el id_corto.


## Características Especiales del Frontend

- Navegación Fluida (Tab-Switching): Panel SPA (Single Page Application) que recarga los listados bajo demanda al cambiar de pestaña en la barra lateral sin recargar la página.
- Modo Edición Inteligente: Al hacer clic en "Editar", el formulario se rellena automáticamente, el botón de guardado cambia a "Actualizar", aparece un botón de "Cancelar" y el input de id_corto se vuelve de solo  lectura para preservar la integridad referencial.
-Notificaciones Premium (Toasts): Respuestas visuales integradas (éxitos, advertencias y errores del servidor) que aparecen en la esquina superior derecha con transiciones dinámicas.
- Filtro de Búsqueda Activo: Permite filtrar visualmente la tabla por id_corto con soporte para tecla "Enter". Si se vacía el buscador, la tabla vuelve a desplegar todos los registros existentes de manera automática.
