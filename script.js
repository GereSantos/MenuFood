let showMenu = function () {
    let Order = window.prompt('Cardapio: \n'
        + ' 1 - Salgados \n'
        + ' 2 - Doces \n'
        + ' 3 - Agridoces \n ')

    switch (Order) {
        case '1':
            Salty()
            break;
        case '2':
            Sweet()
            break;
        case '3':
            Bittersweet()
            break;
        default:
            alert('Fora do escopo!')
            showMenu()
    }

}

function Sweet() {
    let chosen = window.prompt(' 1 - Torta de Morango \n' +
        ' 2 - Torta de Limão \n' +
        ' 3 - Pudim \n ' +
        ' 4 - Goiabada')
        CompleteOrder()
}

function Salty() {
    let chosen = window.prompt(' 1 - Torta de Frango \n' +
        ' 2 - Torta de Sardinha \n' +
        ' 3 - Empada de Frango \n' +
        ' 4 - Mini - Empada \n')
        CompleteOrder()
}

function Bittersweet() {
    let chosen = window.prompt(' 1 - Salmão com crosta crocante e risoto agridoce \n' +
        ' 2 - Salada de conchiglioni com camarão e manga \n' +
        ' 3 - Salpicão defumado agridoce \n' +
        ' 4 - Queijo coalho grelhado com molho de mel \n')
        CompleteOrder()
}


function CompleteOrder() {
    let name = window.prompt('Seu pedido foi anotado. \n' +
        'Poderia por favor nos informar seu nome para prosseguirmos? \n')
    let email = window.prompt('Poderia nos informar seu email, para notificarmos via email e te passarmos a Nota Fiscal do pedido? ')
    alert('Certo, ' + name + ', seu pedido foi anotado e sua Nota Fiscal será entregue fisicamente e a digital enviada no seguinte email ' + email + " .")
}
showMenu()