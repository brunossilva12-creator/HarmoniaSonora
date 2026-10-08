let listaDeTeclas = document.querySelectorAll(".tecla");
let imagem = document.querySelector(".imagens");
let somAtual = null;

const listaImagens = [
    "./assets/images/KarmaCalled.webp",
    "./assets/images/Cesus.jpg",
     "./assets/images/Harken.jpg",
    "./assets/images/artful-die-of-death.gif",
     "./assets/images/freefire.jpg",
    "./assets/images/Error.png"
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