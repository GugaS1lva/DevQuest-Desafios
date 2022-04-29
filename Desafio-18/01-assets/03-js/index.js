const inputsAll = document.querySelectorAll('.inputs') //Array dos inputs
const msgAlerta = document.querySelectorAll('.msgAlert') //Array dos parágrafos
const enviar = document.getElementById('enviar')

enviar.addEventListener('click', function(){
    inputsAll.forEach(function(input){
        if (input.value == ''){
            input.classList.remove('campo-preenchido')
            input.classList.add('campo-obrigatorio')
            input.nextElementSibling.classList.remove('msgAlertOculto')

        } else{
            input.classList.remove('campo-obrigatorio')
            input.classList.add('campo-preenchido')

        }
    })
})


// Lógida do Script:
// Criar uma classe pra todos os inputs. [OK]
// A prtir disso, criar um único array para eles [OK]
// Percorrrer todo esse array verificando qual tá preenchido e qual não tá [OK]
//quando preenchido, adiciona uma classe de borda verde [OK]
//quando não preenchido, adiciona uma classe de borda vermelha + texto: 'campo obrigatório *' [OK]