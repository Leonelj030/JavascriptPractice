//Ejercicio 1
/* 
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let mesesLenght = meses.length
let text = "<ul>"
for (let i = 0; i < mesesLenght; i++) {
    text += "<li>" + meses[i] + "</li>"
}
text += "</ul>"
document.write(text)
 */

//Ejercicio 2
/* 
let myArray = new Array()
for (let i = 0; i < 20; i++) {
    let ciudades = prompt("Escriba las ciudades")
    myArray.push(ciudades)
    if(ciudades == null){
      myArray.pop()
      break
    }
}
myArray.push("paris")
myArray.splice(1, 1, "Barcelona")
document.write(`Las ciudades ingresadas son: ${myArray}`)
document.write(` <br> La logitud del array es: ${myArray.length}`)
document.write(` <br> La primera posicion es: ${myArray[0]}`)
document.write(` <br> La tercera posicion es: ${myArray[2]}`)
document.write(` <br> La ultima posicion es: ${myArray[myArray.length - 1]}`)
document.write(` <br> El elemento en la posicion dos es: ${myArray[1]}`)
 */

//Ejercicio 3
/* 
let arrayBox = new Array()
for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random()*6) + 1
    let dado2 = Math.floor(Math.random()*6) + 1
    console.log(dado1)
    console.log(dado2)
    let resultado = dado1 + dado2
    arrayBox = resultado
    document.write(arrayBox + "<br>")
}
 */





