const formObjeto = document.getElementById('form-objeto');
const tabelaObjetos = document.getElementById('tabela-objetos').getElementsByTagName('tbody')[0];

formObjeto.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const id = document.getElementById('id').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const finalidade = document.getElementById('finalidade').value;
    const preco = document.getElementById('preco').value;

    const objeto = {
        nome: nome,
        id: id,
        marca: marca,
        modelo: modelo,
        finalidade: finalidade,
        preco: preco
    };

    adicionarObjeto(objeto);

    formObjeto.reset();
    
});

function adicionarObjeto(objeto) {
    const novaLinha = tabelaObjetos.insertRow();

    const celulaNome = novaLinha.insertCell();
    const celulaId = novaLinha.insertCell();
    const celulaMarca = novaLinha.insertCell();
    const celulaModelo = novaLinha.insertCell();
    const celulaFinalidade = novaLinha.insertCell();
    const celulaPreco = novaLinha.insertCell();
    const celulaAcoes = novaLinha.insertCell();

    celulaNome.textContent = objeto.nome;
    celulaId.textContent = objeto.id;
    celulaMarca.textContent = objeto.marca;
    celulaModelo.textContent = objeto.modelo;
    celulaFinalidade.textContent = objeto.finalidade;
    celulaPreco.textContent = `R$ ${objeto.preco}`;

    celulaAcoes.innerHTML = `

        <button onclick="editarObjeto(this)" style="background-color: blue;" >Editar</button>
        <button onclick="excluirObjeto(this)" style="background-color: red;">Excluir</button>
    `;
}

function editarObjeto(botao) {
    const linha = botao.parentNode.parentNode;
    const celulas = linha.querySelectorAll('td');

    const novoNome = prompt("Editar Nome:", celulas[0].textContent);
    const novoId = prompt("Editar ID:", celulas[1].textContent);
    const novaMarca = prompt("Editar Marca:", celulas[2].textContent);
    const novoModelo = prompt("Editar Modelo:", celulas[3].textContent);
    const novaFinalidade = prompt("Editar Finalidade:", celulas[4].textContent);
    const novoPreco = prompt("Editar Preço:", celulas[5].textContent.replace('R$ ', ''));

    if (novoNome && novoId && novaMarca && novoModelo && novaFinalidade && novoPreco) {
        celulas[0].textContent = novoNome;
        celulas[1].textContent = novoId;
        celulas[2].textContent = novaMarca;
        celulas[3].textContent = novoModelo;
        celulas[4].textContent = novaFinalidade;
        celulas[5].textContent = `R$ ${novoPreco}`;
        alert("Objeto editado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos para editar o objeto.");
    }
}

function excluirObjeto(botao) {
    const linha = botao.parentNode.parentNode;
    linha.remove();
}