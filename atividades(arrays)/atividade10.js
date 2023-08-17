let notas = [11, 0, 0, 0]

const notas_formatadas = notas.map((nota) => {
    if ((nota + 1) > 10){
        return nota = 10
    }
    else if(nota < 10 && nota >= 0){
        return nota +=1
    }
    else{
        return console.error('deu errado')
    }
})

console.log(notas_formatadas)
//autor: lucas
