//IF-ELSE
//TRUE-FALSE
//autor: Lucas
let base = 1
let altura = 0
let area

if(base === 0 || altura === 0){
    console.log("quadrado inexistente")
}else{
    area = base * altura
    if(area > 10){
        console.log(`a area desse quadrado é ${area}, ou seja, maior que 10`)
    }else{
        console.log(`a area desse quadrado é ${area}, ou seja, menor que 10`)
    }
}
