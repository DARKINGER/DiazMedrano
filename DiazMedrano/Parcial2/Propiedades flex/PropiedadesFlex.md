#Propiedades del contenedor Flex  

|Propiedad|Que hace|valores para la propiedad|
|---------|--------|-------------------------|
|Display | Si su valor es flex o inline-flex, la propiedad display define un contenedor flex ( flexbox ). |flex-container{  display: -webkit-flex;  display:-ms-flexbox;  display: flex;   display: inline-flex;  -ms-inline-flexbox;  } |
|flex-direction| Establece la dirección del eje principal y por tanto la dirección de los elementos flex. El valor por defecto es row ( fila ).| .flex-container{  -webkit-flex-direction: row;  -ms-flex-direction: row;  flex-direction: row;  (flex-direction: row / row-reverse / column / column-reverse;)  }|
|flex-wrap| Especifica si puede haber un cambio de línea ( wrap ) o no ( nowrap ). El valor por defecto es nowrap.| .flex-container{  -webkit-flex-wrap: wrap;  -ms-flex-wrap: wrap;  flex-wrap: wrap;  (flex-wrap: nowrap / wrap / wrap-reverse;)  }|
|flex-flow| Es la forma abreviada para las propiedades flex-direction y flex-wrap. El valor por defecto es row nowrap|.flex-container{  -webkit-flex-flow: row nowrap;  -ms-flex-flow: row nowrap;  flex-flow: row nowrap;  (flex-flow: flex-direction [flex-wrap]) }|
|align-items| Define como se colocan los elementos dentro de una caja flexible flexbox relativamente al eje transversal. El valor por defecto es stretch.| .flex-container{  -webkit-align-items: flex-start;  -ms-flex-align:start;  align-items: flex-start;  (	align-items: flex-start / flex-end / center / baseline / stretch;  -ms-flex-align:start / end / center / baseline / stretch;)  }|
|justify-content| Define como se colocan los elementos dentro de una caja flexible ( flexbox ) relativamente al eje principal, cuando los elementos no ocupan toda la caja. El valor por defecto es flex-start.|.flex-container{  -webkit-justify-content:flex-start;  -ms-flex-pack:start;  justify-content:flex-start;  (	justify-content: flex-start / flex-end / center / space-between / space-around;  -ms-flex-pack: start / end / center / justify / justify;)  }|
|align-content| Alinea los elementos del contenedor flex cuando los elementos no utilizan todo el espacio disponible en el eje transversal. El valor por defecto es stretch.| .flex-container{  -webkit-align-content: flex-start;  -ms-flex-line-pack:start;  align-content: flex-start;  (align-content: flex-start / flex-end / center / space-between / space-around / stretch;  -ms-flex-line-pack: start / end / center / justify / stretch;)  }|
  
    
#Propiedades de los elementos ( ítems ) flex  

|Propiedad|Que hace|valores para la propiedad|
|---------|--------|-------------------------|
|align-self| Reposiciona elementos individuales relativamente al eje transversal. Generalmente se trata de elementos posicionados con align-items.| .item {  -webkit-align-self: flex-start;  -ms-flex-item-align:start;  align-self: flex-start;  (	align-self: auto / flex-start / flex-end / center / baseline / stretch;  -ms-flex-item-align:auto / start / end / center / baseline / stretch;)  }|
|flex-grow| Define cuánto puede crecer un elemento flex, si fuera necesario. El valor por defecto es 0.| .item{  -webkit-flex-grow: 2;  -ms-flex-grow:2;  flex-grow: 2;  (flex-grow: número / initial / inherit;)  }|
|flex-shrink| Define cuánto puede disminuir ( contraerse ) un elemento flex, si fuera necesario. El valor por defecto es 1.| .item{  -webkit-flex-shrink: 2;  -ms-flex-shrink:2;  flex-shrink: 2;  (flex-shrink: número / initial / inherit;)  }|
|flex-basis| Especifica el valor inicial del tamaño principal de un elemento flex. El valor por defecto es auto.| .item {  -webkit-flex-basis: auto;  -ms-flex-basis: auto;  flex-basis: auto;  (flex-basis: número / auto / initial / inherit;)  }|
|flex| La forma abreviada para flex-grow, flex-shrink y flex-basis juntos. El valor por defecto es 0 1 auto.|.item {  -webkit-flex: 1;  -ms-flex: 1;  flex: 1;  (	flex: none / flex-grow [flex-shrink] [flex-basis]; )  }|
|order| Se utiliza para cambiar el orden en el que aparecen los elementos individuales.| .item{  -webkit-order: 2;  -ms-order:2;  order: 2;  (order: número / initial / inherit;)}|
  
    

> Los elementos flex tienen la capacidad de redimensionarse y recolocarse dentro de la caja flex con facilidad.  También tienen la capacidad de alinearse tanto horizontalmente como verticalmente y  todo esto puede ser muy interesante a la hora de diseñar páginas web adaptativas.
> En el html se colocara una tabla de ejemplos sobre diversas aplicaciones. 