import Axios from "axios";
const urlUser = "http://localhost:3010/login";
const urlOneUser = "http://localhost:3010/user";
const urlProduct = "http://localhost:3010/products";

export const buscaUser = (infos) => {
  const resultado = Axios.post(urlUser, infos).then((resp) => resp.data);
  return resultado;
};

export const updateUser = (infos) => {
  const resultado = Axios.patch(urlUser, infos).then((resp) => resp.data);
  return resultado;
};

export function changePassword(password, setPassword) {
  const pass = document.getElementById('password')
  if (password) pass.type = 'text'
  if (!password) pass.type = 'password'
  password ? setPassword(false) : setPassword(true);
}

export function changeBackground(e, mode, setMode) {
  if (mode === false) {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  e.innerText= 'Modo Claro'
  setMode(true);
  }
  if (mode === true) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    e.innerText= 'Modo Escuro'
    setMode(false);
  }
}

export function adcCarrinho(product, card) {
  const newProduct =  { ...product, index: card.length}
  card.push(newProduct);
  alert(`${product.name} adicionado ao carrinho! Você possui ${card.length} produtos no carrinho`)
}

export const findUser = (infos) => {
  const resultado = Axios.post(urlOneUser, infos).then((resp) => {
    if(resp.status === 200) {  
    return resp.data
  }
}).catch(
  function () {
    alert('Usuário não encontrado!')
    return null;
  });
  return resultado;
};

export const buscaProducts = () => {
  const resultado = Axios.get(urlProduct).then((resp) => resp.data);
  return resultado;
};

export const createProducts = (product) => {
  const resultado = Axios.post(urlProduct, product).then((resp) => {
    if (resp.status === 200) {
      alert("Produto criado com sucesso!");
      return resp.data;
    }
    if (resp.status === 400) {
      alert("Algo deu errado com a requisição!");
    }
  });
  return resultado;
};

export const submit = async (info, navigate) => {
  const request = Axios.post(urlUser, info)
    .then((response) => {
      if (response.status === 200) {
        navigate("/products");
        return response.data;
      }
    })
    .catch(function (err) {
      if (err.response) {
        return alert("Email ou senha invalidos!");
      }
    });
  return request;
};

export const redirect = ({ password, email }, e, info, navigate) => {
  e.preventDefault();
  if (email.includes("@" && ".com") && password.length > 6)
    submit(info, navigate);
  if (!email.includes("@" && ".com"))
    alert("Você deve inserir um email válido!");
  if (password.length < 7) alert("Sua senha deve possuir 7 caracteres ou mais");
};
