import Axios from "axios";
const url = 'http://localhost:3010/login'

export const buscaUser = (infos) => {
    const resultado =  Axios.post(url, infos)
        .then(resp => resp.data);
    return resultado;
    }