let amigos = [];

function adicionar() {
    //Recuperei o que foi digitado no campus nome-amigo
    let amigo = document.getElementById('nome-amigo');
    //Recuperei onde irei colocar a lista de amigos
    let lista = document.getElementById('lista-amigos');
    if (amigo.value == '') {
        alert('Digite um nome para o sorteio')
    } else {
        //Testa se a pessoa ja está na lista
        if (amigos.includes(amigo.value)) {
            alert('A pessoa já foi adicionada, tente novamente');
        } else {
            //Adicionar no array
            amigos.push(amigo.value);
            if (lista.textContent == '') {
                lista.textContent = amigo.value;
            } else {
                lista.textContent = lista.textContent + ', ' + amigo.value;
            }
        }
    }
    amigo.value = '';

}

function sortear() {
    //Adiciona uma quantidade minima de pessoas para ocorrer o sorteio
    if (amigos.length < 4) {
        alert('A quantidade minima para o sorteio é 4');
    } else {
        embaralha(amigos);
        let listaSorteio = document.getElementById('lista-sorteio');
        for (let i = 0; i < amigos.length; i++) {

            if (i == amigos.length - 1) {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
            } else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
            }
        }

    }

}

//Função que embralha uma lista
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    //Recuperei o que foi digitado no campus nome-amigo
    let amigo = document.getElementById('nome-amigo');
    //Recuperei onde irei colocar a lista de amigos
    let lista = document.getElementById('lista-amigos');
    //Recuperei a lista de sorteio que aparece no HTML
    let listaSorteio = document.getElementById('lista-sorteio');
    amigo.value = '';
    lista.textContent = '';
    amigos.length = 0;
    listaSorteio.innerHTML = '';
}