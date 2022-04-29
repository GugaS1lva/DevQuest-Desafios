const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

// CONTADOR
let imgAtual = 0

setaAvancar.addEventListener('click', function(){
    if (imgAtual === imagens.length - 1){
        return
    }
    imgAtual++

    esconderImgAberta()
    mostrarImagem()
    mostrarEsconderSetas()
})
setaVoltar.addEventListener('click', function(){
    if (imgAtual === 0){
        return
    }
    imgAtual--

    esconderImgAberta()
    mostrarImagem()
    mostrarEsconderSetas()
})



function mostrarImagem() {
    imagens[imgAtual].classList.add('mostrar')
}

function esconderImgAberta(){
    const imgAberta = document.querySelector('.mostrar')
    imgAberta.classList.remove('mostrar')
}
function mostrarEsconderSetas(){
    const naoPrimeiraImg = imgAtual !== 0
    if (naoPrimeiraImg){
        setaVoltar.classList.remove('oculta')
    
    } else{
        setaVoltar.classList.add('oculta')
    }

    const chegouUltimaImg = imgAtual !== 0 && imgAtual === imagens.length - 1
    if (chegouUltimaImg){
        setaAvancar.classList.add('oculta')
    
    } else{
        setaAvancar.classList.remove('oculta')
    }
}