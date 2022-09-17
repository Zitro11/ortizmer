# Propiedades FlexBox

Flexbox es un método de diseño de página unidimensional para compaginar elementos en filas o columnas. Los elementos de contenido se ensanchan para rellenar el espacio adicional y se encogen para caber en espacios más pequeños.

## ° Propiedad display flex
Al contenedor principal en un esquema Flexbox es al que le asignamos "display: flex". Esta propiedad hace que cambien las reglas con las cuales sus hijos van a ser representados en la página.

## ° Propiedad flex-direction
Esta propiedad nos sirve para definir la dirección del flujo de colocación de los elementos, pudiendo marcar si los elementos se van a colocar todos en la misma fila, o si se van a colocar en una columna, pero además también permite indicar el orden de los item, normal o reverso.

Permite usar estos valores:

| _Propiedad_      | _Descripcion_           |
|:----------------:|:-----------------------|
| Row              | Indica que los elementos se colocan en una fila, uno al lado del otro, de izquierda a derecha.          |
| Row-reverse      | Se colocan en una fila, pero con orden de derecha a izquierda. |
| Column       | Se colocan uno debajo del otro, en orden los primeros arriba.     |
| Column-reverse     | Se colocan en una columna, pero los primeros aparecerán abajo.           |


## ° Propiedad flex-wrap
Sirve para indicar si queremos que haya saltos de línea en los elementos que se colocan en el contenedor, si es que éstos no caben en el espacio disponible.

De manera predeterminada con Flexbox los elementos se colocan en el eje de la horizontal, en una fila. Si los elementos tienen unas dimensiones tales que no quepan en el contenedor, el comportamiento flex hará que se intenten agrupar en la fila de manera que quepan bien sin saltar de línea, pero también podemos configurarlo para hacer que, si no caben, se pasen a la línea siguiente.

| _Propiedad_      | _Descripcion_           |
|:----------------:|:-----------------------|
| Nowrap           | Hace que nunca se produzcan saltos de línea.          |
| Wrap             | Hace que si no caben, entonces se coloquen en la siguiente línea. |
| Wrap-reverse     | El salto de línea se producirá al contrario, o sea, hacia arriba.     |

## ° Propiedad flex-flow
Esta propiedad no aporta nada nuevo, pues simplemente es un atajo para escribir de 1 sola vez flex-direction y flex-wrap. El valor predeterminado es "row nowrap"

## ° Propiedad justify-content
Esta propiedad es muy útil para indicar cómo se van a colocar los justificados y márgenes de los ítems. Puedes indicar que vayan a justificados al inicio del eje o al final del eje o que a la hora de distribuirse se coloque un espacio entre ellos o un espacio entre ellos y los bordes.

- flex-start: Añade los elementos a partir del inicio del eje principal.
- flex-end: Añade los elementos a partir del final del eje principal.
- center: los elementos se centran en el espacio del contenedor, siempre con respecto al eje principal.
- space-between: hace que los elementos se distribuyan con un espacio proporcional entre ellos, siendo que los ítem de los extremos se sitúan en el borde del contenedor.
- space-around: es parecido a space-between en el sentido de dejar un espaciado proporcional, sin embargo, en esta ocasión se deja también espacio entre el borde del contenedor y los ítem de los extremos.

## ° Propiedad align-items
Esta propiedad es muy similar a la propiedad anterior, solo que ahora estamos alineando con respecto al eje secundario y no el principal.

- flex-start: indica que se posicionarán al comienzo del eje secundario.
- flex-end: se posicionarán al final del eje secundario.
- center: se posicionarán en el centro del eje secundario.
- stretch: ocuparán el tamaño total del eje secundario (a no ser que hayamos marcado que esos elementos tengan un tamaño diferente).
- baseline: para el posicionamiento de los elementos se tendrá en cuenta el texto que hay escrito dentro.

## ° Propiedad align-content
Esta propiedad sólo aplica cuando dispones de varias líneas de elementos en el contenedor flexbox. El efecto que conseguiremos será una alineación y separación de las filas en el eje secundario.

- flex-start: indica que las filas se colocarán todas pegadas entre sí (obviamente no aparecerán exactamente pegadas si le hemos colocado un margin), desde el inicio del eje secundario.
- flex-end: las filas se colocarán pegadas entre sí, pero esta vez pegadas al final del eje secundario.
- center: se posicionarán en el centro del eje secundario, pegadas entre sí.
- stretch: Sus dimensiones crecerán para ocupar todo el espacio disponible (a no ser que se haya colocado una dimensión diferente en los elementos).
- space-between: indica que las filas se separarán entre sí, dejando un espacio proporcional entre ellas.
- space-around: indica que las filas se separarán, dejando un espacio entre ellas proporcional, también con el borde.