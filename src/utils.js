import Axios from "axios";
const urlUser = 'http://localhost:3010/login'
const urlProduct = 'http://localhost:3010/products'

export const buscaUser = (infos) => {
    const resultado =  Axios.post(urlUser, infos)
        .then(resp => resp.data);
    return resultado;
    }

export const buscaProducts = () => {
    const resultado = Axios.get(urlProduct)
    .then(resp => resp.data);
    return resultado;
}