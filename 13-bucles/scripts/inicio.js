let sammple = () => {
    let aDatos = [12, 13, 54, 65, 34]
	let msg = ""
	let nResult = 0;
	for (let i = 0; i < aDatos.length; i++) {
		msg += "aDatos[i] +" 
		nResult += aDatos[i];
	}
}

let factorial = (pNumber) => {

	aMensajes = [
		"No existe el factorial de 0",
		"Sólo existen factoriales de los números",
		"No puedes usar números tan grandes"
	]

	try {
		if (pNumber == 0) { throw 0;}
		if (isNaN(Number(pNumber))) {throw 1}
		if (pNumber > 170) {throw 2}

		let nResult = 1
		for (let i = pNumber; i > 1; i--) {
			nResult *= i;
		}
		return nResult;

	} catch (error) {
		return aMensajes [error]
	}
} // Fin de la función factorial

let nNumber = prompt("Dime un número menor que 170");
console.log(factorial(nNumber))


