import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className= "container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Cadastrar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Buscar</a>
        </li>
       </ul> 
    </div>
  </nav>


  <div>
      -formulário aqui
      -usuario não digita id nem data de cadastro
      -e não fala se esta ativo ou não (na hora de cadastrar tem que estar ativo)

      <form method='POST' action=''>
  <div class="form-group">
    <label for="nome_item">Nome do item:</label>
    <input type="text" class="form-control" id="nome_item" placeholder="Por favor informe o nome do item"/> 
  </div>
  <div class="form-group">
    <label for="descricao_item">Descrição:</label>
    <input type="text" class="form-control" id="descricao_item" placeholder="Por favor informe a descrição do item"/>
  </div>
  <div>
    <button className="btn btn-primary">Salvar</button>
  </div>

</form>
    </div>
  </div>

  );
}

export default App;

