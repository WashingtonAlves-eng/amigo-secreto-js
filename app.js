let listaDeAmigos = []; //lista de amigos digitados

function adicionarAmigo(){
    let amigo = document.querySelector('input').value //pega o nome digitado e armazena na variavel

    if(amigo==''){
        alert('Por favor, insira um nome!');
    }else{
        listaDeAmigos.push(amigo); //adciona o amigo a Lista De Amigos
        console.log(listaDeAmigos); 
        limparCampo();
        atualizarListaAmigos(); // Atualiza a lista exibida na tela
    }
}

function limparCampo(){ //limpa o campo de entrada
    let amigo = document.querySelector('input');
    amigo.value = ''
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos'); // Obtém o elemento da lista no HTML e adiciona a variavel
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos nomes
    
    // Percorre todos os amigos adicionados e cria um item <li> para cada um
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = listaDeAmigos[i]; // Define o texto do item como o nome do amigo
        lista.appendChild(li); // Adiciona o item na lista
    }
}

function sortearAmigo(){
    if (listaDeAmigos.length==0){
        alert('Adcione pelo menos um amigo antes de sortear!');
        return;
    }
    let indice = Math.floor(Math.random() * listaDeAmigos.length); //sorteia o indice da Lista De Amigos,
    let sorteado = listaDeAmigos[indice]; //Obtém o nome da lista de acordo com o indice
    /*console.log(`Indice = ${indice}`);
    console.log(`sorteado = ${sorteado}`);*/
    let resultado = document.getElementById('resultado'); //Obtém o elemento resultado do HTML
    document.getElementById('listaAmigos').innerHTML = ''; //limpa a Lista de Amigos da interface
    resultado.innerHTML = `O amigo sortedo é: ${sorteado}`; //Insere a mensagem a ser apresentada no elemento resultado
}