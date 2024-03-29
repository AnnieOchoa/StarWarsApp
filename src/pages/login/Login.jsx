import {useState} from 'react';
import Swal from 'sweetalert2';
import Button from '../../components/Button';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import Textinput from '../../components/Textinput';
import logo from '../../assets/images/SW-logo.png';
import { signInWithEmailAndPassword as onlogin} from 'firebase/auth';

//componente Login
const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    user: '',
    password: '',
  })

  //funcion autenticacion firebase para ingresar a cuenta
  const loginHandler = async (e) => {
    e.preventDefault();
       await onlogin(auth, loginForm.user, loginForm.password)
        .then(() => {
            // Signed in
            navigate("/auth/signup")
            Swal.fire({
              title: '¡Inicio de Sesión Exitoso!',
              text: 'Has ingresado correctamente. Serás redirigido a la página de inicio.',
              icon: 'success'
            })
        })
        .catch((response) => {
            console.log(response.message)
            Swal.fire({
              title: '¡Ups, algo salio mal!',
              text: 'Credenciales incorrectas. Por favor, inténtalo de nuevo.',
              icon: 'error',
            })
        })
      };
   

  return (
    <main className="main-login">
      <section className="main-login__form container">
        <img src={logo} alt="logo" />
        <h1>Inicia Sesión</h1>
        <p>¡Te damos la bienvenida al mundo Star Wars!</p>
        <form className="main-login__form--form">
          <Textinput label="Email" name="name" value={loginForm.user} onChange={ (e) => {
            setLoginForm({
              ...loginForm,
              user: e.target.value
            })
          }}/>
          <Textinput label="Contraseña" name="password" type="password" value={loginForm.password} onChange={ (e) => {
            setLoginForm({
              ...loginForm,
              password: e.target.value
            })
          }}/>
          <Button style="filled" name="Iniciar Sesión" onClick={loginHandler}/>
          <Button style="text" name="¿No tienes una cuenta? Regístrate" path={"/auth/signup"} />
        </form>
      </section>
      <section className="main-login__img"></section> 
    </main>
  );
};


export default Login;
