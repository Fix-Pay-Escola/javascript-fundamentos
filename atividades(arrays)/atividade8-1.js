const notas = [10,6.5,8,7.5]
let soma_das_notas = 0

function soma (nota){
    soma_das_notas += nota
}

notas.forEach(soma)
let media = soma_das_notas/ notas.length
console.log(media)
//autor: lucas