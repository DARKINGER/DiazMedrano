#¿Que es ajax?
una técnica de desarrollo web que permite que las apps funcionen y que envíen y recuperen  
datos de un servidor, sin tener que cargar una página web. Permite intercambiar datos con un  
servidor de manera sencilla, sin recargar una página.  

Ajax nos permite intercambiar información entre el servidor y el cliente (un navegador web) de forma asíncrona.  
Como resultado, obtenemos una navegación ágil, rápida y dinámica; y también la posibilidad de realizar cambios  
sobre una web sin necesidad de actualizarla. Las tecnologías independientes que lo hacen posible son:  

![Modelo ajax](https://static.platzi.com/blog/uploads/2015/06/DIAGRAMA.png "ajax")



##Qué lenguajes de programación y términos debemos conocer para entender AJAX:
  
   + JAVASCRIPT: Es la base fundamental que une estas tecnologías
   + XMLHttpRequest: Intercambio asíncrono
   + XML: Manipulación e intercambio de información
   + JSON: Alternativa de XML (Actualmente más usado que XML)
   + DOM: Document Object Model
   + XHTML y CSS: Estilos - Creación de una presentación de objetos

###Ventajas:
   
   + Mejora la experiencia del usuario
   + Puede ser utilizada en cualquier plataforma y navegador
   + Menor transferencia de datos cliente/servidor
   + Optimización de recursos (tiempo de operaciones)
   + Portabilidad y usabilidad (permite realizar una petición de datos al  servidor y recibirla sin necesidad de cargar la página entera).

###Desventajas:
   
   + JavaScript debe estar activado en el navegador web para funcionar.
   + Utilizar AJAX preferentemente en formularios de contacto, validación de correo electrónico y contraseñas para no afectar el posicionamiento web (SEO).
   + Tiempos de respuesta del servidor en momentos determinados.
   + Tiempo de desarrollo (es necesario tener conocimiento medio/alto de las tecnologías que hacen parte de AJAX).
   + Algunas funciones a las que estamos acostumbrados en la navegación web pueden no funcionar como esperamos. Por ejemplo, el botón de atrás,  guardar marcador o actualizar la página web en cualquier momento.

El punto débil de AJAX es que es necesario escribir código para cada uno de   los navegadores que utilizaremos, y esto requiere de mucho tiempo.  
Sin embargo, jQuery llega al rescate al permitirnos utilizar AJAX y todo su   potencial con una sola línea de código:  
</br>
**$.ajax({name:value, name:value, ... })**

##Comparacion con ajas y sin el.

**sin ajax**
   + El usuario envía una solicitud HTTP desde el navegador web al servidor.
   + El servidor la recibe y recupera esos datos.
   + El servidor envía los datos al navegador web.
   + El navegador web recibe los datos y vuelve a cargar la página para que se vean los datos.
   + El usuario debe esperar hasta que se complete todo el proceso. Le  llevará tiempo y deberá tener paciencia. No podrá realizar otras tareas. 

**Con ajax**
   + El navegador crea una llamada de JavaScript que luego activará XMLHttpRequest.
   + En segundo plano, el navegador le crea una solicitud HTTP al servidor.
   + El servidor recibe, recupera y envía los datos al navegador.
   + El navegador recibe los datos y estos se verán directamente en la página. El usuario no debe recargar la página.
