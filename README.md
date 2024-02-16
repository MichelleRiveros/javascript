#                             *Javascript*



## <u>Caracteristicas</u>

1. Es un **lenguaje interpretado**, como html y css.
2.  **Orientado a objetos**, esto significa que es un lenguaje donde su estructura abarca todos los conceptos y todas las posibilidades que tiene un lenguaje orientado a objetos (clases, herencia, polimorfismo).
3.  **Lenguaje imperativo** (se ejecuta paso x paso). Es basado en prototipos, instancias y classless.
4. **Tipado debil**, las variables pueden cambiar.
5. **Lenguaje dinamico**, O sea que la variable se adapta al dato.
6. Esta contruido sobre la tecnologia **ECMASCRIPT**. version 1 -> 1997.



## <u>Usos</u>

1. Dinamismo de los sitios web
2. Servidor en NodeJS
3. Tecnologias frontend como Angular, react o Vue.Js



## <u>Enlazar JS</u> 

<Script src="js/main.js"></script>



## <u>Variables</u>

Es un espacio que guardamos en memoria. En la variable se puede cambiar el contenido; La variable sigue siendo la misma, lo que cambia es el contenido.

Num = 1

Num = 2

#### Tipos

- String  ->  Cadena de texto ( 'Hola' / "Hola" / )

- Number  ->  Numero ( 19 )

- Boolean  ->  Falso ( 0 ) / Verdadero ( 1 )

- Symbol  ->  

- Undefined  ->  Tipo de dato que dice que la variable existe en el programa pero no tiene valor (esta declarada pero no inicializada)

- Null  ->

- Nan  ->

  

La variable se puede declarar, inicializar y modificar a lo largo del tiempo. Cuando nostros declaramos una variable, tenemos tres formas de declararlas: 

<u>Scop</u>e - Es el alcance que tienen las variables: 

- var  ->   Alcance global

- let  ->  Alcance local 

- const  ->  Una variable que no se puede volver a inicializar. 

  

### *Definir* 

 Para definir una variable debemos definir que tipo de alcance a va tener.

Ejemplo: 

**let** *numero*;  -> declarar 

*numero* = 29;  ->  inicializar 

tambien se puede declarar e inicializar en una sola linea de codigo:

**let** *numero* = 29; 

las variables <u>const</u> se deben declarar e inicializar en una sola linea de codigo:

**const** *pi* = 3,1416;



#### Definir e inicializar multiples variables en una linea de codigo 

**let** *numero = 29, numero2 = 30, numero 3 = 33;*  





## 														ARRAYS 

Es una estructura de datos que se utiliza para almacenar una colección ordenada de elementos. Estos elementos pueden ser cualquier tipo de datos, como números, cadenas de texto, objetos, funciones, etc.

Los arrays en JavaScript son objetos especiales con propiedades y métodos predefinidos que permiten manipular y acceder a sus elementos de manera eficiente.

Cuando se dice que los arrays en JavaScript son "objetos especiales", significa que, aunque se comportan como colecciones ordenadas de elementos similares a los arrays en otros lenguajes de programación, en JavaScript, técnicamente son instancias de un objeto con ciertas características especiales y propiedades específicas.

```javascript
// Crear un array vacío
var miArray = [];

// Crear un array con elementos
var numeros = [1, 2, 3, 4, 5];
var palabras = ["hola", "mundo"];
var mezclado = [1, "hola", true];
```



Para acceder a los elementos de un array, puedes usar corchetes y el índice del elemento que deseas acceder. Los índices de los arrays en JavaScript comienzan en 0.

```javascript
var numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]); // imprime 1
console.log(numeros[2]); // imprime 3
```



Algunas de las propiedades y métodos más comunes de los arrays en JavaScript incluyen:

- `length` : Propiedad que indica la longitud del array, es decir, el número de elementos que contiene.

  ```javascript
  var numeros = [1, 2, 3, 4, 5];
  console.log(numeros.length); // imprime 5
  ```

- `push()`: Método que agrega uno o más elementos al final del array y devuelve la nueva longitud del array.

  ```javascript
  var numeros = [1, 2, 3, 4, 5];
  numeros.push(6);
  console.log(numeros); // imprime [1, 2, 3, 4, 5, 6]
  ```

- `pop()`:  Método que elimina el último elemento del array y lo devuelve.

  ```javascript
  var numeros = [1, 2, 3, 4, 5];
  var ultimoElemento = numeros.pop();
  console.log(ultimoElemento); // imprime 5
  console.log(numeros); // imprime [1, 2, 3, 4]
  ```

- `shift()`:  Método que elimina el primer elemento del array y lo devuelve.

  ```javascript
  var numeros = [1, 2, 3, 4, 5];
  var primerElemento = numeros.shift();
  console.log(primerElemento); // imprime 1
  console.log(numeros); // imprime [2, 3, 4, 5]
  ```

- `unshift()`:  Método que agrega uno o más elementos al principio del array y devuelve la nueva longitud del array.

  ```javascript
  var numeros = [2, 3, 4, 5];
  numeros.unshift(1);
  console.log(numeros); // imprime [1, 2, 3, 4, 5]
  ```

- `splice()`: Método que cambia el contenido de un array, eliminando elementos existentes y/o agregando nuevos elementos.

  ```javascript
  var numeros = [1, 2, 3, 4, 5];
  var subArray = numeros.slice(1, 3);
  console.log(subArray); // imprime [2, 3]
  ```

- `slice()`: Método que devuelve una copia superficial de una porción de un array en un nuevo array.

  ```javascript
  var numeros = [1, 2, 3, 4, 5];
  numeros.splice(2, 1); // Elimina un elemento desde el índice 2
  console.log(numeros); // imprime [1, 2, 4, 5]
  ```

  

#                                                      DATE



En JavaScript, los objetos `Date` se utilizan para trabajar con fechas y horas. Cada objeto `Date` representa un momento específico en el tiempo, ya sea en el pasado, presente o futuro.

La base del sistema de fechas y horas en JavaScript es el "epoch" o "época", que es un momento fijo en el tiempo. La época en JavaScript comienza el 1 de enero de 1970 a las 00:00:00 UTC (Coordinated Universal Time). Este momento se considera el punto de partida para calcular otras fechas y horas.

La representación interna de un objeto `Date` en JavaScript se realiza mediante un único número entero, que representa los milisegundos transcurridos desde la época (**1 de enero de 1970 UTC**). A este número se le llama "timestamp".

Una fecha en JavaScript es fundamentalmente especificada como el número de milisegundos que han pasado desde la [Época ECMAScript](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) la cuál está definida como el 1 de Enero de 1970, UTC.



#### <u>crear un objeto date</u>

```javascript
var fechaActual = new Date();
```

JavaScript crea un objeto `Date` que representa el momento exacto en que se ejecutó esa línea de código. Internamente, este objeto contiene un número que representa los milisegundos transcurridos desde la época.

Se obtiene este valor de tiempo en milisegundos accediendo al método `getTime()` del objeto `Date`:

```javascript
var timestamp = fechaActual.getTime();
console.log(timestamp);
```

También puedes crear objetos `Date` proporcionando una fecha específica como argumento:

```javascript
var fechaEspecifica = new Date('2024-02-13T12:00:00');
```

En este caso, el objeto `Date` representa la fecha y hora específica que has proporcionado. JavaScript convierte automáticamente esta fecha y hora al huso horario local del sistema donde se está ejecutando el código.

En resumen, los objetos `Date` en JavaScript representan momentos específicos en el tiempo, utilizando un número entero que representa los milisegundos transcurridos desde la época (1 de enero de 1970 UTC). Esta representación permite a los desarrolladores trabajar con fechas y horas de manera flexible y precisa en sus aplicaciones.

#### <u>límites de los valores que puede manejar un objeto *Date* en JavaScript.</u>

El estándar ECMA-262, que especifica el comportamiento de JavaScript, establece que los objetos `Date` pueden representar fechas dentro del rango de ±100,000,000 (cien millones) de días desde el 1 de enero de 1970 UTC. Esto equivale aproximadamente a 8,640,000,000,000,000 milisegundos en total, hacia el pasado y hacia el futuro.

El objeto `Date` en JavaScript utiliza un formato interno que cuenta los milisegundos transcurridos desde la "época", que es el 1 de enero de 1970 a las 00:00:00 UTC. Esto permite representar tanto fechas en el pasado como en el futuro.

Sin embargo, hay límites en cuanto al rango de fechas que pueden ser representadas con precisión por un objeto `Date` en JavaScript, debido a las limitaciones de la representación numérica y a cuestiones de precisión.

El estándar ECMA-262, que especifica el comportamiento de JavaScript, establece que los objetos `Date` pueden representar fechas dentro del rango de ±100,000,000 (cien millones) de días desde el 1 de enero de 1970 UTC. Esto equivale aproximadamente a 8,640,000,000,000,000 milisegundos en total, hacia el pasado y hacia el futuro.

Entonces, los límites de tiempo para los objetos `Date` en JavaScript se traducen en fechas que pueden ser representadas con precisión dentro de este rango específico.

Por lo tanto:

- La fecha máxima que puede ser representada es aproximadamente el 13 de septiembre de 275760 a. C. (antes de Cristo).

- La fecha mínima que puede ser representada es aproximadamente el 20 de abril de 271821 a. C. (antes de Cristo).

Es importante tener en cuenta estos límites al trabajar con fechas en JavaScript, especialmente en aplicaciones que requieren manejo de fechas históricas o futuras muy distantes. En tales casos, puede ser necesario utilizar bibliotecas especializadas o implementaciones personalizadas para manejar fechas fuera de estos límites.

#### <u>Formato de fecha y conversiones de zona horaria</u>

En JavaScript, los objetos `Date` ofrecen una variedad de métodos para trabajar con fechas y horas. Estos métodos permiten obtener, establecer y manipular diferentes componentes de una fecha, como año, mes, día, hora, minuto, segundo y milisegundo.

1. ***Métodos para la hora local**:*
   - `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`: Estos métodos devuelven los componentes individuales de la fecha y hora local de un objeto `Date`.
   - `setFullYear()`, `setMonth()`, `setDate()`, `setHours()`, `setMinutes()`, `setSeconds()`, `setMilliseconds()`: Estos métodos permiten establecer los componentes individuales de la fecha y hora local de un objeto `Date`.
2. ***Métodos para UTC**:*
   - Los métodos que comienzan con `getUTC` y `setUTC` son similares a los mencionados anteriormente, pero operan en relación con el Tiempo Universal Coordinado (UTC), también conocido como Hora Media de Greenwich (GMT).
   - Por ejemplo, `getUTCFullYear()`, `getUTCMonth()`, `getUTCDate()`, `getUTCDay()`, `getUTCHours()`, `getUTCMinutes()`, `getUTCSeconds()`, `getUTCMilliseconds()` devuelven los componentes de la fecha y hora en UTC.
   - Los métodos `setUTCFullYear()`, `setUTCMonth()`, `setUTCDate()`, `setUTCHours()`, `setUTCMinutes()`, `setUTCSeconds()`, `setUTCMilliseconds()` permiten establecer los componentes de la fecha y hora en UTC.

Por ejemplo, si necesitas trabajar con fechas y horas en el huso horario local del usuario, utilizarás los métodos estándar como `getHours()`, `getMinutes()`, etc. Estos métodos devolverán la hora local según la configuración del dispositivo del usuario.

Por otro lado, si necesitas trabajar con la hora en UTC, puedes utilizar los métodos que comienzan con `getUTC` y `setUTC`, que te permiten obtener y establecer la hora en relación con el tiempo coordinado mundial, independientemente de la zona horaria local del usuario.

Estos métodos son útiles para realizar cálculos y manipulaciones de fechas y horas de manera consistente, independientemente de la zona horaria del usuario o del entorno de ejecución del script.



###                                                                       METODOS ESTATICOS

**Date.now()**:

- `Date.now()` devuelve un número que representa los milisegundos transcurridos desde el 1 de enero de 1970, 00:00:00 UTC, hasta el momento en que se invoca el método.
- Es una forma conveniente de obtener una marca de tiempo actual en milisegundos, especialmente útil para medir lapsos de tiempo o establecer marcas de tiempo en aplicaciones.

```javascript
var marcaDeTiempoActual = Date.now();
console.log(marcaDeTiempoActual); // Devuelve un número de milisegundos actual.
```



**Date.parse()**:

- Transforma una cadena de fecha en formato ISO 8601 o en un formato de fecha específico y devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970, 00:00:00 UTC, hasta la fecha representada por la cadena.
- El formato de la cadena de fecha debe ser reconocido por el motor JavaScript para que `Date.parse()` pueda analizarlo correctamente.
- Es importante mencionar que el comportamiento de `Date.parse()` puede variar según la implementación del motor JavaScript, por lo que es recomendable utilizar formatos de fecha y hora estandarizados.

```javascript
var fechaEnMilisegundos = Date.parse("2024-02-13T12:00:00");
console.log(fechaEnMilisegundos); // Devuelve el número de milisegundos correspondiente a la fecha y hora especificadas.
```

`Date.now()` es útil cuando necesitas obtener la marca de tiempo actual en milisegundos, mientras que `Date.parse()` es útil para analizar cadenas de fecha y convertirlas en milisegundos desde la época.



###                                                                 METODOS DE INSTANCIACION

1. **getDate()**

   retorna el día del mes (un número entre 1 y 31) para la fecha especificada de acuerdo a la hora local del sistema.

   ```javascript
   var fecha = new Date('2024-02-13T12:00:00');
   var diaDelMes = fecha.getDate();
   console.log(diaDelMes); // Devuelve 13
   ```



2. **getDay()**

   Retorna el día de la semana (un número entre 0 y 6) para la fecha especificada de acuerdo a la hora local del sistema. En este caso, 0 representa el domingo, 1 el lunes, y así sucesivamente hasta 6 que representa el sábado.
   
   ```javascript
   var fecha = new Date('2024-02-13T12:00:00');
   var diaDeLaSemana = fecha.getDay();
   console.log(diaDeLaSemana); // Devuelve 1
   ```



3. **getFullYear()**

​	Retorna el año completo (como un número de 4 dígitos) para la fecha especificada, de acuerdo a la 	hora local del sistema.

```javascript
var fecha = new Date('2024-02-13T12:00:00');
var anio = fecha.getFullYear();
console.log(anio); // Devuelve 2024
```

​	

4. **getHours()**

   Retorna la hora del día (un número entre 0 y 23) para la fecha especificada de acuerdo a la hora local del sistema.

   ```javascript
   var fecha = new Date('2024-02-13T12:30:00');
   var horas = fecha.getHours();
   console.log(horas); // Devuelve 12
   ```



5. **getMiliseconds()**

   Retorna los milisegundos (un número entre 0 y 999) para la fecha especificada de acuerdo a la hora local del sistema.

   ```javascript
   var fecha = new Date('2024-02-13T12:30:45.789');
   var milisegundos = fecha.getMilliseconds();
   console.log(milisegundos); // Devuelve 789
   ```

   

6. **getMinutes()**

    Retorna los minutos (un número entre 0 y 59) para la fecha especificada de acuerdo a la hora local del sistema.

   ```javascript
   var fecha = new Date('2024-02-13T12:30:45');
   var minutos = fecha.getMinutes();
   console.log(minutos); // Devuelve 30
   ```

   

7. **getMonth()**

​	 Retorna el mes (un número entre 0 y 11) para la fecha especificada de acuerdo a la hora local.	

```javascript
var fecha = new Date('2024-02-13T12:00:00');
var mes = fecha.getMonth();
console.log(mes); // Devuelve 1, que corresponde a febrero (0 es enero, 1 es febrero, ..., 11 es diciembre).
```

​	

8.  **getSeconds()**

   Retorna los segundos (un número entre 0 y 59) para la fecha especificada de acuerdo a la hora local.

   ```javascript
   var fecha = new Date('2024-02-13T12:30:45');
   var segundos = fecha.getSeconds();
   console.log(segundos); // Devuelve 45, que son los segundos de la fecha especificada.
   ```



9. **getTime()**

   Retorna el valor numérico de la fecha especificada como el número de milisegundos transcurridos desde el 1 de enero de 1970, 00:00:00 UTC. Devuelve valores negativos para fechas previas.

```javascript
var fecha = new Date('2024-02-13T12:00:00');
var tiempoEnMilisegundos = fecha.getTime();
console.log(tiempoEnMilisegundos); // Devuelve el número de milisegundos desde el 1 de enero de 1970.
```



10. **getTimezoneOffset()**

    Retorna la diferencia horaria en minutos para la hora local.

    ```javascript
    var fecha = new Date('2024-02-13T12:00:00');
    var diferenciaHoraria = fecha.getTimezoneOffset();
    console.log(diferenciaHoraria); // Devuelve la diferencia horaria local en minutos.
    ```

    

11. **getUTCDate()**

    Retorna el día (fecha) del mes (un número entre 1 y 31) para la fecha especificada de acuerdo a la *hora local.*

    ```javascript
    var fecha = new Date('2024-02-13T12:00:00');
    var diaDelMesUTC = fecha.getUTCDate();
    console.log(diaDelMesUTC); // Devuelve 13, que es el día del mes en UTC.
    ```



12. **getUTCDay()**

    Retorna el día de la semana (un número entre 0 y 6) para la fecha especificada en <u>hora universal</u>. 0 representa domingo, 1 representa lunes, y así sucesivamente hasta 6 que representa sábado.

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:00:00Z');
    var diaDeLaSemanaUTC = fecha.getUTCDay();
    console.log(diaDeLaSemanaUTC); // Devuelve 2 (martes)
    ```

    

13. **getUTCFullYear()**

    Retorna el año (un número de 4 dígitos) para la fecha especificada en <u>hora universal</u>.

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:00:00Z');
    var anioUTC = fecha.getUTCFullYear();
    console.log(anioUTC); // Devuelve 2024
    ```

    

14. **getUTCHours()**

     Retorna la hora del día (un número entre 0 y 23) para la fecha especificada en <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:30:00Z');
    var horasUTC = fecha.getUTCHours();
    console.log(horasUTC); // Devuelve 12
    ```

    

15. **getUTCMilliseconds()**

    Retorna los milisegundos (un número entre 0 y 999) para la fecha especificada en <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:30:45.789Z');
    var milisegundosUTC = fecha.getUTCMilliseconds();
    console.log(milisegundosUTC); // Devuelve 789
    ```

    

16. **getUTCMinutes()**

    Retorna los minutos (un número entre 0 y 59) para la fecha especificada en <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:30:45Z');
    var minutosUTC = fecha.getUTCMinutes();
    console.log(minutosUTC); // Devuelve 30
    ```

    

17. **getUTCMonth()**

     Retorna el mes (un número entre 0 y 11) para la fecha especificada en <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:30:45Z');
    var mesUTC = fecha.getUTCMonth();
    console.log(mesUTC); // Devuelve 1 (febrero)
    ```

    

18. **getUTCSeconds()**

    Retorna los segundos (un número entre 0 y 59) para la fecha especificada en <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:30:45Z');
    var segundosUTC = fecha.getUTCSeconds();
    console.log(segundosUTC); // Devuelve 45
    ```



20. **getYear()**

    Este método ha sido desaprobado y se recomienda evitar su uso. Retorna el año (usualmente de 2 a 3 dígitos) para la fecha especificada de acuerdo a la hora local. En lugar de este método, se recomienda usar `getFullYear()` para obtener el año completo.

    ```javascript
    javascriptCopy codevar fecha = new Date('2024-02-13T12:00:00');
    var year = fecha.getYear(); // Evita usar este método
    console.log(year); // Devolvería, por ejemplo, 124 para el año 2024.
    ```

    

21. **setDate() **

    Establece el día del mes para la fecha especificada de acuerdo a la hora local.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setDate(15); // Establece el día del mes al 15
    console.log(fecha); // Devolverá la fecha con el día del mes ajustado.
    ```

    

22. **setFullYear()**

    Establece el año completo (4 dígitos para años de 4 dígitos) para una fecha específica de acuerdo a la hora local.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setFullYear(2025); // Establece el año completo como 2025
    console.log(fecha); // Devolverá la fecha con el año ajustado.
    ```

    

23. **setHours()**

    Establece la hora para una fecha específica de acuerdo a la hora local.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setHours(15); // Establece la hora como las 3 de la tarde (15 horas)
    console.log(fecha); // Devolverá la fecha con la hora ajustada.
    ```

    

24. **setMilliseconds() **

    Establece los milisegundos para una fecha específica de acuerdo a la hora local.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setMilliseconds(500); // Establece los milisegundos como 500
    console.log(fecha); // Devolverá la fecha con los milisegundos ajustados.
    ```

    

25. **setMinutes()**

    Establece los minutos para una fecha específica de acuerdo a la hora local.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setMinutes(30); // Establece los minutos como 30
    console.log(fecha); // Devolverá la fecha con los minutos ajustados.
    ```

    

26. **setMonth()**

    Establece el mes para una fecha específica de acuerdo a la hora local.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setMonth(5); // Establece el mes como junio (0 representa enero, 1 febrero, ..., 11 diciembre)
    console.log(fecha); // Devolverá la fecha con el mes ajustado.
    ```

    

27. **setSeconds()**

    Establece los segundos para una fecha específica de acuerdo a la hora local.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setSeconds(45); // Establece los segundos como 45
    console.log(fecha); // Devolverá la fecha con los segundos ajustados.
    ```



28. **setTime(millisec)**

     Establece el objeto Date al tiempo representado por un número de milisegundos desde el 1 de Enero de 1970, 00:00:00 UTC. Puedes usar números negativos para fechas previas.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setTime(1000000000000); // Establece la fecha al 9 de septiembre de 2001
    console.log(fecha);
    ```

    

29. **setUTCDate(day)**

     Establece el día del mes para la fecha especificada de acuerdo a la <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setUTCDate(15); // Establece el día del mes como 15
    console.log(fecha);
    ```

    

30. **setUTCFullYear(year)**

    Establece el año completo (4 dígitos para años de 4 dígitos) para una fecha específica de acuerdo a la <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setUTCFullYear(2025); // Establece el año como 2025
    console.log(fecha);
    ```



28. **setUTCHours(hour)**:

    Establece la hora para una fecha específica de acuerdo a la <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setUTCHours(12); // Establece la hora como 12 (mediodía)
    console.log(fecha);
    ```

    

29. **setUTCMilliseconds(millisec)**

    Establece los milisegundos para una fecha específica de acuerdo a la <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setUTCMilliseconds(500); // Establece los milisegundos como 500
    console.log(fecha);
    ```

    

30. **setUTCMinutes(min)**

    Establece los minutos para una fecha específica de acuerdo a la <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setUTCMinutes(30); // Establece los minutos como 30
    console.log(fecha);
    ```

    

31. **setUTCMonth(month)**

    Establece el mes para una fecha específica de acuerdo a la <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setUTCMonth(5); // Establece el mes como junio (0 representa enero, 1 febrero, ..., 11 diciembre)
    console.log(fecha);
    ```

    

32. **setUTCSeconds(sec)**

    Establece los segundos para una fecha específica de acuerdo a la <u>hora universal.</u>

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setUTCSeconds(45); // Establece los segundos como 45
    console.log(fecha);
    ```

    

33. **setYear(year)**

     Establece el año (usualmente de 2 a 3 dígitos) para una fecha específica de acuerdo a la <u>hora local</u>. Se recomienda usar `setFullYear()` en su lugar.

    ```javascript
    javascriptCopy codevar fecha = new Date();
    fecha.setYear(99); // Establece el año como 99
    console.log(fecha);
    ```

