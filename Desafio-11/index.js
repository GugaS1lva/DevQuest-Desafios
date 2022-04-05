let escolha = window.confirm(`Seja bem vindo(a),
aventureiro(a)! Gostaria de pagar 50 PO (peças de ouro D&D) para passar a noite na nossa hospedagem?`)

if (escolha == true){
    window.alert(`Ótimo! Nós temos os melhores quartos de toda a região!`)

} else if (escolha == false){
    window.alert(`Que pena! Quem sabe em uma outra ocasião. Estarei por aqui se precisar, volte sempre!`)

} else{
    window.alert('[ERRO] Você bugou a parada de alguma forma.')
}