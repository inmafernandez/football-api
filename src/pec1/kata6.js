function test() {
  console.log(a);
  console.log(foo());

  var a = 1; /* Variable de scope local: está definida dentro de la función test*/
  function foo() {
    /* Closure: es una función dentro de otra función y está libre de varibles*/
    return 2;
  }
}

test();

/* Al ejecutar test(), la consola muestra: 
> undefined
> 2
La función test imprime la variable "a" (que no está definida) y el resultado de la función foo que es 2.
El resultado de console.log(a) es undefined porque la varible "a" aunque está definida dentro de la función test, 
está definida después de imprimila, es por esto que no es accesible  */

function test() {
  console.log(a); /* La función test tiene que imprimir una varible "a" que no está definida*/
  console.log(foo()); /* La función test tiene que imprimir el resultado de la función foo*/

  var a = 1; /* a=1*/
  function foo() {
    /* La función foo tiene como resultado 2*/
    return 2;
  }
}

test();

/* Si analizamos el código paso a paso:
  1° La función test busca el valor de la variable "a", pero al no estar definida antes del console.log o de manera global, no la encuentra. El resultado es que "a" es undefind.
  2° La función test carga el resultado de la la función foo que es 2
  3° Por último, la variable "a" tiene valor 1, pero la función termina aquí, es decir, ese valor no será imprimido en la consola porque ha sido llamado anteriomente cuando era desconocido. 
  */

/* Si quisieramos imprimir el valor 1, tendríamos las siguientes opciones: 
   1° Definir la varible "a" de manera global 
    var a = 1; 
    function test() {
    console.log(a); 
    console.log(foo()); 
        function foo() { 
        return 2;
        }
    }
    test();

   2° Definir "a" como local pero antes de realizar console.log (a)
   function test() {
        var a = 1; 
        console.log(a); 
        console.log(foo()); 
        function foo() { 
            return 2;
        }
    }
    test();

    3° Imprimir el resultado después de la función foo pero dentro de la función test
    function test() {
        console.log(foo()); 
  
        var a = 1; 
        function foo() { 
            return 2;
        }
    console.log(a);
    }
    test();

  */
