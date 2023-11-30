const itens = document.querySelector('.itens');
const barras = document.querySelector('.barras');

barras.addEventListener('click', () => {
    barras.classList.toggle('ativo');
    itens.classList.toggle('ativo');
});

