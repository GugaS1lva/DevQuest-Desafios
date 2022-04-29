const grupoMsg = document.querySelectorAll('article')


grupoMsg.forEach(function(grupoMsgSelecionada){
    grupoMsgSelecionada.addEventListener('click', function(){
       grupoMsgSelecionada.classList.add('ativo')
       console.log(grupoMsgSelecionada)
    })
})

/* NÃO FUNCIONA!
    grupoMsgSelecionada.classList.add('ativo'): Isso adiciona a classe 'ativo' na própria Tag Article. 
    Preciso que desça o nível, caia dentro da Div 'titulos', desça de novo, pegando o 'h2' e o 'a' e coloque a classe 'ativo' dentro deles. Depois, suba o nível e peque o Tag 'p' e coloque também a classe 'ativo'.
*/