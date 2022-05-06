import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useInfo } from './context/myContext';
import { buscaUser, buscaProducts } from './utils'

function Products() {
    const navigate = useNavigate();
    const { info } = useInfo();
    const [ filesUser, setFilesUser ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    async function getUserInfos() {
        await buscaUser(info).then((file) => setFilesUser([file]));
        await buscaProducts().then((file) => setProducts([file]));
        setLoading(false);
    }
    useEffect(() => {
        getUserInfos()
    }, [])

  return (
    <div>
        <header>
        {!loading ?  filesUser.map((item) => {
            return (
                <div key="user-header">
            <button onClick={() => navigate('/')}>Sair</button>
            <img src={ item.image } alt="logo-user" width="60" />
            <h2>{item.name}</h2>
            <h2>{ item.email }</h2>
            <h2>Saldo: ${ item.coins }</h2>
            { item.name === 'Admin' && <button onClick={() => navigate('/admin') } >
                Área de Controle
                </button> } 
            </div>
            )
        }) : <p>Carregando</p> }
        </header>
        {!loading &&  products[0].map((product) => {
            return (
                <div key={ product.name }>
                <img src={ product.image } alt="product" width="60" />
                <h2>{ product.name }</h2>
                <p>{ product.description }</p>
                <p>{ product.coins }</p>
                </div>
            )
        })

        }
    </div>
  );
}

export default Products;