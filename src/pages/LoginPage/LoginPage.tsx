import { Link } from "react-router-dom"; 
import { Heading } from "../../components/UI/Typography/Heading";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="LoginPage">
        <Heading headingText="Авторизация" />
        <form action="#">
          <input type="tel" placeholder="Номер телефона" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Войти</button> 
        </form>
        <Link to="/reset-password"> 
          <span className="link-text">Забыли пароль?</span> 
        </Link>
        <div className="registration">
          <span>
            У вас нет аккаунта? <Link to="/register">Зарегистрироваться</Link> 
          </span>
          <p>Войти с помощью</p>
          <div className="icons-wrapper">
            <a className="reg__link google-link" href="#">
              <img src="./img/icons/google.svg" alt="Google" />
            </a>
            <a className="reg__link google-plus-link" href="#">
              <img src="./img/icons/google-plus.svg" alt="Google Plus" />
            </a>
            <a className="reg__link yandex-link" href="#">
              <img src="./img/icons/yandex.svg" alt="Yandex" />
            </a>
            <a className="reg__link mail-ru-link" href="#">
              <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
