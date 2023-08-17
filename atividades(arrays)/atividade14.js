const notasSala1 = [1,5,7,4,9]
const notasSala2 = [9,5,3,6,8]
const notasSala3 = [2,5,8,10,3]

function calcularMedia(media123) {
    const somaDasNotas = media123.reduce((acc, nota) => {
        return (acc + nota);
    0});
const media = somaDasNotas / media123.length

return media;

}
console.log(`a média da sala um é ${calcularMedia(notasSala1)}`)
console.log(`a média da sala dois é ${calcularMedia(notasSala2)}`)
console.log(`a média da sala três é ${calcularMedia(notasSala3)}`)
//autora: isabel