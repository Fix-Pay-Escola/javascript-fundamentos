//funções
function maioridade(idade){
    if(idade < 18){
        return False
    }
    if(idade >= 18){
        return True
    }
}
console.log("checando a idade do cliente")


if(maioridade(16)){

    console.log("cliente com maioridade compra de bebidas alcoolicas autorizada")
}
else{
    console.log("cliente menor de idade compra de bebidas alcoolicas negada")
}