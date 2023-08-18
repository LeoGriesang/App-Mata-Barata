const botaoIniciar = document.querySelector('[data-jogo="iniciar"]');
const nivel = document.querySelector('#nivel');

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    const valorNivel = nivel.value;
    if(valorNivel === '') {
        alert('Selecione um nivel para iniciar o jogo')
        return false
    }
    window.location.href = "app.html?" + valorNivel;
}