import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

const Home = () =>{

  const {authenticated, logout} = useContext(AuthContext);
  
  function handleLogout() {
    logout();
  }

  return(
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Home</h3>
          <div className='d-flex justify-content-center'>
            <p>{String(authenticated)}</p> 
          </div>
          <div className='d-flex justify-content-center'>
            <button onClick={handleLogout} className="btn btn-primary w-100">Sair</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Home;
