import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [finalidade, setFinalidade] = useState('');
  const [preco, setPreco] = useState('');
  const [objetos, setObjetos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoObjeto = {
      id: Date.now(), // Gerando um ID único com o timestamp
      nome,
      marca,
      modelo,
      finalidade,
      preco,
      horaCadastro: new Date().toLocaleString(), // Formatando a hora do cadastro
    };
    setObjetos([...objetos, novoObjeto]);
    setNome('');
    setMarca('');
    setModelo('');
    setFinalidade('');
    setPreco('');
  };

  const handleEdit = (id) => {
    // Implemente a lógica para editar o objeto com o ID fornecido
    console.log('Editando objeto com ID:', id);
  };

  const handleDelete = (id) => {
    // Implemente a lógica para excluir o objeto com o ID fornecido
    setObjetos(objetos.filter((objeto) => objeto.id !== id));
    console.log('Excluindo objeto com ID:', id);
  };

  return (
    <div className="container">
      <div className="texto">
      <h1>Cadastro de Objetos</h1>
      </div>
      <br></br>

      <form onSubmit={handleSubmit}>
        <div id="b">
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="finalidade">Finalidade:</label>
          <input
            type="text"
            id="finalidade"
            value={finalidade}
            onChange={(e) => setFinalidade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        </div>
        {/* Adicione os outros campos do formulário da mesma forma */}
        <button type="submit" id='bntCadastro'>Cadastrar</button>
      </form>
      <br></br>
      <div className="texto">
      <h1>Objetos Cadastrados:</h1>
      </div>
      <table  id='tabela-objetos' className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Finalidade</th>
            <th>Preço</th>
            {/* Adicione as outras colunas da tabela */}
            <th>Hora do Cadastro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {objetos.map((objeto) => (
            <tr key={objeto.id}>
              <td>{objeto.id}</td>
              <td>{objeto.nome}</td>
              <td>{objeto.marca}</td>
              <td>{objeto.modelo}</td>
              <td>{objeto.finalidade}</td>
              <td>{objeto.nome}</td>

              {/* Adicione os outros campos do objeto */}
              <td>{objeto.horaCadastro}</td>
              <td>
                <button onClick={() => handleEdit(objeto.id)} id='bntEditar' >Editar</button>
                <button onClick={() => handleDelete(objeto.id)} id='bntExcluir'>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

      {/* Adicione os outros campos do formulário da mesma forma 
      <ul>
        {objetos.map((objeto) => (
          <li key={objeto.id}>
            <strong>ID:</strong> {objeto.id}
            <br />
            <strong>Nome:</strong> {objeto.nome}
            <br />
            <strong>Marca:</strong> {objeto.marca}
            <br />
            <strong>Modelo:</strong> {objeto.modelo}
            <br />
            <strong>Finalidade:</strong> {objeto.finalidade}
            <br />
            <strong>Preço:</strong> {objeto.preco}
            <br />
            <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
             Adicione as outras colunas da tabela 
            <th>Hora do Cadastro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {objetos.map((objeto) => (
            <tr key={objeto.id}>
              <td>{objeto.id}</td>
              <td>{objeto.nome}</td>
              {/* Adicione os outros campos do objeto 
              <td>{objeto.horaCadastro}</td>
              <td>
                <button onClick={() => handleEdit(objeto.id)}>Editar</button>
                <button onClick={() => handleDelete(objeto.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            {/* Adicione os outros campos do objeto 
            <strong>Hora do Cadastro:</strong> {objeto.horaCadastro}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/}