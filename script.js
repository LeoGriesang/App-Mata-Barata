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
            document.querySelector('#vidas').innerText = vidas;
            vidas++;
        }
    }

    const barata = document.createElement('img');
    barata.style.position = "absolute"
    barata.src = "imagens/barata1.png"
    barata.style.height = '70px'
    barata.style.width = '70px'
    barata.style.rotate = '30deg'
    barata.style.top = Math.floor(Math.random() * (altura - 10 + 1)) + 10 + 'px';
    barata.style.right = Math.floor(Math.random() * (largura - 10 + 1)) + 10 + 'px';
    barata.id = 'barata'
    document.body.appendChild(barata) 
    console.log(barata)
    console.log(altura, largura)

    barata.addEventListener('click', clicou)
    function clicou(e) {
        barata.remove()
    }
}