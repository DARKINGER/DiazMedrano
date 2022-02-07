#Modelo de caja en HTML.
----

Los elementos de un documento HTML son considerados como una caja rectangular invisible al usuario y en la que se pueden  aplicar ciertas propiedades para ubicar los elementos respecto a otros.

![boceto de modelo de cajas HTML](https://www.diegocmartin.com/wp-content/uploads/2018/09/modelo-de-cajas-CSS-de-Mozilla.png "Modelo de cajas.")

+ **Margin**: margen exterior, que separa la caja del elemento de las demás. si escribimos margin:5px; establecemos un margen de 5 píxeles en los 4 lados de la caja.  Podemos especificarlos de forma independiente mediante margin-top, margin-right, margin-bottom y margin-left.
+ **Padding**: margen interno o relleno, que se aplica del borde hacia adentro. Se puede usar de forma independiente  también con padding-top, padding-right, padding-bottom y padding-left.
+ **background-color**: utilizado para asignar un color de fondo a la caja.
+ **background-image**: Para asignar una imagen de fondo a la caja mediante el valor url('imagen.jpg'), siendo imagen.jpg  la ubicación del archivo de la imagen que queramos utilizar.
+ **border-width**: para definir el grosor del borde, por ejemplo, 2px.
+ **border-style**: Para especificar el tipo de línea del borde. Hay varios tipos que podemos consultar aquí,  pero lo normal es usar el valor solid.
+ **border-color**: Empleado para asignar el color del borde.
+ **border**: con esta propiedad podemos especificar las tres anteriores en una en el mismo orden que las hemos indicado.  El único valor que no podemos omitir sería el segundo, indicando el estilo de línea.
+ **overflow**: Con esta propiedad especificamos los que ocurre cuando el contenido no cabe en la caja. Los posibles valroes son:
  + **visible**. Valor predefinido. Aunque el contenido supere el tamaño dela caja, se mostrará como tal.
  + **hidden**. Sólo aparece el contenido que no supere el límite de la caja.
  + **scroll**. Aparece una barra de desplazamiento.
  + **auto**. Dejamos a criterio del navegador el comportamiento.

---------
##Posicionamiento de cajas.
---------
Podemos diferenciar dos tipos de elementos HTML, de los que podemos usar dentro del cuerpo de las páginas para agregar  contenido, en función de cómo se representan en pantalla. En bloque (block) o en línea (inline).
###Block
Los bloques ocupan todo el ancho de pantalla y siempre comienzan en una línea nueva. Estos elementos pueden contener a otros elementos de bloque o en línea y su altura varía en función de su contenido. 

![block modelo de caja](https://francescricart.com/wp-content/uploads/2018/09/elementos-bloque.jpg "Elementos bloque")

+ Los elementos bloque son:
  + div, p, h1, h2, h3, h4, h5, h6, hr, ol, ul, table, li, address, blockquote, center, dir, dl, fieldset, formisindex, noframes, noscript, pre, dd, dt, frameset, tbody, td, tfoot, th, thead, tr
+ Sus principales características son:
  + Fuerzan un salto de línea (ocupan todo el ancho disponible)
  + Respetan el width, el height, el margin-top y el margin-bottom indicados por el usuario.

###En linea (Inline)
Ocupan el espacio de su contenido, no tienen por qué comenzar en una nueva línea, sólo pueden contener a otros elementos  inline y sus dimensiones no se pueden especificar mediante CSS.
![inline modelo de caja](https://francescricart.com/wp-content/uploads/2018/09/elementos-inline-block.jpg "Elementos inliner")
+ Los elementos en línea son:
  + a, span, label, strong, br, input, textarea, abbr, acronym, b, basefont, bdo, big, cite,  code, dfn, em, font, i, kbd, q, s, samp, select, small, strike, sub, sup, u, u, var

+ Su principales características son:
  + son apilables. no tienen ni margin-top ni margin-bottom (por mucho que se lo indiques en el CSS). Si tienen margin-left y margin-right.
  + no respetan ni width ni height. Estas medidas dependerán del tamaño en píxels de su contenido.

###Elementos en linea vs. en bloque.
+ Formateo
  + De forma predeterminada, los elementos en línea no comienzan con la nueva línea.
+ Modelo de contenido
  + En general, los elementos en línea pueden contener únicamente los datos y otros elementos en línea.  
  </br>
  </br>

+ **Posicionamiento predefinido (estático):**
  + De forma predefinida los elementos de bloque aparecen unos debajo de otros según el flujo en que los pongamos en el documento.  Si asignamos una altura o anchura a uno, los que pongamos en su interior estarán limitados a ese tamaño.
+ **Posicionamiento relativo:**
  + Podemos especificar desplazamiento a una caja con respecto a su posición original en el flujo de ejecución (predefinida).  Utilizamos la propiedad **position: relative;** Y después para aplicar el desplazamiento, las propiedades top, left, right y bottom.
+ **Posicionamiento absoluto:**
  + Con este modo de posicionamiento tomamos como referencia al primer elemento padre o contenedor que no esté estático. Si no existe,  la referencia sería la ventana del navegador.**position: absolute;** Las propiedades top, left, right y bottom aplican desplazamiento desde el borde en cuestión del elemento hasta los bordes  correspondientes en el elemento padre. En este caso, el desplazamiento influye en el resto de elementos de la página, tratando los demás elementos de rellenar  el hueco abandonado.
+ **Z-index:**
  + Con la propiedad z-index seguida de un valor de número entero podemos modificar la superposición de capas, siendo los valores numéricos  más altos las capas por encima de las otras. Prueba a aplicar un z-index mayor al primer div del ejercicio anterior. Ten en cuenta que z-index sólo funciona con  posicionamiento distinto al estático.
+ **Fixed:**
  + El posicionamiento fijo lo empleamos mediante el valor fixed y es como el absoluto salvo que en este caso siempre se toma como  referencia la ventana del navegador. En este caso aunque hagamos scroll, el elemento permanecerá en la misma posición.
+ **Sticky:**
  + En este caso la posición del elemento pasa de ser relativa a fija (fixed) cuando el usuario hace scroll de forma  que el elemento dejara de verse. Hay navegadores en que no funcionará correctamente.
+ **Inherit:**
  + La propiedad position también puede asignarse con el valor inherit. En este caso, la caja hereda el posicionamiento  de su contenedor inmediato.
+ **Float:**
  + Es una propiedad que puede tomar los valores right, left, none (predefinido) e inherit. Lo que provoca es que ele elemento flote hacia  el lado indicado de su contenedor. Cuando un elemento flota, deja el hueco que ocupaba y otro puede ocupar su ubicación anterior.  Si otros elementos flotan hacia una misma dirección en el mismo contenedor, entonces sí respetan el orden y posiciones y no se solaparían.  A pesar de que el uso para el que se creó float fue para colocar texto alrededor de otro objetos como imágenes, durante mucho tiempo  se ha empleado para maquetar las estructuras de las páginas web, creando zonas dentro de las mismas como las barras laterales o elementos dispuestos en filas  y columnas como una galería de imágenes o un listado de productos.
+ **Clear:**
  + Es otra propiedad que sirve para evitar que un elemento tenga a sus lados algún elemento flotante pasándolo a la siguiente línea  o hueco en el flujo del documento. Por tanto, el valor left provocará que el elemento en cuestión se desplace hacia abajo hasta encontrar un hueco en el que no exista  un elemento flotante a su lado izquierdo. Podemos asignarle los valores left, right, both o inherit.  both implica ambos lados.
</br>
</br>

###Display
podemos modificar el comportamiento de un elemento HTML sobrescribiendo la propiedad display e intercambiando su comportamiento de bloque o en línea a conveniencia.  
Los valores más comunes de asignar al valor de esta propiedad son por tanto block, inline, none, hidden e inline-block.  
Tanto none como hidden hacen desaparecer al elemento, la diferencia es que con hidden simplemente se oculta, aunque este sigue ocupando su lugar. Con none, desaparece totalmente.  
Un uso común es poner los elementos de una lista en línea para que muestren en horizontal y aplicarlo en menús.  
**li {display: inline;}**  
o poner un span en bloque para que ocupe todo el ancho o un ancho específico.  
**span {display: block;}**  
Es importante recordar que a los elementos inline no les podemos asignar un ancho o un alto.  

###Inline-block.
Inline-block nace tras la necesidad de un método más eficaz que float para colocar elementos en disposición horizontal.  
Un uso muy común es para generar menús de navegación, en los que, a partir de una lista desordenada, ubicamos los elementos li en hilera asignándoles también un ancho   específico.  
Una vez hayamos practicado con inline y block, podemos ver esta posibilidad. Respecto a inline:  
+ Podemos asignar width y height al elemento.
+ Nos respeta padding y margin.
</br>
**Respecto a block**
+ No genera una nueva línea al final.
</br>
###Box-sizing.

Esta propiedad tiene dos posibles valores distintos, aparte de initial e inherit: content-box y border-box.  
content-box es el valor predefinido, en el que cuando aplicamos medidas a la caja con width o height el grosor del padding,  border y margin se sumará al indicado.  
Con border-box conseguimos que el padding y el borde estén ya incluidos en esta medida, siendo así más fácil de cuadrar el resultado  final cuando trabajamos con varias cajas.  
El valor border-box de la propiedad boxsizing se emplea para facilitarnos la tarea de calcular y ajustar las dimensiones de los elementos  cuando pretendemos que quepan varios colocados horizontalmente.  
</br>
![box-sizing](https://www.diegocmartin.com/wp-content/uploads/2018/09/border-box02.png "Boceto de Box-sizing.")
</br>
</br>
###Flexible Box Layout
Desde 2016 podemos usar los nuevos valores flex e inline-flex en sustitución de block o inline-block para crear diseños flexibles.  </br>
**Algunas de sus ventajas son:**
+ Gestión de alineación de las cajas.
+ Centrado horizontal y vertical.
+ Altos de caja similares.
+ Fondos de colores uniformes.
  
</br>

> + Conclusion personal: 
> El modelo de caja es empleado para generar y aplicar una estructura  
> con diversas funciones y apariencias, de este modo se aplica  
> una mejor estructura en la cual se mantiene la uniformidad del objeto  
> emplenadolo desde una punto de vista donde todos los elementos manejan una   
> misma disponibilidad, y la practica para modificar estas funciones se a ampliado  
> a las hojas de estilo en **CSS** de esta manera solo se generan las cajas  
> y su contenido en **HTML** y su funcion y apariencia se emplean en otros  
> lenguajes de apoyo como: CSS, JavaScript, XML, etc.

> + Referencias:
> [FrancescRicart](https://francescricart.com/elementos-en-linea-elementos-bloque-elementos-inline-block/)
> [Devloper.Morzilla.EnLinea](https://developer.mozilla.org/es/docs/Web/HTML/Inline_elements)
> [Devloper.Morzilla.EnCaja](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/The_box_model)
> [DiegocMartin](https://www.diegocmartin.com/modelo-de-cajas-y-posicionamiento-css/)