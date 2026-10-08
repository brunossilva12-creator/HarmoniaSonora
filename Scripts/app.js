let listaDeTeclas = document.querySelectorAll(".tecla");
let imagem = document.querySelector(".imagens");
let somAtual = null;

const listaImagens = [
    "./assets/images/Caramba.jpg",
    "./assets/images/Alo_Patricia.jpg",
     "./assets/images/Patrick-star-gun.gif",
    "./assets/images/ai-que.gif",
     "./assets/images/lula-meme.jpg",
    "./assets/images/Windows_Xp.png"
]
console.table(listaImagens)

function tocarSom(idElementoSom){
    const novoSom = document.querySelector(idElementoSom);

    if(somAtual && somAtual !== novoSom){
        somAtual.pause()
        somAtual.currentTime = 0
    }

    novoSom.play();
    somAtual = novoSom;
}


listaDeTeclas.forEach((tecla, indice) => {
    let som = tecla.classList[1];
    let audio = `#som-${som}`;
    listaDeTeclas[indice].onclick = function () {
        tocarSom(audio);
        imagem.src = listaImagens[indice];
    }

    tecla.onkeydown = function(event){
        if(event.code === "Enter" || event.code ==="Space" || event.code === "NumpadEnter"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
});