import { useEffect, useState } from 'react';

import { useInfo } from './context/myContext';
import { buscaUser } from './utils'

function Products() {
    const { info } = useInfo();
    const [ filesUser, setFilesUser ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const teste = { email: "admin@voll.com", password: "1234567" }
    async function getUserInfos() {
        await buscaUser(teste).then((file) => setFilesUser([file]))
        setLoading(false);
    }
    useEffect(() => {
        getUserInfos()
    }, [])
    useEffect(() => {
        setFilesUser(filesUser)
      }, [filesUser, setFilesUser])

  return (
    <div>
        <header>
        {!loading ?  filesUser.map((item) => {
            return (
            <div key="user-header">
            <img src={ item.image } alt="logo-user" width="60" />
            <h2>{item.name}</h2>
            <h2>{ item.email }</h2>
            <h2>{ item.coins }</h2>
            </div>
            )
        }) : <p>Carregando</p> }
        </header>
        <h1>Products</h1>
    </div>
  );
}

export default Products;