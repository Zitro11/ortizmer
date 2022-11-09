const cuadrado = (valor) => { return valor * valor};

const pasarMayusculas = (cadena) => { return cadena.toUpperCase()};

//console.log (module);

//console.log (cuadrado(2));

exports.cuadrado = cuadrado;

exports.pasarMayusculas = pasarMayusculas;