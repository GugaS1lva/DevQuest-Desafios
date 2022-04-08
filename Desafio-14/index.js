const res = document.getElementById('res')

function somar(){
    const num1 = Number(prompt('Informe o PRIMEIRO VALOR:'))
    const num2 = Number(prompt('Informe o SEGUNDO VALOR:'))
    res.innerHTML += `A equação: ${num1} + ${num2} = ${num1 + num2}<br>`
}
function subtrair(){
    const num1 = Number(prompt('Informe o PRIMEIRO VALOR:'))
    const num2 = Number(prompt('Informe o SEGUNDO VALOR:'))
    res.innerHTML += `A equação: ${num1} - ${num2} = ${num1 - num2}<br>`
}
function multiplicar(){
    const num1 = Number(prompt('Informe o PRIMEIRO VALOR:'))
    const num2 = Number(prompt('Informe o SEGUNDO VALOR:'))
    res.innerHTML += `A equação: ${num1} * ${num2} = ${num1 * num2}<br>`
}
function dividir(){
    const num1 = Number(prompt('Informe o PRIMEIRO VALOR:'))
    const num2 = Number(prompt('Informe o SEGUNDO VALOR:'))
    res.innerHTML += `A equação: ${num1} / ${num2} = ${num1 / num2}<br>`
}

function limpar(){
    res.innerHTML = ''
}