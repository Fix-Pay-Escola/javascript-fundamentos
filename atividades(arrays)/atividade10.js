let notas = [9, 9.5, 7, 9]

for (let i = 0, j = 0; i < notas.length; i++, j++) {
    if (notas[i] < 10 && notas[i] >= 0) {
        if ((notas[i] + 1) > 10) {
            notas[i] = 10

        } else {
            notas[i] += 1
        }
    } else if (notas[i] > 10) {
        console.log('uma nota acima de 10 foi colocada no plano de notas os pontos não serão colocados até a correção')
        break
    } else if (notas[i] < 0) {
        console.log("corrija o plano de notas o sistema notou uma nota negativa")
        break
    }
    if (j == notas.length) {
        console.log(notas)
    }
}
