// impora a biblioteca jspdf
window.jsPDF = window.jspdf.jsPDF;

// funçao que vai executar quando clicar no botao
function generatePDF() {
    // chama a funçao no codigo 
    const { jsPDF } = window.jspdf;
    //cria o pdf 
    const doc = new jsPDF();

    // define os dados do formulario
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const nasc = document.getElementById("nascimento").value;
    const email = document.getElementById("email").value;
    const texto = document.getElementById("texto").value;

    // edita o pfd

    //define o modelo da pagina
    const pageWidth = doc.internal.pageSize.getWidth();

    // define a posiçao do nome no meio
    const nomeWidth = doc.getTextWidth(nome);
    const nomeX = (pageWidth - nomeWidth) / 2;

    // Centralizar o nome
    doc.text(nome, nomeX, 10);

    doc.text(`Data de nascimento: ${nasc}`, 10, 30);
    doc.text(`Endereço: ${endereco}`, 10, 40);
    doc.text(`Email: ${email}`, 10, 50);

    // Adicionar o título das experiências profissionais
    doc.text('Minhas experiências profissionais:', 10, 60);

    // Quebrar o texto das experiências profissionais em múltiplas linhas
    const textLines = doc.splitTextToSize(texto, 180); // 180 é a largura máxima permitida
    doc.text(textLines, 10, 70);

    doc.save('curriculo.pdf');
}
