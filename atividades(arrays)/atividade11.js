/*const time = ['illaoi', 'xin zhao', 'lissandra', 'xayah', 'rell']
const kda = [4.1, 9.2, 15.3, 3.5, 14.0]

const fragPositivo = time.filter((time ,indice) => {
    return kda[indice] > 10.0;
})
console.log (fragPositivo)*/


const alunos = ['felicia', 'luiza', 'moises', 'vagner']
const medias = [9, 6.5, 3, 10]

const aprovados = alunos.filter((aluno, indice) => {
    return medias[indice] > 6;
})

console.log(aprovados)
//autora: isabel