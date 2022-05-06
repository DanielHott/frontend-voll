import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { createProducts, findUser, updateUser } from "./utils";

function ControlArea() {
const navigate = useNavigate();
const [user, setUser] = useState({ email: '' })
const [loading, setLoading] = useState(true)
const [coins, setCoins] = useState({ email: '', coins: '' })
const [ userFiles, setUserFiles ] = useState([])
const [product, setProduct ] = useState({
  name: '', coins: 0, description: '', image: ''
})

async function addProduct(e) {
  e.preventDefault()
  await createProducts(product);
}

async function findAUser(e) {
  e.preventDefault();
  findUser(user).then((a) => {
    if (!a) return setLoading(true);
    setLoading(false);
    return setUserFiles([a])});
}

async function updateCoins(e) {
  await updateUser(coins);
  findAUser(e);
  alert('Usuário atualizado!')
}

  return (
    <div className="out-adm">
    <button onClick={() => navigate('/products') }>Retornar</button> 
      <div className="admin-area">
        <div>
          <h2>Cadastrar produto:</h2>
          <form onSubmit={(e) => addProduct(e)} >
          <label>Título do produto
            <br />
          <input type="text" placeholder="Nome do produto" onChange={ (e) => setProduct({...product, name: e.target.value }) }
          required></input>
          </label>
          <br />
          <label>Descreva o produto
          <br />
          <textarea placeholder="Descrição do produto:" maxLength="200" onChange={ (e) => setProduct({...product, description: e.target.value }) }
          required></textarea>
          </label>
          <br />
          <label>Link da imagem do produto
          <br />
          <input type="text" placeholder="Deve terminar com .jpg" required onChange={ (e) => setProduct({...product, image: e.target.value }) }
          ></input>
          </label>
          <br />
          <label>Preço
          <br />
          <input type="number" placeholder="Deve terminar com .jpg" onChange={ (e) => setProduct({...product, coins: e.target.value }) }
          required></input>
          </label>
          <br />
          <button type="submit">Adicionar</button>
          </form>
        </div>
        <div>
          <h2>Controle de moedas:</h2>
          <form onSubmit={(e) => findAUser(e)}>
          <label>Insira o email do usuário
            <br />
          <input type="email" placeholder="Insira o email" onChange={ (e) => setUser({ email: e.target.value })}
          required></input>
          </label>
          <button>Encontrar</button>
          </form>
          { !loading ? userFiles.map((item) => {
            if (item.message === 'Usuário não encontrado!') return <p>aaaaaaaaaa</p>
            return (
              <div key="user">
              <img src={ item.image } alt="user" width="60"/>
              <p>Usuário: { item.name }</p>
              <p>Saldo Atual: { item.coins }</p>
              Novo saldo: <input type="number" onChange={(e) => setCoins({ email: item.email, coins: e.target.value })} />
              <button onClick={(e) => updateCoins(e)}>Alterar</button>
              </div>
            )
          }) : <p></p> }
        </div>
      </div>
    </div>
  );
}

export default ControlArea;