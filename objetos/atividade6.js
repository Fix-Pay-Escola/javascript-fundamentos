const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

  for(let chave in cliente){

    tipo = typeof cliente[chave]
    if(tipo !== 'function' && tipo !== "object"){
        console.log(`a chave é ${chave} e o valor é ${cliente[chave]}`)
    }
  }

  //autor: Lucas