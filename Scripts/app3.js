let listaDeTeclas = document.querySelectorAll(".tecla");
let imagem = document.querySelector(".imagens");
let somAtual = null;

const listaImagens = [
    "./assets/images/Harry.jpg",
    "./assets/images/Galinha_Grito.jpg",
     "./assets/images/What-the-boom.gif",
    "./assets/images/indian.jpg",
     "./assets/images/Fah.jpg",
    "./assets/images/Plankton.jpg"
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