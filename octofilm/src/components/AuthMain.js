import '../css/auth.css';
import {Link} from "react-router-dom";
import {auth} from "../actions/auth";

function AuthMain() {
    const id = document.querySelector()
    return (
        <main className="AuthMain">
            <h1>Авторизация</h1>
            <form method="post" action="/api/auth">
                <label>Логин<sup>*</sup></label>
                <input type="text" name="login" placeholder="Введите логин"/>
                <label>Пароль<sup>*</sup></label>
                <input type="password" name="password" placeholder="Введите пароль"/>
                <input type="submit" value="Войти"/>
            </form>
            <Link to="/reg">Регистрация</Link>
        </main>
    );
}

export default AuthMain;