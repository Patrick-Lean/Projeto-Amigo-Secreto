//Lista contendo os amigos
let listaAmigos=[];

function adicionar(){
    //recuperar o nome do amigo digitado
    let nomeDoAmigo = document.getElementById('nome-amigo').value;
    //Adicionar na lista o amigo
    listaAmigos.push(' ' + `${nomeDoAmigo}`);
    //Recuperar o local para por a lista de amigos
    let listaAmigosHTML = document.getElementById('lista-amigos');
    //Por a lista de amigos no local correto
    listaAmigosHTML.textContent = `${listaAmigos}`;
    
}

function sortear(){
    
}