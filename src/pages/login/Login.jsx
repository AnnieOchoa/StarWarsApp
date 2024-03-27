import logo from '../../assets/images/SW-logo.png';
import Button from '../../components/Button';
import Textinput from '../../components/Textinput';
import useState from 'react';

//componente Login
const Login = () => {

  const [loginForm, setloginForm] = useState ({ //hook para estado inicial de formulario
    user: '',
    email: '',
  })


  return (
    <main className="main-login">
      <section className="main-login__form container">
        <img src={logo} alt="logo" />
        <h1>Inicia Sesión</h1>
        <p>¡Te damos la bienvenida al mundo Star Wars!</p>
        <form className="main-login__form--form">
          <Textinput label="Usuario" name="name" />
          <Textinput label="Contraseña" name="password" />
          <Button style="filled" name="Iniciar Sesión" />
          <Button style="text" name="¿No tienes una cuenta? Regístrate" />
        </form>
      </section>
      <section className="main-login__img"></section> 
    </main>
  );
};

export default Login;
