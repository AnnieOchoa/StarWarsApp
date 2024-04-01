import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../../components/Button';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import Textinput from '../../components/Textinput';
import logo from '../../assets/images/SW-logo.png';
import { createUserWithEmailAndPassword as signup } from 'firebase/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupform] = useState({
    user: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  //funcionalidad del boton
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await signup(auth, signupForm.email, signupForm.password)
      .then(() => {
        navigate('/auth/login');
        Swal.fire({
          title: '¡Registro Completado!',
          text: 'Tu cuenta ha sido creada con éxito. ',
          icon: 'success',
        });
      })
      .catch((response) => {
        console.log(response.message);
        Swal.fire({
          title: '¡Ups, algo salio mal!',
          text: 'Asegúrate de proporcionar un correo electrónico válido y una contraseña con al menos 6 caracteres.',
          icon: 'error',
        });
      });
  };

  return (
    <main className="main-signup">
      <section className="main-signup__img"></section>
      <section className="main-signup__form">
        <img src={logo} alt="logo" />
        <h1>Regístrate</h1>
        <p>¡Te damos la bienvenida al mundo Star Wars!</p>
        <form className="main-login__form--form">
          <Textinput
            label="Usuario"
            name="name"
            value={signupForm.user}
            onChange={(e) => {
              setSignupform({
                ...signupForm,
                user: e.target.value,
              });
            }}
          />
          <Textinput
            label="Email"
            name="name"
            value={signupForm.email}
            onChange={(e) => {
              setSignupform({
                ...signupForm,
                email: e.target.value,
              });
            }}
          />
          <Textinput
            label="Contraseña"
            name="password"
            type="password"
            value={signupForm.password}
            onChange={(e) => {
              setSignupform({
                ...signupForm,
                password: e.target.value,
              });
            }}
          />
          <Textinput
            label="Comprueba tu contraseña"
            name="name"
            type="password"
            value={signupForm.confirmPassword}
            onChange={(e) => {
              setSignupform({
                ...signupForm,
                confirmPassword: e.target.value,
              });
            }}
          />
          <Button style="filled" name="Regístrarse" onClick={onSubmitHandler} />
          <Button
            style="text"
            name="¿Ya tienes una cuenta? Inicia sesión"
            path="/auth/login"
          />
        </form>
      </section>
    </main>
  );
};

export default SignUp;
