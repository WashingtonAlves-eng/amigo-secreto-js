let listaDeAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value

    if(amigo==''){
        alert('Por favor, insira um nome!');
    }else{
        listaDeAmigos.push(amigo);
        console.log(listaDeAmigos);
    }
}