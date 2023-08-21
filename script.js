window.addEventListener("resize", dimensao);

let altura = window.innerHeight;
let largura = window.innerWidth; 
let tempo = 15;
let vidas = 1;
let tempoCriaBarata = 1500;
let valorNivel = window.location.search;
valorNivel = valorNivel.replace('?', '');

if(valorNivel === 'normal') {
    tempoCriaBarata = 1500
}else if (valorNivel === 'dificil') {
    tempoCriaBarata = 1000
}else if (valorNivel === 'pro') {
    tempoCriaBarata = 750
}

function dimensao() {
    altura = window.innerHeight;
    largura = window.innerWidth; 
}
//cronometro

let cronometro = setInterval (function () {

	tempo -= 1

	if (tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaBarata)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

setInterval(criaBarata, tempoCriaBarata);
function criaBarata() {
    //REMOVE Barata (caso exista)
    if(document.getElementById('barata')){
        document.getElementById('barata').remove()
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    const barata = document.createElement('img');
    barata.style.position = "absolute"
    barata.src = "imagens/barata1.svg"
    barata.classList.add(barataTamanho())
    barata.classList.add(barataRotacao())
    barata.style.top = posicaoY + 'px';
    barata.style.left = posicaoX + 'px';
    barata.id = 'barata'
    document.body.appendChild(barata) 
    console.log(barata)
    console.log(altura, largura)

    barata.addEventListener('click', clicou)
    function clicou(e) {
        barata.remove()
    }
}

function barataRotacao() {
    rotacao = Math.floor(Math.random() * 2)
    switch(rotacao) {
        case 0:
            return 'rotacaoA'
        case 1:
            return 'rotacaoB'
    }
}

function barataTamanho() {
    tamanho = Math.floor(Math.random() * 3)
    switch(tamanho) {
        case 0:
            return 'tamanho1'
        case 1:
            return 'tamanho2'
        case 2:
            return 'tamanho3'
    }
}