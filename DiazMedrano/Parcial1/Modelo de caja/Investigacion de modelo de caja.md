#Modelo de cajas (box model).
****
Este modelo es seguramente la caracteristica más mportante del lenguaje de hojas de estilos **CSS**  ya que condiciona el diseño de todas las páginas web. El modelo de cajas es el comportamiento de CSS   
que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.  
Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.  

![Boceto de las cajas generales](https://www.solvetic.com/uploads/monthly_03_2014/tutorials-1415-0-28640200-1395790626.gif "Margenes del modelo de cajas.")

El modelo de caja en CSS describe las cajas que se generan a partir de los elementos HTML. El modelo de caja también  contiene opciones detalladas en lo referente al ajuste de márgenes, bordes, relleno (padding) y contenido de cada  elemento.

La representación básica del modelo de cajas se basa en varios conceptos importantes, como veremos a continuación:

+ El **borde** (border), en negro, es el límite que separa el  interior del exterior del elemento.
+ El **márgen** (margin), en naranja, es la parte exterior del  elemento, por fuera del borde.
+ El **relleno** (padding), en verde, es la parte interior del  elemento, entre el contenido y el borde.
+ El **contenido**, en azul, es la parte interior del elemento,  excluyendo el relleno.

![Boceto de caja por color](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png "Boceto de lenguajecss.")

##Dimenciones.

| Propiedad | width |
|-----------|-------|
| Valores | unidad de medida - porcentaje - auto - inherit |
| Se aplica a | Todos los elementos, salvo los elementos en línea que no sean imágenes, las filas de tabla y los grupos de filas de tabla |
| Valor inicial | auto |
| Descripción | Establece la anchura de un elemento |


| Propiedad | height |
|-----------|-------|
| Valores | unidad de medida - porcentaje - auto - inherit |
| Se aplica a | Todos los elementos,  salvo los elementos en línea que no sean imágenes, las columnas de tabla y los grupos de columnas de tabla |
| Valor inicial | auto |
| Descripción | Establece la altura de un elemento |

Hay que ser muy conscientes de que, sin indicar valores de ancho y alto para una caja, el elemento generalmente  
toma el tamaño que debe respecto a su contenido, mientras que si indicamos un ancho y alto concretos, estamos  
obligando mediante CSS a tener un aspecto concreto.

