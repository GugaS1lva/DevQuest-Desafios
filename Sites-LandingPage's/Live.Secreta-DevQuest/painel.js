// alert('FRESCO')

/*
    quando clicar na seta pra avançar, temos que esconder todas as imagens e mostrar a próxima imagem.

        A imagem atual começa em 0 - diz respeito ao primeiro elemento do código.
        Assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem.

        Esconder todas as imagens
            Pegar todas as imagens usando o DOM e remover a classe mostrar
        
        Mostrar a próxima imagem
            Pegar todas as imagens, descobrir qual é a próxima e colocar a classe 'mostrar' nela.
*/ 

const imagens = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}
function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}
/*
    Quando clicar na seta pra avançar, temos que esconder todas as imagens e mostrar a próxima imagem.
*/
setaAvancar.addEventListener('click', function() {

    // Testa se o contador da imagem é igual ao total de imagens
    const totalDeImagens = imagensPainel.lenght - 1;
    if(imagemAtual === totalDeImagens){
        return;
    }

    /*
        A imagem atual começa em 0 - diz respeito ao primeiro elemento do código.
        Assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem.
    */
    imagemAtual++;

    esconderImagens();
    /*
        Esconder todas as imagens
            Pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*
        Mostrar a próxima imagem
            Pegar todas as imagens, descobrir qual é a próxima e colocar a classe 'mostrar' nela.
    */
    mostrarImagem();
});

/*
    Quando clicar na seta pra voltar, temos que esconder todas as imagens e mostrar a imagem anterior.
*/
setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 0){
        return;
    }
    imagemAtual--;

    /*
        Esconder todas as imagens
        Pegar todas as imagens usando o DOM e remover a classe mostrar
    */
    
    esconderImagens();

    /*
        Mostrar a imagem anterior.
            Pegar todas as imagens, descobrir qual é a anterior e colocar a classe 'mostrar' nela.
    */
    mostrarImagem();
});

