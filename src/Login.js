import { useInfo } from './context/myContext';
import { useNavigate } from 'react-router-dom'
import { redirect } from './utils'
import voll from './voll.png'

function Login() {
const navigate = useNavigate();
const { info, setInfo } = useInfo();

  return (
    <div className="login">
        <form className="form-login" onSubmit={ (e) => redirect(info, e, info, navigate) }>
          <img src={voll}  alt="logo" width="310"/>
          <br />
          <label> Qual é o seu e-mail? 
            <br />
          <input className="input-login" type="email" placeholder="Email" 
          onChange={(a) => setInfo({...info, email: a.target.value })} required/>
          </label>
          <br />
          <label> Informe sua senha.
            <br />
          <input className="input-login" type="text" placeholder="Senha"
          onChange={(a) => setInfo({...info, password: a.target.value })}  required/>
          </label>
          <br />
          <button className="button-login" type="submit">Entrar</button>
        </form>
    </div>
  );
}

export default Login;