import '../css/auth.css';
import {Link} from "react-router-dom";
import {auth} from "../actions/auth";
import {useState} from "react";

function AuthMain() {
    const [login,setLogin] = useState('');
    const [pwd,setPwd] = useState('');
    const ggg = ()=>{
            const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            // const formData = {
            //     login: document.querySelector('input[name="login"]').value,
            //     pwd: document.querySelector('input[name="pwd"]').value
            // };
                auth(formData);
            console.log(formData);
            // auth(formData);
        });
    };
    return (
        <main className="AuthMain">
            <h1>Авторизация</h1>
            <form id="auth_form" encType="multipart/form-data">
                <label>Логин<sup>*</sup></label>
                <input type="text" name="login" placeholder="Введите логин"/>
                <label>Пароль<sup>*</sup></label>
                <input type="pwd" name="pwd" placeholder="Введите пароль"/>
                <input type="submit" onClick={() => ggg()} value="Войти"/>

                <input type="file" name="trash"/>

            </form>
            <Link to="/reg">Регистрация</Link>
        </main>
    );
}

export default AuthMain;