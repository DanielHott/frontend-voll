import { useInfo } from './context/myContext';
import axios from "axios";

function Login() {

const url = 'http://localhost:3010/login'

async function submit () {
  const request = axios.post(url, info).then((response) => {
    if(response.status === 200) {
      alert('deu certo!');
      return response.data }
    }).catch(function (err) {
      if (err.response) {
        return alert('Email ou senha invalidos!');
      }
    })
    return request;
  }
  
const { info, setInfo } = useInfo();
function redirect({ password, email }, e) {
  e.preventDefault();
  if (email.includes('@' && '.com') && password.length > 6) submit(info);
  if (!email.includes('@' && '.com')) alert('Você deve inserir um email válido!')
  if (password.length < 7) alert('Sua senha deve possuir 7 caracteres ou mais')
}

  return (
    <div className="Login">
        <form onSubmit={ (e) => redirect(info, e) }>
          <h1>Voll Points</h1>
          <label> Qual é o seu e-mail? 
          <input type="email" placeholder="Email" 
          onChange={(a) => setInfo({...info, email: a.target.value })} required/>
          </label>
          <label> Informe sua senha, por favor.
          <input type="text" placeholder="Senha"
          onChange={(a) => setInfo({...info, password: a.target.value })}  required/>
          </label>
          <button type="submit">Entrar</button>
        </form>
    </div>
  );
}

export default Login;