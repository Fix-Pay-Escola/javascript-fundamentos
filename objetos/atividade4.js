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
  
  cliente.enderecos.push({
    rua:"José cavalcante",
    numero: 1999,
    apartamento: true,
    complemento: "ap 199"
  })

  const apartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)

  console.log(apartamentos)

  //autor:Lucas