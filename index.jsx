import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useContext} from 'react'; // Importa o react com "UseState" para trabalhar com formulários
import { AuthContext } from '../../contexts/auth';
import Logo from '../../assets/images/logo-nu.png';
//https://king.host/wiki/artigo/como-fazer-deploy-aplicacao-react/

// Verifica se o usuário está logado, senão redireciona para o login
// function Privado({ Item }) {
//   const logado = true;
//   return logado == true ? <Item /> : <Login />;
// }

// Início da declaração do login
const Login = () =>{

  const {authenticated, login} = useContext(AuthContext);

  // Pega os dados dos inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  // Cancela o post dando refresh na página
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form enviado", {email, senha});
    login(email, senha); // integração com o contexto/api
  }

  return(
    // Formulário html
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <div className="d-flex justify-content-center pb-3">
            {/* <img src={Logo} width="100" alt="Logo" /> */}
          </div>
          <h3 className="Auth-form-title">Acesse sua conta</h3>
          <p>{String(authenticated)}</p>
          <div className="form-group mt-3">
            <label>Email:</label>
            <input type="email" className="form-control mt-1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group mt-3">
            <label>Senha:</label>
            <input type="password" className="form-control mt-1" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"> Entrar </button>
          </div>
          <p className="forgot-password text-center mt-2">
            Esqueceu a  <a href="#">senha</a>?
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;