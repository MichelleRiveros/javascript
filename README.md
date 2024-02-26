#                             *Javascript*



## Caracteristicas

1. Es un **lenguaje interpretado**, como html y css.
2.  **Orientado a objetos**, esto significa que es un lenguaje donde su estructura abarca todos los conceptos y todas las posibilidades que tiene un lenguaje orientado a objetos (clases, herencia, polimorfismo).
3.  **Lenguaje interpretado** (se ejecuta paso x paso). Es basado en prototipos, instancias y classless.
4. **Tipado debil**, las variables pueden cambiar.
5. **Lenguaje dinamico**, O sea que la variable se adapta al dato.
6. Esta contruido sobre la tecnologia **ECMASCRIPT**. version 1 -> 1997.



## Usos

1. Dinamismo de los sitios web
2. Servidor en NodeJS
3. Tecnologias frontend como Angular, react o Vue.Js



## Enlazar JS 

<Script src="js/app.js" defer></script>



## Variables

Es un espacio que guardamos en memoria. En la variable se puede cambiar el contenido; La variable sigue siendo la misma, lo que cambia es el contenido.

Num = 1

Num = 2

#### Tipos 

- String  ->  Cadena de texto ( 'Hola' / "Hola" / )

- Number  ->  Numero ( 19 )

- Boolean  ->  Falso ( 0 ) / Verdadero ( 1 )

- Symbol  ->  

- Undefined  ->  Tipo de dato que dice que la variable existe en el programa pero no tiene valor (esta declarada pero no inicializada)

- Null  ->  Representa la ausencia de valor. (Que no existe basicamente)

- Nan  -> 

  

La variable se puede declarar, inicializar y modificar a lo largo del tiempo. Cuando nostros declaramos una variable, tenemos tres formas de declararlas: 

<u>Scop</u>e - Es el alcance que tienen las variables: 

- let  ->  Alcance local o global dependiendo de donde se inicialice

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



#### Convenciones y nomenclaturas

- camelCase -> holaMundoLindo

- snake_case -> hola_mundo_lindo

- SCREAMING_CASE -> HOLA_MUNDO_LINDO

  

## OPERADORES 



#### ARIGMETICOS

- suma (+)

- Resta (-)

- Multiplicacion (*)

- Division (/)

- Modulo (%)

- Exponente (**)

- Incremento (++) - pre-incremento (++a) --  post-incremento (a++)  - (se incrementa en 1)

- Decremento (--)  - pre-decremento (++a) --  post-decremento (a++) - (se decrementa en 1)

  

#### DE COMPARACION

- <  l  >
- <=  l  >=
- ===
- !==



#### DE ASIGNACION

- += 

  ```javascript
  let miNumero = 10;
  miNumero += 5;
  console.log(miNumero); //imprime 15
  ```

- -=

  ```javascript
  let miNumero = 10;
  miNumero -= 5;
  console.log(miNumero); //imprime 5
  ```

  

- *=

  ```javascript
  let miNumero = 10;
  miNumero *= 5;
  console.log(miNumero); //imprime 50
  ```

  

- /=

  ```javascript
  let miNumero = 10;
  miNumero /= 5;
  console.log(miNumero); //imprime 2
  ```

  

- %=

  ```javascript
  let miNumero = 10;
  miNumero %= 5;
  console.log(miNumero); //imprime 0
  ```

  

- **=

  ```javascript
  let miNumero = 10;
  miNumero **= 5;
  console.log(miNumero); //imprime 100.000
  ```

  

#### LOGICOS

- AND (&&) -> Si ambos valores son se cumplen es True

- OR (ll) -> Si uno de los dos es se cumple es True 

- NOT (!) -> Este invierte el valor original de un booleano

  ```javascript
  let a = true;
  !a;
  console.log(a); //imprime false
  ```



#### Comparacion

- == (Si los datos son iguales)
- === (Si el dato y el TIPO de datos son igual)
- != (Si los datos son distintos)
- !==  (Si el dato y el TIPO de datos son distintos)
- < / > (Menor que y Mayor que)
- <= / >= (Menor o igual que y Mayor o igual que)



## typeof

- El operador typeof proporciona una cadena de texto que señala
  el tipo de un operando, siendo aplicable a diversos tipos de
  operandos, ya sea variables o literales.

  ```javascript
  let edad = 20
  typeof(edad)
  'number'
  console.log(edad)
  20
  ```



-----------------------------------------------------------------------------------------------------------------------------------------------------------



#### Comentarios

- Comentar una sola linea // 
- comentar varias lineas /* */



#### Console.log()

Es una función integrada en JavaScript que se utiliza para imprimir mensajes en la consola del navegador o del editor de código.

- console.error() -> Imprime un mensaje de error 

- console.warn() -> Imprime un mensaje de advertencia

- console.info() -> Imprime un mensaje de informacion

   

### CONDICIONAL "if / else if/ else"

El conficional "if" es un codigo que se ejecuta si la condicion (dentro del parentesis se cumple). 

else if -> Para comprobar mas de una condicion.

else -> Se utiliza para ejecutar un bloque de codigo diferente si la condicion "if" es falsa.



DATO -> La anidacion de condicionales es cuando agregamos un "if" dentro de otro "if"

```javascript
const edad = 17;
const tieneCarnet = true;

if (edad >= 18){
	if (tieneCarnet){
		console.log('Puedes conducir');}
	else{
		console.log('No puedes conducir');}
else {
	console.log('No puedes conducir');}
}
```



### SWITCH

Estructura de control que nos permite ejecutar diferentes bloques de codigo dependiendo del valor de una expresion.

```javascript
switch (expresion){
	case 1:
		break
	case 2:
		break
	case 3:
		break
	default:
		//codigo a ejecutar si la expresion no coincide con ninguna opcion anterior
		break
}
```



### Agrupando cases



```javascript
const dia = new Date().getDay()

switch (dia){
	case 0:
	case 6:
		console.log("Hoy es fin de semana")
		break
	case 1:
	case 2:
	case 3: 
	case 4:
		console.log("NOooo, a trabajar")
		break
	case 5:
		consle.log("Hoy es viernes")
		break
}
```



### El patron switch (true)

En lugar de evaluar una expresion, evalua una condicion ignorando por completo el valor de la expresion.

```javascript
let edad = 25;

switch(true){
	case(edad >= 18 && edad < 25):
		console.log("Eres mayor de edad y eres joven");
	case (edad >= 25 && edad < 40):
		console.log("Eres mayor de edad y estas en la mejor edad");
	default:
		console.log("Eres menor de edad");
}
```



# Ciclos

Nos permite repetir un bloque de codigo mientras la condicion sea verdadera.

#### Tipos de clicos: 

- #### While

  ```javascript
  while (condicion){ //Bloque de codigo}
  while (5 > 2) { alert("Hola");}
  ```

  

- #### do while 

  El ciclo "do while" ejecuta al menos una vez su bloque de codigo debido a que la condicion a revisar se encuentra al final del bloque.

  ```javascript
  do {} while(condicion);
  
  let conadot = 0, repeticiones = 5;
  
  do{
      console.log(contador++);
  } while(contador <= repeticiones);
  ```

  

- #### for

  Especificamos cuantas veces queremos repetir su bloque de codigo.

  ```javascript
  for (declaracion de variales (tipo contador); condicion; incremento de contadores){
      //BLoque de codigo
  }
  ```

  

## Continue y break

Cuando el interprete de JavaScript encuentra la palabra "continue", salta a la siguiente iteracion del bucle, y la palabra "break" rompe por completo el ciclo.

```javascript
let cuentaAtras = 10;

while (cuentaAtras > 0){
	cuentaAtras = cuentaAtras - 1
	
	if (cuentaAtras % 2 === 0){
		continue;
	}
	
	console.log(cuentaAtras);
}
```



## FUNCIONES

Bloque de codigo reutilizable que nos va a permitir realizar una tarea en particular. Puede tener parametros de entrada y tambien puede devolver un valor de salida, pero estos son opcionales.

```javascript
function suma(parametros){ 
    //Cuerpo de la funcion (bloque de codigo); return (valor de retorno) 
}

//Declaracion
function imprimir( a (paramentro)){
    console.log( a (parametro));
}

//Llamado funcion
imprimir(100 (Argumento)); 
```



#### *Diferencia entre Parametros y Argumentos en una funcion*

- Parametro -> Es la variable que se define en la funcion al momento de la declaracion de la funcion
- Argumento -> Es la variable que se le pasa a la funcion cuando la llamamos



#### Diferencia entre procedimiento y funcion

- Procedimiento -> Cuando lo declaramos no retorna ningun tipo de informacion al programa principal.
- Funcion ->Cuando lo declaramos retorna informacion al programa principal.



#### TIPOS DE FUNCIONES

- Funciones definidas por el usuario
- Funciones incorporadas (Built - in)



## FUNCIONES RECURSIVAS

Basicamente son las funciones que se mandan a llamar asi mismas. 

```javascript
function funcionRecursiva(n){
	if (n == 1){
		console.log("hola");
    } else{
		console.log(n);
		funcionRecursiva(n-1);
	}
}

funcionRecursiva(15);
```



## FUNCIONES FLECHA (ARROW)

Proporcionan una sintaxis más concisa y una manera más simple de definir funciones en comparación con las funciones tradicionales.

La sintaxis básica de una función flecha es la siguiente:

```javascript
let nombreFuncion = (parametro1, parametro2) => {
    // Cuerpo de la función
};
```



## MATH

Es un objeto incorporado que proporciona métodos y constantes para realizar operaciones matemáticas. Este objeto no puede ser instanciado; es simplemente un objeto estático. Proporciona funcionalidades para operaciones matemáticas comunes, como redondeo, funciones trigonométricas, generación de números aleatorios, entre otros.



- **Generar un número aleatorio entre 0 y 1**:

```javascript
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
```



- **Redondear un número al entero más cercano**:

```javascript
let numero = 3.7;
let numeroRedondeado = Math.round(numero);
console.log(numeroRedondeado); // Salida: 4
```



- **Obtener la raíz cuadrada de un número**:

```javascript
let numero = 25;
let raizCuadrada = Math.sqrt(numero);
console.log(raizCuadrada); // Salida: 5
```



- **Calcular el seno, coseno y tangente de un ángulo en radianes**:

```javascript
let angulo = Math.PI / 4; // 45 grados en radianes
let seno = Math.sin(angulo);
let coseno = Math.cos(angulo);
let tangente = Math.tan(angulo);
console.log(seno, coseno, tangente);
```



## Hoisting

Podemos usar una variable y despues declararla. (solo con var)

```javascript
x = 10;
console.log(x);

var x;
```



## 														ARRAYS (listas)



Permite almacenar multiples valores en una sola variable, en lugar de definir varias variables.

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
let numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]); // imprime 1
console.log(numeros[2]); // imprime 3
```

```javascript
let numeros = []; //Se creo un arreglo vacio

numeros[0] = 10; //El indice "0" ahora tiene el valor de 10
numeros[4] = 50 // El indice "4" ahora tiene el valor de 50

//Como se le asigno un valor al indice 4 en el array, lo que hace el sistema se reserva el espacio en memoria de los indices 1,2 y 3 pero sin ningun valor, o sea, su valor seria Undefined.
console.log(numeros[0]); // imprime 10
console.log(numeros[2]); // imprime Undefined
```



iterar un arreglo

```javascript
for (let i = 0; i < numerosArreglo.length, i++){
	console.log(numeroArreglo[i]);}
```



*Algunas de las propiedades y métodos más comunes de los arrays en JavaScript incluyen:*



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

- `indexOf()`:  Metodo que retorna el primer indice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente.

  ```javascript
  // Definimos un array de frutas
  const frutas = ['manzana', 'banana', 'pera', 'uva', 'banana'];
  
  // Usamos indexOf para encontrar el índice de 'pera'
  const indicePera = frutas.indexOf('pera');
  console.log("El índice de 'pera' es:", indicePera); // Output: El índice de 'pera' es: 2
  ```

- `forEach()`: Metodo que ejecuta la funcion indicada una vez por cada elemento del array.

  ```javascript
  // Definimos un array de números
  const numeros = [1, 2, 3, 4, 5];
  
  // Usamos forEach para imprimir cada número del array
  numeros.forEach(function(numero) {
      console.log(numero);
  });
  
  //En este ejemplo, forEach() recorre cada elemento del array numeros y ejecuta la función proporcionada una vez por cada elemento. La función recibe un parámetro (en este caso, llamado numero) que representa el elemento actual del array en cada iteración. Dentro de la función, imprimimos cada número utilizando console.log().
  ```

- `join()`: Este metodo une todos los elemntos de una matriz en una cadena y devuelve esta cadena.

  ```javascript
  // Definimos un array de frutas
  const frutas = ['manzana', 'banana', 'pera', 'uva'];
  
  // Usamos join para unir los elementos del array en una cadena separados por comas
  const cadenaFrutas = frutas.join(', ');
  
  console.log(cadenaFrutas); // Output: manzana, banana, pera, uva
  
  //En este ejemplo, hemos creado un array llamado frutas que contiene diferentes frutas. Luego, usamos el método join(', ') para unir los elementos del array en una cadena, donde cada elemento está separado por una coma seguida de un espacio. El resultado es una cadena que contiene todas las frutas separadas por comas.
  ```



## MATRICES



Una matriz es un arreglo de 2 dimensiones

```javascript
let matriz = [[],[]]; // -> matriz de 2 renglones x 3 columnas

matriz[0][0] = 100;  //Renglon 0 y columna 0 = 100
matriz[0][1] = 200; //Renglon 0 y columna 1 = 200

console.log(matriz[0][1]); //Imprime 200

let matriz = [[100, 200, 300],[500, 700, 800]];
console.log(matriz[0][1]); //Imprime 700

```



**Iterar los elementos de una matriz**

1. saber cuantos renglones tenemos en la matriz

```javascript
let matriz = [[100, 200, 300],[500, 700, 800]];

console.log(matriz.length); //Imprime 2
```

2.  Saber cuantas columnas tiene cada renglon

```javascript
console.log(matriz[0].length); //Imprime 3
```

3. Iteracion con ciclos "for"

```javascript
for(let ren = 0; ren < matriz.length; ren++){
	//Columnas
	for(let column = 0; column < matriz[ren].length; column++){
		console.log(matriz[ren][column]);
	}
}
```



## OPERADOR TERNARIO

```javascript
//(condicion) ? bloque por si se cumple : bloque por si no se cumple;
let a = 3;
(a > 9) ? console.log(++a) : a--;
// resultado -> a = 2
```





##  STRINGS (Cadenas)



#### Funciones Incorporadas

```javascript
//Una cadena es inmutable y es un array.
let cadena1 = "Hola"

//obtener el largo de una cadena de texto
console.log(cadena1.length); //Imprime 4

//Recorrer cadena
for (let i = 0; i < cadena1.length; i++){
    console.log(cadena[i]); //Imprime H,o,l,a
}
```



#### Sub-Cadenas 

Extracto de caracteres de la cadena original

```javascript
let cadena3 = "Hola Mundo";

let cadena1 = cadena3.substring(0,4);

console.log(cadena1); //Imprime Hola
```



#### Concatenacion de Cadenas

Unir dos o mas cadenas en una sola

```javascript
let cadena1 = "Hola";
let cadena2= "Mundo";

let cadena = cadena1 + cadena2;
console.log(cadena); //Imprime HolaMundo

let cadena = cadena1 + '' + cadena2;
console.log(cadena); //Imprime Hola Mundo

//Tambien podemos utilizar String Interpolation
let cadena = `${cadena1} ${cadena2}`;
console.log(cadena); //Imprime Hola Mundo
```

<!--La sobrecarga de operadores, también conocida como "operator overloading" en inglés, es una característica que permite a los programadores definir el comportamiento de los operadores en sus propios tipos de datos personalizados. Sin embargo, en JavaScript, a diferencia de otros lenguajes de programación como C++ o Python, no hay soporte nativo para la sobrecarga de operadores.-->

<!--En lenguajes como C++ o Python, la sobrecarga de operadores permite definir cómo los operadores como `+`, `-`, `*`, `/`, entre otros, deben funcionar para tipos de datos personalizados como clases. Esto significa que puedes definir cómo se suman, restan, multiplican o dividen objetos de tus clases.-->



#### Dividir una cadena en partes

```javascript
let cadena3 = "Hola Mundo";

let cadena1 = cadena3.split(' ', 1); //El numero 3 es el limitante de Cada PALABRA.

console.table(cadena1); //Imprime 'Hola'
```



# RegExp

Las **expresiones regulares** (RegExp) son un sistema para buscar, capturar o remplazar texto utilizando patrones.  

- [ ] `patron.test(texto)`: Utilizamos el método `test()` del objeto RegExp para verificar si el patrón coincide con alguna parte del texto. Devolverá `true` porque hay al menos una ocurrencia de "hola" en el texto, independientemente de las mayúsculas y minúsculas.

- [ ] `texto.match(patron)`: Utilizamos el método `match()` de la cadena de texto para encontrar todas las ocurrencias del patrón en el texto. Devuelve un array con todas las ocurrencias encontradas. En este caso, devuelve `["Hola", "Hola"]`, ya que encontró dos ocurrencias de "Hola" en el texto.

  

- `/` **Coincidencia de una cadena específica**:

```javascript
const patron = /hola/;
const texto = "¡Hola mundo!";
console.log(patron.test(texto)); // Devuelve false
console.log(texto.match(patron)); // El método match() se aplica al texto y se le pasa el patrón como argumento.
```

1. En este ejemplo, la expresión regular `/hola/` busca la cadena "hola" dentro del texto.

2. La función `test()` del objeto RegExp verifica si la cadena contiene la expresión regular y devuelve `true` si se encuentra una coincidencia, de lo contrario, devuelve `false`.



- **`/` , `i` Coincidencia de una cadena específica (ignorando mayúsculas y minúsculas)**:

```javascript
const patron = /hola/i; // 'i' indica que la búsqueda es insensible a mayúsculas y minúsculas
const texto = "¡Hola Mundo!";
console.log(patron.test(texto)); // Devuelve true
console.log(texto.match(patron));
```

1. La `i` después de la expresión regular `/hola/` indica que la búsqueda es insensible a mayúsculas y minúsculas.

2. Por lo tanto, la expresión regular coincidirá con "Hola" aunque esté en mayúscula.



- **`^` Coincidencia de un patrón al inicio de una cadena**:

```javascript
const patron = /^hola/;
const texto = "¡Hola mundo!";
console.log(patron.test(texto)); // Devuelve false
console.log(texto.match(patron));
```

1. El `^` al principio de la expresión regular indica que la cadena debe comenzar con "hola".

2. En este caso, como la cadena comienza con un signo de exclamación, no hay coincidencia y devuelve `false`.



- **`^` , `i` Coincidencia de un patrón al inicio de una cadena  (ignorando mayúsculas y minúsculas)**:**:

```javascript
const patron = /^hola/i;
const texto = "¡Hola mundo!";
console.log(patron.test(texto)); // Devuelve false
console.log(texto.match(patron)); //Devuelve null
```



- **`g `, ` i` Todas las oincidencia de un patrón de una cadena  (ignorando mayúsculas y minúsculas)**:**:

```javascript
const patron = /hola/gi;
const texto = "¡Hola Mundo! Hola a todos.";

console.log(patron.test(texto)); // Devuelve true
console.log(texto.match(patron)); // Devuelve ["Hola", "Hola"]
```

1. `g`: Indica que buscamos todas las ocurrencias del patrón en el texto (no solo la primera).

2. `i`: Indica que la búsqueda no distingue entre mayúsculas y minúsculas (case-insensitive).



- **Coincidencia de un patrón al final de una cadena**:

```javascript
const patron = /mundo!$/;
const texto = "¡Hola mundo!";
console.log(patron.test(texto)); // Devuelve true
```

- El `$` al final de la expresión regular indica que la cadena debe terminar con "mundo!".

- Como la cadena termina con "mundo!", devuelve `true`.

  

- **`[] `Coincidencia de uno de varios caracteres**:

```javascript
const patron = /[aeiou]/;
const texto = "Hola mundo!";
console.log(patron.test(texto)); // Devuelve true
```

- La expresión regular `[aeiou]` coincide con cualquier vocal (a, e, i, o, u) dentro del texto.
- Como el texto contiene la letra 'o', devuelve `true`.



- **`[] `, ` ^` Coincidencia de uno de varios caracteres**:

```javascript
const patron = /[^aeiou]/;
const texto = "Hola mundo!";
console.log(patron.test(texto)); // Devuelve true porque estan las letras "H, l, m, n, d y !"
```

- `[^aeiou]`: Esta parte del patrón es una clase de caracteres negados. El `^` dentro de los corchetes indica que la clase de caracteres negados coincide con cualquier carácter que no esté dentro de la lista especificada. En este caso, la lista es `aeiou`, por lo que esta expresión regular coincidirá con cualquier carácter que no sea una vocal minúscula.

  

- **`[] `, ` m`  Coincidencia de un rango de caracteres**:

```javascript
const patron = /[a-z]/m;
const texto = "Hola mundo!";
console.log(patron.test(texto)); // Devuelve true
```

- La expresión regular `[a-z]` coincide con cualquier letra minúscula del alfabeto inglés.

- Como el texto contiene la letra 'o', devuelve `true`.

- `m`  Indica "multilinea". Este modificador afecta el comportamiento de los metacaracteres `^` y `$` para que coincidan con el comienzo y el final de cada línea en lugar del comienzo y el final del texto completo.

  

- **`[] `, ` m` busca cualquier dígito del 0 al 6 en el texto**

```javascript
javascriptCopy codeconst patron = /[0-6]/m;
const texto = "¡Hola hola!";
console.log(patron.test(texto)); // Devuelve false
console.log(texto.match(patron)); // El método match() se aplica al texto y se le pasa el patrón como argumento.
```

- `const patron = /[0-6]/m;`: Aquí estamos creando una expresión regular que busca cualquier dígito del 0 al 6. La expresión regular incluye el modificador `m`, que trata de hacer coincidir el principio y el final de cada línea individual, en lugar del principio y el final de todo el texto.



## CONVERSION DE DATOS 



#### Convertir una numero a string

```javascript
let a = 10, b = 20;

let concatenacion = a.toString() + b.toString();

console.log(concatenacion); // Imprimirá "1020"
```



#### Convertir una string a numero

```javascript
let a = "10", b = "20";

let concatenacion = Number(a) + Number(b);

console.log(concatenacion.toString()) //Imprime 30

//toString devuelve una cadena con el numero en la base que determinemos

let concatenacion = paseFloat(a) + parseFloat(b);
//CONVERTIRLO A FLOTANTE
let concatenacion = parseInt(a) + parseInt(b);
//CONVENTIRLO A ENTERO
```



#### Valor absoluto de un numero

```javascript
//Valor absoluto

let numero = -10;
let valorAbsoluto = Math.abs(numero);

console.log(valorAbsoluto); //Imprime 10
```



#### Redondeo y truncado

```javascript
let numero = 8.5, redondeo, truncado;

//Redondeo -> Toma el valor y lo redondea al numero entero mas cercano.
redondeo = Math.round(numero);
console.log(redondeo); //Imprime 9

//Redondeo -> Devuelve el maximo entero menor o igual a un numero.
redondeo = Math.floor(numero);
console.log(redondeo); //Imprime 9

//Truncado -> Elimina la parte decimal de numero
truncado = Math.trunc(numero);
console.log(truncado); //Imprime 8
```



## 	UBICACION ETIQUETA SCRIPT



```html
<!DOCTYPE html>
<html lang="sp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <Script src="js/app.js" defer></script>
    <title>JavaScript</title>
</head>
<body>
</body>
</html>
```



## OBJETOS (diccionarios)

Los objetos tienen distintas propiedades y metodos.

```javascript
let persona = {
    nombre: 'Michelle',
    Apellido: 'Riveros',
    email: 'michelleriveros232002@hotmail.com',
    edad: 28
}

// Las propiedades y/o atributos del objeto "persona" son nombre, apellido, email y edad.

consola.log(persona.nombre); //Imprime Michelle
```



#### Como agregar un metodo a un objeto

```javascript
let persona = {
    nombre: 'Michelle',
    Apellido: 'Riveros',
    email: 'michelleriveros232002@hotmail.com',
    edad: 28,
    nombreCompleto: function(){
    //Operador this, es la forma en la que podemos acceder a las propiedades de un objeto 		estando dentro del objeto
        return this.nombre + ' ' + this.Apellido;
    }
}

console.log(persona.nombreCompleto())
```



```javascript
//RECORRER CADA PROPIEDAD (KEY) Y VALOR DEL OBJETO

for( let i in persona){
	console.log(i); //-> acceder a la llave
	console.log(persona[i]); // -> acceder a los valores de cada objeto
}

//ACCEDER A PROPIEDADES
console.log(persona.nombre); // Imprime "Michelle"
console.log(persona["edad"]); // Imprime 28

//OBTENER LAS PROPIEDADES DEL OBJETO
const propiedades = Object.getOwnPropertyNames(persona);
console.log({propiedades})

//OBTENER LOS VALORES DEL OBJETO
const valores = Object.values(persona);
console.log({propiedades,valores})

//AGREGAR UNA NUEVA PROPIEDAD (KEY)
persona.tel = '34553543'; //( "tel" es el nombre de la nueva propiedad o llave)

//MODIFICAR UNA PROPIEDAD (KEY)
persona.tel = '45743245';

//ELIMINAR UNA PROPIEDAD (KEY)
delete perona.tel;

//MANDAR A IMPRIMIR UN OBJETO EN EL NAVEGADOR WEB

1. Forma
for( let i in persona){
	console.table(`${i} ${persona[i]}`); //-> acceder a la llave
}

2. Forma
let personaObjeto = Object.values(persona);

3. Forma
let personaString = JSON.stringify ( persona );

//Metodo JSON.stringify nos convierte nuestro objeto a una cadena de texto.
//El metodo Stringify lo que hace es convertir cada uno de las propiedades de nuestro objeto a una cadena. 
```



### BLOQUEO DE PROPIEDADES

El bloqueo de propiedades, también conocido como "Object.freeze()" en JavaScript, es una característica que permite hacer que un objeto sea inmutable, es decir, que sus propiedades no puedan ser modificadas, añadidas o eliminadas una vez que el objeto ha sido congelado.

El bloqueo de propiedades es útil en situaciones donde se desea asegurar que un objeto no sea modificado accidentalmente después de ser creado. Algunos casos de uso comunes del bloqueo de propiedades incluyen:

1. **Inmutabilidad de datos**: Al congelar un objeto, se garantiza que sus propiedades no cambiarán, lo que puede ser útil para mantener la integridad de los datos y prevenir errores inesperados en el código.
2. **Seguridad**: En entornos donde la seguridad es importante, como en aplicaciones web, el bloqueo de propiedades puede ayudar a prevenir la manipulación maliciosa de datos.
3. **Prevenir modificaciones accidentales**: En proyectos grandes o colaborativos, el bloqueo de propiedades puede ayudar a evitar que otras partes del código modifiquen accidentalmente objetos compartidos, lo que podría causar efectos secundarios no deseados.

Para congelar un objeto en JavaScript, se utiliza el método `Object.freeze()`. Por ejemplo:

```javascript
const persona = {
  nombre: "Michelle",
  edad: 28
};

Object.freeze(persona);

// Intentar modificar una propiedad congelada no tendrá efecto
persona.nombre = "Carlos";
console.log(persona.nombre); // Imprimirá "Michelle"
```

En este ejemplo, `Object.freeze(persona)` congela el objeto `persona`, por lo que cualquier intento de modificar sus propiedades será ignorado. Esto ayuda a garantizar que el objeto `persona` permanezca inmutable una vez que ha sido creado.



#### Metodo get y set en objetos

```javascript
let persona = {
    nombre: 'Michelle',
    Apellido: 'Riveros',
    email: 'michelleriveros232002@hotmail.com',
    edad: 28,
    nombreCompleto: function(){
    //Operador this, es la forma en la que podemos acceder a las propiedades de un objeto 		estando dentro del objeto
        return this.nombre + ' ' + this.Apellido;
    }
}

console.log(persona.nombreCompleto())

//get -> nos permite acceder a los valores de nuestras propiedades(keys)

let persona = {
    nombre: 'Michelle',
    Apellido: 'Riveros',
    email: 'michelleriveros232002@hotmail.com',
    edad: 28,
    get nombreCompleto(){
    //Operador this, es la forma en la que podemos acceder a las propiedades de un objeto 		estando dentro del objeto
        return this.nombre + ' ' + this.Apellido;
    }
}

console.log( persona.nombreCompleto); // -> ya no hay necesidad de llamar a la funcion

//set -> Establecer o modificar los valores de los atributos de nuestros obejtos

let persona = {
    nombre: 'Michelle',
    Apellido: 'Riveros',
    email: 'michelleriveros232002@hotmail.com',
    edad: 28,
    idioma: 'es_co',
    get lang(){
        return this.idioma.toUpperCase();
        //toUpperCase lo que hace es convertir una cadena de texto a mayusculas
    },
    set lang (lang){  //AQUI LO MODIFICAMOS A MAYUSCULAS
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
    //Operador this, es la forma en la que podemos acceder a las propiedades de un objeto 		estando dentro del objeto
        return this.nombre + ' ' + this.Apellido;
    }
}

persona.lang = 'en';
console.log(persona.lang);
```



#### Metodos constructores de objetos

Es una funcion especial que se trabaja con objetos en JavaScript

```javascript
//Funcion contructor de objetos de tipo persona
function Persona(nombre, apellido, email){
	this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//EL NOMBRE DE LA FUNCION CONSTRUCTORA DEBE INICIAR CON MAYUSCULA

Persona.prototype.tel = '24534635';

let objeto = new Persona('michelle','riveros','michelle@hotmail.com');
let objeto1 = new Persona('mich','riv','mich@hotmail.com');

//AGREGAR UNA NUEVA PROPIEDAD A EL OBJETO DE TIPO PERSONA QUE VAMOS A CREAR

Persona.prototype.tel = '24534635'; //"tel" es la llave

console.log(objeto);

```



#### METODO CALL

Nos va a permitir llamar un metodo que esta definidio en un objeto en desde otro objeto.

```javascript
let persona1 = {
	nombre: 'juan',
	Apellido: 'perez',
	nombreCompleto: function(titulo, tel){
		return titulo + this.nombre + this.Apellido + tel;
	}
}

let persona2 = {
	nombre: 'Carlos',
	Apellido: 'Lara'
}

//Vamos a hacer uso del metodo "nombreCompleto" que se encuentra en el objeto "persona1", pero con los datos de la persona2

console.log( persona1.nombreCompleto.call( persona2, 'Ing', '4757634'));
//Imprime Ing Carlos Lara 4757634
```



#### METODO APPLY

```javascript
let persona1 = {
	nombre: 'juan',
	Apellido: 'perez',
	nombreCompleto: function(titulo, tel){
		return titulo + this.nombre + this.Apellido + tel;
	}
}

let persona2 = {
	nombre: 'Carlos',
	Apellido: 'Lara'
}

//Vamos a hacer uso del metodo "nombreCompleto" que se encuentra en el objeto "persona1", pero con los datos de la persona2

let arreglo = ['ing','7368362387'];

console.log( persona1.nombreCompleto.apply( persona2, arreglo));
//Imprime Ing Carlos Lara 4757634
```





# SPREAD (objetos - arrays) 

Se utiliza para descomponer elementos de un iterable (como array o un objeto) y expandirlos en lugares donde se esperan argumetos o elementos separados.

- Concatenar arreglos

  ```javascript
  let array1 = [1,2,3];
  let array2 = [4,5,6];
    
  function arrays(a,b) {
      const array3 = [...a,...b]; 
      return array3
  }
    
  console.log (arrays(array1,array2))
  ```



- Clonar un objeto con Spread y modificar propiedad

  ```javascript
  let objeto1 = {nombre:'angel',apellido:'ronaldo'};
  let objeto2 = {...objeto1};
    
  objeto2.nombre = 'ana'; 
  console.log({objeto1, objeto2});
  ```



- Sumar numeros con funcion flecha

  ```javascript
  const suma = (...numeros) => {
      return numeros.reduce((total,num) => total + sum, 0);
  }
  ```



- Combinar objetos con Spread y funcion flecha

  ```javascript
  let array1 = {nombre:'alan',ciudad:'bogota',direccion:'san miguel'};
  let array2 = {nombre1:'angel',ciudad1:'bucaramanga'};
    
  let arrays = (a,b) => {
    const array3 = {...a,...b}
    return array3
  }
    
  console.log(arrays(array1,array2));
  ```

  

# DESTRUCTURACION

La "destructuración" en JavaScript es una característica que te permite extraer valores de arrays o propiedades de objetos en variables individuales de una manera más concisa.



### Destructuración de Arrays:

En la destructuración de arrays, puedes extraer valores de un array y asignarlos a variables individuales.



```javascript
// Array de datos
const numbers = [1, 2, 3, 4, 5];

// Destructuración de array
const [a, b, c, d, e] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5
```

También puedes ignorar ciertos valores utilizando comas sin asignarlos a variables:

```javascript
const numbers = [1, 2, 3, 4, 5];

const [a, , c] = numbers;

console.log(a); // Output: 1
console.log(c); // Output: 3
```



### Destructuración de Objetos:

En la destructuración de objetos, puedes extraer propiedades de un objeto y asignarlas a variables con los mismos nombres.

```javascript
// Objeto
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Destructuración de objeto
const { name, age, city } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(city); // Output: 'New York'
```

También puedes asignar valores predeterminados en caso de que una propiedad no exista:

```javascript
const person = {
  name: 'John',
  age: 30
};

const { name, age, city = 'New York' } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(city); // Output: 'New York' (valor predeterminado)
```

Otros conceptos

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

//Rest en la destructuracion para recoger el resto de las propiedades de un objeto
const{name, ...resto} = person;
console.log(resto);
console.log(name);

//Destructuracion en argumentos de funciones
function saludar({name,age,city}){
    console.log(`${name} tiene ${age} años y vive en ${city}.`);
}
saludar(person);
```



### Destructuración Anidada:

La destructuración también se puede utilizar en objetos y arrays anidados para acceder a valores más profundamente anidados.

```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const { name, age, address: { city, country } } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(city); // Output: 'New York'
console.log(country); // Output: 'USA'
```



### Destructuración Anidada:

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const{ name: Nombre, age:Edad, city: Ciudad} = person;

console.log(Nombre);
console.log(Edad);
console.log(Ciudad);
console.log(person.name + Edad);
```



# ASINCRONIA

Significa que el código puede continuar ejecutándose mientras se espera que ocurran ciertas operaciones, como solicitudes de red, lecturas de archivos, temporizadores, entre otros.



# CALLBACK

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que una operación asíncrona se haya completado o cuando ocurre un evento. Los callbacks son una forma común de manejar la asincronía en JavaScript, pero pueden conducir a lo que se conoce como "callback hell" cuando se anidan demasiado.

```javascript
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, functionCallback){
    let res = op1 + op2;
    functionCallback(res);
}

sumar(5,3,imprimir);
```



# PROMESAS

Es un codigo que tiene varios estados. Entonces, nostros lanzamos una peticion donde se ejecuta un codigo, en dado caso que la promesa se resuelva correctamente mandamos a llamar el caso ".then()" y en caso de que no se resuelva llamamos a ".catch()". Entonces es asi:

Mientras la promesa no haya terminado de ejecutar su codigo esta en "PENDING" que es estado independiente. Una vez termine de ejecutarse esta tiene dos caminos, el primer camino es ".then()" que es cuando la promesa se resolvio correstamente, y el otro camino es ".catch()" que es cuando la promesa tuvo algun error y es rechazado.  

```javascript
//Sintaxis basica para crear una promesa

let miPromesa = new Promise((resuelto, rechazado) => { 
    let expresion = true;
    
    if (expresion){
        	resuelto('Resolvio Correcto');
    }else rechazado('se produjo un error');
});

miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));
```

Una Promesa,  esta promesa toma una **función flecha (resuelto, rechazado) => { }""**  como argumento, que a su vez toma dos parámetros: `resuelto`  y `rechazado`. Estos parámetros son *funciones callback* que se utilizan para resolver o rechazar la promesa, respectivamente.                                                                 Dentro de la función, hay una expresión `if` que determina si la promesa se resolverá o se rechazará. En este caso, `expresion` es verdadera, por lo que la promesa se resuelve con el valor `'Resolvio Correcto'`. En caso contrario, se rechaza con el mensaje `'se produjo un error'`. 



#### Función SetTimeout y Promesas en JavaScript

```javascript
let promesa = new Promise((resolver) => {
    setTimeout( () => { resolver('saludos'), 3000});
});
```



###### SetTimeout

```javascript
javascriptCopy codeconsole.log('Inicio');

setTimeout(function() {
    console.log('Han pasado 2 segundos');
}, 2000);

console.log('Fin');
```

En este ejemplo, verás que "Inicio" se imprimirá primero, luego "Fin" y, después de 2 segundos, "Han pasado 2 segundos" aparecerá en la consola. Esto demuestra que `setTimeout()` permite que el resto del código se ejecute mientras espera que pase el tiempo especificado.



### ASYNC

Nos permite facilitar el uso de promesas. Indica que una función regresa una promesa

```javascript
async function miFuncionConPromesa(){
	return 'saludos con promesa y async'
}

miFuncionConPromesa().then(valor => console.log(valor));
```



### ASYNC Y AWAIT

```javascript
async function miFuncionConPromesaYAwait(){
	let miPromesa = new Promise( resolver => {
        resolver('Promesa con await')
    });
    
    console.log( await miPromesa );
}

miFuncionConPromesaYAwait();
```



#### 							

# DOM (Document Object Model)



Representación de los objetos que conforman la estructura de un documento en la web.

```html
<!DOCTYPE html>
<html>
    <head>
        <tittle>Ejemplo</tittle>
    </head>
    <body>
        <h1>JavaScript</h1>
        <p>Hola Mundo</p>
    </body>
</html>
```

El DOM representa a los elementos como nodos (elementos) y objetos con los cuales podemos trabajar en JavaScript.

#### Nodos

Los nodos del DOM son objetos que representan diferentes partes del documento, como elementos HTML, atributos, texto, comentarios, etc. Cada nodo en el DOM es un objeto con propiedades y métodos que permiten acceder y manipular el contenido y la estructura del documento HTML.

Hay varios tipos de nodos en el DOM, y algunos de los más comunes incluyen:

1. **Elementos**: Representan las etiquetas HTML en el documento, como `<div>`, `<p>`, `<a>`, etc.
2. **Atributos**: Representan los atributos de los elementos HTML, como `id`, `class`, `src`, etc.
3. **Texto**: Representa el contenido de texto dentro de un elemento HTML.
4. **Comentarios**: Representa los comentarios HTML en el documento.
5. **Documentos**: Representa todo el documento HTML y sirve como punto de entrada para acceder a otros nodos.

Los nodos del DOM están organizados en una estructura de árbol, donde cada nodo puede tener cero o más nodos hijos, y un nodo puede tener un solo nodo padre (excepto el nodo raíz).

#### Tipos de Nodos

- #####  Root Node (Nodo Raíz) -> Nodo ubicado en la parte superior del árbol. en HTML, es  < html >.

- Parent Node (Nodo padre) -> Nodo que contiene a otro nodo en la jerarquia del DOM, head .

- Child Node (Nodo hijo) -> Nodo contenido directamente dentro de otro nodo, head - title.

- Descendant Node (Nodo descendiente) -> Nodo contenido dentro de otro nodo en la jerarquia del DOM (directa o indirectamente), body, div - h1.  

- Sibling Nodes (Nodos hermanos) -> nodos ubicados en el mismo nivel de la jerarquia del DOM, head y body.



## Acceder al DOM HTML con JavaScript



Para poder trabajar el DOM HTML tenemos el objeto **"document",** asi que ese es el objeto que vamos a utilizar para poder acceder a los elementos de nuestro documento html.

```html
<!DOCTYPE html>
<html>
    <head>
        <tittle>Ejemplo</tittle>
    </head>
    <body>
        <h1 id='cabecero'>JavaScript</h1>
        <p id='hola'>Hola Mundo</p>
        
        <script>
        	let cabecero = document
        </script>
    </body>
</html>
```



Posteriormente tenemos los metodos getElementById(),  getElementsByClassName(), getElementsByTagName(), querySelector() y querySelectorAll().

```html
<!-- UTILIZAREMOS  getElementById() -->
<!DOCTYPE html>
<html>
    <head>
        <tittle>Ejemplo</tittle>
    </head>
    <body>
        <h1 id='cabecero'>JavaScript</h1>
        <p id='hola'>Hola Mundo</p>
        
        <script>
        	let cabecero = document.getElementById('cabecero'); //Nos regresa el objeto
        </script>
    </body>
</html>

<!-- UTILIZAREMOS  getElementByTagName(), ESTO ES RECUPERAR EL ELMENTO POR EL TIPO DE ELEMENTO HTML -->

<!DOCTYPE html>
<html>
    <head>
        <tittle>Ejemplo</tittle>
    </head>
    <body>
        <h1 id='cabecero'>JavaScript</h1>
        <p>Hola Mundo</p>
        <p>Hola Mundooo</p>
        <p>Hola Mundoooooo</p>
        
        <script>
        	let parrafos = document.getElementByTagName('p'); //En la ('p') especificamos que estamos buscando todos los elementos de tipo parrafo, y eso normalmente nos regresa objetos.
            
        </script>
    </body>
</html>

<!-- UTILIZAREMOS  getElementByClassName(), ESTO ES RECUPERAR EL ELMENTO POR EL TIPO DE CLASE -->
<!DOCTYPE html>
<html>
    <head>
        <tittle>Ejemplo</tittle>
        <style>
            .azul{
                color: blue;
            }
        </style>
    </head>
    <body>
        <h1 id='cabecero'>JavaScript</h1>
        <p class='azuul'>Hola Mundo</p>
        <p class='azul'>Hola Mundooo</p>
        <p class='azul'>Hola Mundoooooo</p>
        
        <script>
        	let parrafos = document.getElementByClassName('azul'); //En la ('p') especificamos que estamos buscando todos los elementos de tipo parrafo, y eso normalmente nos regresa objetos.
            
        </script>
    </body>
</html>

<!-- UTILIZAREMOS  querySelectorAll(), ESTO ES RECUPERAR EL ELMENTO POR EL TIPO DE CLASE Y TIPO DE ELEMENTO HTML -->
<!DOCTYPE html>
<html>
    <head>
        <tittle>Ejemplo</tittle>
        <style>
            .azul{
                color: blue;
            }
        </style>
    </head>
    <body>
        <h1 id='cabecero'>JavaScript</h1>
        <p class='azuul'>Hola Mundo</p>
        <p class='azul'>Hola Mundooo</p>
        <p class='azul'>Hola Mundoooooo</p>
        
        <script>
        	let parrafos = document.querySelectorAll('p.azul'); //En la ('p') especificamos que estamos buscando todos los elementos de tipo parrafo, y eso normalmente nos regresa objetos.
            
        </script>
    </body>
</html>
```



Para acceder al valor utilizamos la propiedad de .innerHTML

La propiedad innerHTML se utiliza en programación web, especialmente con JavaScript, para acceder o modificar el contenido HTML dentro de un elemento específico en una página web.

```html
<!DOCTYPE html>
<html>
    <head>
        <tittle>Ejemplo</tittle>
    </head>
    <body>
        <h1 id='cabecero'>JavaScript</h1>
        <p id='hola'>Hola Mundo</p>
        
        <script>
        	let cabecero = document.getElementById('cabecero').innerHTML; //Nos regresa el  valor	
            console.log(cabecero)
        </script>
    </body>
</html>
```



### MODIFICAR EL DOM HTML 

```javascript
cabecero.innerHTML = 'Nuevo valor del cabecero'
```





# CLASES 

Es una plantilla, se definen los atributos y métodos. A partir de esta creamos ojetos que son instancia de una clase.

```javascript
class Person{
    constructor(nombre, apellido){  //constructor
        this.nombre = nombre;
        this.apellido = apellido;
    } 
}

let array = new Person('Michelle','Riveros');
console.log(array);
```



##### Metodo get y set en clases

```javascript
class Person{
    constructor(nombre, apellido){  //constructor
        this.Nombre = nombre;
        this.Apellido = apellido;
    } 
    
    get nombre(){
    	return this.Nombre;
    }
    
    set nombre(nombre){
        this.Nombre = nombre;
    }
}

let array = new Person('Michelle','Riveros');
array.nombre = 'Maria';
console.log(array.nombre);
```



### 

















# 











































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

8. **getSeconds()**

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

