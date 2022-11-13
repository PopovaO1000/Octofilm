import '../css/auth.css';
import {Link, useNavigate} from "react-router-dom";
import {reg} from "../actions/auth.js";

function RegMain() {
    const redirect = useNavigate();
    const regClick = ()=>{
        console.log("dfsfs");
        const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                fio: formData.get('login'),
                login: formData.get('login'),
                email: formData.get('email'),
                pwd: formData.get('pwd'),
                pwd2: formData.get('pwd2')
            };
            reg(formDataValues);
            // redirect('/');
            // window.location.reload();

        });
    };
    return (
        <main className="AuthMain RegMain">
            <h1>Регистрация</h1>
            <form id="auth_form">
                <label>ФИО<sup>*</sup></label>
                <input type="text" name="fio" placeholder="Введите логин"/>
                <label>Логин<sup>*</sup></label>
                <input type="text" name="login" placeholder="Введите логин"/>
                <label>Почта<sup>*</sup></label>
                <input type="text" name="email" placeholder="Введите почту"/>
                <label>Пароль<sup>*</sup></label>
                <input type="password" name="pwd" placeholder="Введите пароль"/>
                <label>Пароль<sup>*</sup></label>
                <input type="password" name="pwd2" placeholder="Повторите пароль"/>
                <input type="submit" id="btn" onClick={()=>{regClick()}} value="Войти"/>
            </form>
            <Link to="/auth">Авторизация</Link>
        </main>
    );
}

export default RegMain;