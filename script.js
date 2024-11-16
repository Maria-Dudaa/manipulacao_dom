// Função para alterar o texto do parágrafo de acordo com a opção escolhida
function alterarTexto() {
    // Encontra o parágrafo e o select pelo ID
    let paragrafo = document.getElementById("meuParagrafo");
    let select = document.getElementById("textoSelecionado");
    
    // Obtém o valor selecionado do select
    let valorSelecionado = select.value;
    
    // Altera o texto com base na opção escolhida
    switch (valorSelecionado) {
        case "texto1":
            paragrafo.innerHTML = "\nHoje o dia esta lindo!\n Texto alterado com sucesso! ";
            break;
        case "texto2":
            paragrafo.innerHTML = "\nSe você não ir a luta não tera vitoria.\n Texto alterado com sucesso!";
            break;
        case "texto3":
            paragrafo.innerHTML = "\nVive a vida como se fosse a ultima!\n Texto alterado com sucesso!";
            break;
        case "texto4":
            paragrafo.innerHTML = "\nO importante é ter fé!\n Texto alterado com sucesso!";
            break;
        default:
            paragrafo.innerHTML = "Escolha uma opção válida.";
    }
}
