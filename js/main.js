//Ejercicio 6|7
/*
let num1 = parseInt(prompt("Dame el primer valor:"))
let num2 = parseInt(prompt("Dame el segundo valor:"))
let num3 = parseInt(prompt("Dame el tercer valor:"))
if(num1 > num2 && num1 > num3){
    document.write("num1 es el mayor de los tres")
}else if(num2 > num1 && num2 > num3){
    document.write("num2 es el mayor de los tres")
}else{
    document.write("num3 es el mayor de los tres")
}
*/


//Ejercicio 8
/*
let numero = prompt("Escriba un numero")
if((numero % 2) == 0){
    alert("Es divisible por dos")
}else{
    alert("No es divisible por dos")
}
*/

//Ejercicio 9
/*
let frase = prompt("Escriba una frase")
let vocalesFrase = frase.length
let i
for (let i = 0; i < vocalesFrase; i++) {
    if(frase.charAt(i,1) === "a" || frase.charAt(i,1) === "e" || frase.charAt(i,1) === "i" || frase.charAt(i,1) === "o" || frase.charAt(i,1) === "u"){
        document.write(frase.charAt(i,1))    
    }
}
*/

//Ejercicio 10
/*
let n1 = prompt("Escriba un numero")
if(n1 % 2 == 0 || n1 % 3 == 0 || n1 % 5 == 0 || n1 % 7 == 0){
    alert("Es divisible por 2, 3, 5 ,7")
}else{
    alert("No es divisible por 2, 3, 5, 7")
}
*/

//Ejercicio 11
/*
let number = prompt("Escriba un numero")
if(number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0){
    if(number % 2 == 0){
        alert("Es divisible por 2")
    }
    if(number % 3 == 0){
        alert("Es divisible por 3")
    }
    if(number % 5 == 0){
        alert("Es divisible por 5")
    }
    if(number % 7 == 0){
        alert("Es divisible por 7")
    }
}else{
    alert("No es divisible ni por 2, 3, 5, 7")
}
*/


//Ejercicios - Bucles

//Ejercicio 1
/* let edad = prompt("Cual es su edad?")
if(edad >= 18){
    alert("Usted ya puede conducir")
}else{
    alert("Edad insuficiente para conducir")
} */

//Ejercicio 2
/*  let nota = prompt("Cual es su nota?")
    if(nota > 0 && nota <= 10){
        if(nota < 3){
            alert("Muy deficiente")
        }
        else if(nota < 5){
            alert("Insuficiente")
        }
        else if(nota < 6){
                alert("Suficiente")
        }
        else if(nota == 7){
            alert("Bien")
        }
        else if(nota <= 9){
            alert("Notable")
        }
        else if(nota = 10){
            alert("Sobresaliente")
        }
    }else if (nota >= 11){
        alert("Numero erroneo")
    }else{
        alert("Ingrese un numero valido")
    } 
 */

//Ejercicio 3
/* let resultado = ""
do{
    let cadena = prompt("Escriba una cadena de texto")
    if(resultado == ""){
        resultado = resultado + cadena
    }else{
        resultado = resultado + "-" + cadena
    }
}while(confirm("Desea continuar?")){
    document.write(resultado)
} */

//Ejercicio 4
/* let resNumero = 0
do{
    let numero = +prompt("Escriba un numero")
    if(Number(numero) == numero){
        resNumero = resNumero + numero
    }else{
        if(numero != undefined){
            alert("No es un numero")
        }
    }
}while(confirm("Desea seguir sumando?")){
    document.write(resNumero)
} */

//Ejercicio 5
/*
let restoDiv = 0
let letra = ""
do{
    let numDni= +prompt("Ingrese su dni")
    if(numDni >= 0 && numDni <= 99999999){
        restoDiv = numDni % 23
    
    switch(restoDiv){
        case 0:
            letra = "T" 
        break
        case 1:
            letra = "R"
        break    
        case 2:
            letra = "W" 
        break
        case 3:
            letra = "A" 
        break
        case 4:
            letra = "G" 
        break
        case 5:
            letra = "M" 
        break
        case 6:
            letra = "Y" 
        break
        case 7:
            letra = "F" 
        break
        case 8:
            letra = "P" 
        break
        case 9:
            letra = "D" 
        break
        case 10:
            letra = "X" 
        break
        case 11:
            letra = "B" 
        break
        case 12:
            letra = "N" 
        break
        case 13:
            letra = "J" 
        break
        case 14:
            letra = "Z" 
        break
        case 15:
            letra = "S" 
        break
        case 16:
            letra = "Q" 
        break
        case 17:
            letra = "V" 
        break
        case 18:
            letra = "H" 
        break
        case 19:
            letra = "L" 
        break
        case 20:
            letra = "C" 
        break
        case 21:
            letra = "K" 
        break
        case 22:
            letra = "E" 
        break
        default:
            alert("Numero erroneo")
        }
        alert("Numero: " + numDni + ", Letra: " + letra)
    }else{
        if(numDni != undefined){
            alert("No es un numero")
        }
    }
}while(confirm("Desea continuar?")){
}
*/

//Ejercicio 6
/*
let i 
let recorrido
for (let i = 1; i <= 30; i++) {
    for (let recorrido = 0; recorrido < i; recorrido++) {
        document.write(i)
    }
    document.write("<br>")
}
*/

//Ejercicio 7
/*
let numRepeticiones = +prompt("Escriba el numero de repeticiones que desee, no mayor a 50")
if(numRepeticiones > 0 && numRepeticiones <= 50){
    let rep
    let i
    for (i = numRepeticiones; i >= 1; i--){
       for (rep = i; rep >= 1; rep--){
        document.write(i)
       }
       document.write("<br>")
    }
}else{
    alert("No ha introducido un numero valido")
}
*/

//Ejercicio 8
/*
let cantidadNum = +prompt("Introduce el numero de repeticiones que desee, no mayor a 50")
if(cantidadNum > 0 && cantidadNum <= 50){
    for (let i = 0; i <= cantidadNum; i++){
        for (let rep = 1; rep <= i; rep++) {
            document.write(rep)
        }
        document.write("<br>")
    }
}else{
    alert("No introdujo un numero valido")
}
*/

//Ejercicio 9
/*
document.write("<hr>")
let i
let maxNum = 500
let repeticiones = 0
for (i = 1; i <= maxNum; i++) {
    document.write(i)
    if(i % 4 == 0){
        document.write(" (Es multiplo de 4)")
    }
    if(i % 9 == 0){
        document.write(" (Es multiplo de 9)")
    }
    document.write("<br>")
    if(i % 5 == 0){
        document.write("<hr>")
    }
}
*/

//Ejercicio 10
/*
let filas = +prompt("Introduce un numero de filas")
let columnas = +prompt("Introduce un numero de columnas")
let res = filas * columnas
document.write("<table border>")
for (let i = 0; i < filas; i++) {
    document.write("<tr>")
    for (let j = 0; j < columnas; j++) {
        document.write("<td>")
        document.write(res)
        res--
        document.write("<td>")
    }     
    document.write("<tr>")
}
document.write("</table>")
*/

//Ejercicio 11
/*
let nombre1 = prompt("Introduce el nombre numero 1")
let edad1 = +prompt("Introduce la edad numero 1")

let nombre2 = prompt("Introduce el nombre numero 2")
let edad2 = +prompt("Introduce la edad numero 2")

let nombre3 = prompt("Introduce el nombre numero 3")
let edad3 = +prompt("Introduce la edad numero 3")

let max = Math.max(edad1, edad2, edad3)
if(max == edad1){
    document.write("El mayor de los tres es: " + nombre1)
}
if(max == edad2){
    document.write("El mayor de los tres es: " + nombre2)
}
if(max == edad3){
    document.write("El mayor de los tres es: " + nombre3)
}
*/

//Ejercicio 12
/*
let num = Math.floor((Math.random()*99))
document.write(num)
*/

//Ejercicio 13
/* 
let texto = prompt("Escriba un texto").toLocaleUpperCase()
document.write(texto)
 */

//Ejercicio 14
/* 
let cadena = prompt("Escriba una cadena")
let numChar = cadena.length
let caracter
for (let i = 0; i < numChar; i++) {
        caracter = cadena.charAt(i)
    if(i ==  numChar - 1){
        document.write(caracter)
    }else{
        document.write(caracter + "-")
    }
}
 */

//Ejercicio 15
/* 
let cadena = prompt("Escriba una cadena").toLocaleLowerCase()
let numChar = cadena.length
let caracter
let contador = 0
for (let i = 0; i < numChar; i++) {
    caracter = cadena.charAt(i)
    if((caracter == "a") || (caracter == "e") || (caracter == "i") || (caracter == "o") || (caracter == "u")){
        contador = contador + 1
    }
}
document.write("Numero de vocales: " + contador)
 */

//Ejercicio 16
/* 
let cadena = prompt("Escriba una cadena")
let numChar = cadena.length
let caracter
let salida = ""
for (let j = 0; j < numChar; j++) {
    caracter = cadena.charAt(j)
    salida = caracter + salida
}
document.write(salida)
 */

//Ejercicio 17
/* 
let vocales = ["a", "e", "i", "o", "u",]
let texto = prompt("Introduce un texto").toLocaleLowerCase()
let posicion = 0
let parar = false
for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if(vocales[j] == texto.charAt(i)){
            posicion = i
            parar = true
            break
        }
    }
    if(parar){
        break
    }
}
document.write("La primera vocal esta en la posicion: " + posicion)
 */