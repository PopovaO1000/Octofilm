import '../css/auth.css';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../actions/auth.js";

function AuthMain() {
    const redirect = useNavigate();
    const authClick = ()=>{
        const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                 login: formData.get('login'),
                 pwd: formData.get('pwd')
            };
            auth(formDataValues).then(a=>{
                if(!a){
                    redirect('/');
                    window.location.reload();
                }
            });
        });
    };
    return (
        <main className="AuthMain">
            <h1>Авторизация</h1>
            <form id="auth_form">
                <label>Логин<sup>*</sup></label>
                <input type="text" name="login" placeholder="Введите логин"/>
                <label>Пароль<sup>*</sup></label>
                <input type="password" name="pwd" placeholder="Введите пароль"/>
                <input type="submit" onClick={() => authClick()} value="Войти"/>
            </form>
            <Link to="/reg">Регистрация</Link>
        </main>
    );
}

export default AuthMain;