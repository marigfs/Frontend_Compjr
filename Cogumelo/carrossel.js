const controls = document.querySelectorAll(".control");
let imagemAtual = 0;
const imagens = document.querySelectorAll(".imagem");
const maxImagens = imagens.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
        const isLeft = e.target.classList.contains("arrow-left");
        
        if(isLeft) {
            imagemAtual -= 1;
        } else {
            imagemAtual += 1;
        }

        if (imagemAtual >= maxImagens){
            imagemAtual = 0;
        }

        if (imagemAtual < 0){
            imagemAtual = maxImagens - 1;
        }

        imagens.forEach((imagem) => imagem.classList.remove("imagemAtual"));

        imagens[imagemAtual].scrollIntoView({
            inline: "center"
        });

        imagens[imagemAtual].classList.add("imagemAtual");
    });
});