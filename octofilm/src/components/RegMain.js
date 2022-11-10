import '../css/auth.css';
import {Link} from "react-router-dom";

function RegMain() {
    return (
        <main className="AuthMain RegMain">
            <h1>Регистрация</h1>
            <form method="post" action="">
                <label>ФИО<sup>*</sup></label>
                <input type="text" name="fio" placeholder="Введите логин"/>
                <label>Логин<sup>*</sup></label>
                <input type="text" name="login" placeholder="Введите логин"/>
                <label>Почта<sup>*</sup></label>
                <input type="text" name="enail" placeholder="Введите почту"/>
                <label>Пароль<sup>*</sup></label>
                <input type="password" name="password" placeholder="Введите пароль"/>
                <label>Пароль<sup>*</sup></label>
                <input type="password" name="password2" placeholder="Повторите пароль"/>
                <input type="submit" value="Войти"/>
            </form>
            <Link to="/auth">Авторизация</Link>
        </main>
    );
}

export default RegMain;