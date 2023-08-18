const cliente = {
    nome: 'Zé Carlos',
    idade: 42,
    endereco: 'Av. Coronel Matos Dourado',
    telefone: ['+55 (85) 99330-3033', '+55 (85) 98224-7712'],
    saldo: 5000,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.error(`Saldo insuficiente, trabalhe mais! Falta ${(this.saldo - valor) * (-1)}`)
        } else {
            this.saldo -= valor
            console.log(`Compra aprovada. Novo saldo: ${this.saldo}`)
        }

    }
}
cliente.efetuaPagamento(6000)
//autora:isabel
