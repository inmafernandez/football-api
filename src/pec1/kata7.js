var obtenerMarca = function() {
  console.log(this.marca);
};

var coche = {
  marca: 'Ford'
};

obtenerMarca.call(coche); // Ford

var marcaDelCoche = obtenerMarca.bind(coche);

marcaDelCoche(); // Ford

/*En lugar de tener un método en un objeto, como teníamos en el enunciado del ejercicio, tenemos una función con scope global que podremmos invocar. 
Tenemos que llamar a la función en el contexto coche, para eso escribimos en nombre de la función .call y entre paréntesis coche => obtenerMarca.call(coche). 
De esta manera la función this.marca va a hacer referencia a coche.marca. 
Por otro lado, utilizamos.bind para crear una nueva función que después podremos llamar, la diferencia es que con call, la llamada a la función es inmediata, 
mientras que con bind creas una nueva función que puedes llamar después como es nuestro caso con marcaDelCoche() */
