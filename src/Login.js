import { useInfo } from './context/myContext';
import { useNavigate } from 'react-router-dom'
import { redirect } from './utils'

function Login() {
const navigate = useNavigate();
const { info, setInfo } = useInfo();

  return (
    <div className="Login">
        <form onSubmit={ (e) => redirect(info, e, info, navigate) }>
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