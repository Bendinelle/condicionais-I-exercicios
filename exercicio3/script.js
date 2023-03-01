
/*
const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase();

function verificarNacionalidade() {
   
    
    if (nacionalidade === "brasileira" || 'brasileiro'|| `brasil`|| `br`) {
      console.log("Sua nacionalidade é brasileira.");
    } else if (nacionalidade === "argentina") {
      console.log("Sua nacionalidade é argentina.");
    } else if (nacionalidade === "uruguaia") {
      console.log("Sua nacionalidade é uruguaia.");
    } else if (nacionalidade === "chilena") {br
      console.log("Sua nacionalidade é chilena.");
    } else if (nacionalidade === "colombiana") {
      console.log("Sua nacionalidade é colombiana.");
    } else {
      console.log("Nacionalidade não encontrada.");
    }
  }

console.log(verificarNacionalidade())

*/

const nacionalidade = prompt("Digite a sua nacionalidade")
  
  function verificarNacionalidade(nac){
    if(nac.toLowerCase() === "brasileira" || nac.toLowerCase() === "argentina" || nac.toLowerCase() === "uruguaia" || nac.toLowerCase() === "chilena" || nac.toLowerCase() === "colombiana") {
      console.log(`A sua nacionalidade é: ${nac}`)
    } else {
      console.log("não encontrei a sua nacionalidade")
    }
  }