Buenos días Profesor.

Este es mi proyecto final de React JS titulado: Naobi Labs.

La idea del proyecto es realizar una muy simple pagina de e-commerce de consolas y accesorios de videojuegos.

Dentro de este proyecot encontrata diferentes carpetas:

- La carpeta Cart tiene como finalidad agrupar a todos los componentes relacionados con el carrito de compras (Cart, Checkout y Felicitaciones). Dentro de la misma esta el componente Cart esta el diseño del carrito de compras, el cual muestra todos los items que hayan sido añadidos al carrito, las unidades seleccionadas, su precio unitario, el precio total de cada item y el precio de la orden de compra. El componente Checkout es un componente en el cual se ingresan los datos del comprador y se genera una orden de compra que queda almacenada en la base de datos Firebase. Y el componente Felicitaciones es un componente simple que genera un mensaje con el ID de la orden generado por Firebase al usuario.

- La carpeta Context contiene el componente con su mismo nombre, el cual sirve para enviar props a todos los otros componentes del proyecto.

- La carpeta Error404 contiene un componente con su mismo nombre, el cual sirve para enviar una notificacion al usuario de que la pagina que buscaba no existe.

- La carpeta Footer contiene el componente del Footer de la pagina con su diseño, el cual cuenta con links de acceso al Home y a la lista de productos.

- La carpeta Images contiene las imagenes utilizadas tanto en los logos como del carrito de compras y la imagen de tachode basura para eliminar los productos.

- La carpeta Items es la mas importante del proyecto ya que la misma almacena los items del e-commerce. Esta cuenta con los siguientes componentesÑ

 - El componente Item el cual esta encargado de mostrar los productos en el inicio de la pagina web.
 - El componente ItemCount que se utiliza para sumar o disminuir la cantidad de items que elige el usuario para que se sumen al carrito.
 - El componente ItemDetail que muestra el detalle del item seleccionado, asi como el componente ItemCount para sumar items que iran al Carrito.
 - El componente ItemDetailContainer el cual es un contenedor del componente ItemDetail.
 - El componente ItemList que sirve para listar los items.
 - Y el componente ItemListContainer que se utiliza como pagina inicial del proyecto, la cual muestra todos los items del e-commerce.

- Por ultimo esta la carpeta Navbar la cual contiene solamente dos componentes:

  - El componente CartWidget que contiene el icono del carrito, el cual cuenta con un contador de items que varia segun la cantidad de productos que vaya a comprar el usuario.
  - Y el componente de Navbar que me permite, mediante un boton, navegar por las diferentes categorias de productos y tambien volver a la pagina principal.


Y esto es la descripcion del proyecto, no es muy detallado ni muy armado ya que no conté con el tiempo suficiente para armar algo mas elaborado debido a que apenas terminado el curso de React JS tuve que empezar el curso de Backend debido a los horarios impuestos por CoderHouse en la carrera de Desarrollador FullStack.

Espero que con este proyecto pueda aprobar el curso.

Le deseo lo mejor y saludos.

