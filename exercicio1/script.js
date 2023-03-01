/*

function ePar (num) {
    if(num % 2 === 0) {
        console.log('O número é par')
    } else { 
        console.log('O número é impar')
    }
 }

 ePar(5)

*/

 const ehPar = (numero) => {
    if (numero % 2 === 0) {
      console.log("o número é par")
    } else {
        console.log('O número é impar') 
    }
  }
  
  const meuNumero = prompt(`Qual o numero ?`)
  console.log(ehPar(meuNumero))
  