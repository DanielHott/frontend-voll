import { useInfo } from "./context/myContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirect, changePassword } from "./utils";
import voll from "./voll.png";

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState(true);
  const { info, setInfo } = useInfo();

  return (
    <div className="login">
      <form
        className="form-login"
        onSubmit={(e) => redirect(info, e, info, navigate)}
      >
        <img src={voll} alt="logo" width="310" />
        <br />
        <label className="arg-login">
          {" "}
          Qual é o seu e-mail?
          <br />
          <input
            className="input-login"
            type="email"
            placeholder="Email"
            onChange={(a) => setInfo({ ...info, email: a.target.value })}
            required
          />
        </label>
        <br />
        <label className="arg-login">
          {" "}
          Informe sua senha.
          <br />
          <input
            className="input-login"
            type="password"
            id="password"
            placeholder="Senha"
            onChange={(a) => setInfo({ ...info, password: a.target.value })}
            required
          />
        </label>
        <br />
        <label className="password">
          Visualizar senha:
          <input
            type="checkbox"
            onChange={() => changePassword(password, setPassword)}
          />
        </label>
        <br />
        <button className="button-login" type="submit">
          Entrar
        </button>
      </form>
      <h3 className="footer">Desenvolvido por <a className="Name" target="_blank" href="https://www.linkedin.com/in/danielhott/" rel="noreferrer">Daniel Hott</a></h3>
    </div>
  );
}

export default Login;
