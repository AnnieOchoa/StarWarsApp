import logo from '../../assets/images/SW-logo.png';
import Button from '../../components/Button';
import Textinput from '../../components/Textinput';

const SignUp = () => {
  return (
    <main className="main-signup">
      <section className='main-signup__img'></section>
      <section className="main-signup__form">
        <img src={logo} alt="logo" />
        <h1>Regístrate</h1>
        <p>¡Te damos la bienvenida al mundo Star Wars!</p>
        <form className="main-login__form--form">
          <Textinput label="Usuario" name="name"/>
          <Textinput label="Email" name="name"/>
          <Textinput label="Contraseña" name="password" />
          <Textinput label="Comprueba tu contraseña" name="name"/>
          <Button style="filled" name="Regístrarse" />
          <Button style="text" name="¿Ya tienes una cuenta? Inicia sesión" />
        </form>
      </section>
    </main>
  );
};

export default SignUp;
