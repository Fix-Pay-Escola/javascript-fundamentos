//funções
function maioridade(idade){
    if(idade > 18){
        return maioridade = true
    }
    else{
        return maioridade = false
    }
}
function checando_maioridade(){
    if (maioridade === true){
        return console.log("venda autorizada ")
    }
    else{
        return console.log("venda não autorizada")
    }
}
console.log("checando a idade do cliente")  

let  idade = 90;
maioridade(idade);
checando_maioridade()