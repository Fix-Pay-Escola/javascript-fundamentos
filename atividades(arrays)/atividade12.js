const alunos = ['leo','isabel','lucas']
 const medias= [10,5,3]

 const reprovados =alunos.filter ((aluno,indice) => {
    return medias[indice] < 5;
 })

 console.log(`estes sao os alunos reprovados: ${reprovados}`)


 const aprovados =alunos.filter ((aluno,indice) => {
   return medias[indice] > 6;
 })
 console.log(`estes sao os alunos aprovados: ${aprovados}`)

 const recuperacao =alunos.filter ((aluno,indice) => {
   return medias[indice] === 5  ;
 })
 console.log(`estes sao os alunos que estao de recuperaçao: ${recuperacao}`)

 //autor: leonardo