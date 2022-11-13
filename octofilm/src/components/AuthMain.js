import '../css/auth.css';
import {Link} from "react-router-dom";
import {auth} from "../actions/auth";
import {useState} from "react";

function AuthMain() {
    const [login,setLogin] = useState('');
    const [pwd,setPwd] = useState('');
    const authClick = ()=>{
        const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                 login: formData.get('login'),
                 pwd: formData.get('pwd')
            };
                auth(formDataValues);
        });
    };
    return (
        <main className="AuthMain">
            <h1>Авторизация</h1>
            <form id="auth_form">
                <label>Логин<sup>*</sup></label>
                <input type="text" name="login" placeholder="Введите логин"/>
                <label>Пароль<sup>*</sup></label>
                <input type="pwd" name="pwd" placeholder="Введите пароль"/>
                <input type="submit" onClick={() => authClick()} value="Войти"/>
            </form>
            <Link to="/reg">Регистрация</Link>
        </main>
    );
}

export default AuthMain;