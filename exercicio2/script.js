
function dadosPessoais (idade, ensinoMedio, fazFaculdade) {

    if (idade >= 18 && ensinoMedio && !fazFaculdade){
        console.log(`A afirmação é verdadeira !`)
    } else {
        console.log(`A afirmação NÃO é verdadeira !`)
    } 
} 

dadosPessoais(27, true, false)