const numeroSenha = document.querySelector ( '.parametro-senha_texto');
let tamanhoSenha =12
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll ('.parametro-sena_botao');

botoes [0].onclick = diminuiTamanho;
botoes [1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha ();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha
}

