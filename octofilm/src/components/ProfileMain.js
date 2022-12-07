import '../css/auth.css';
import {Link, useNavigate} from "react-router-dom";
import {update, updatePass} from "../actions/auth.js";
import Cookies from "universal-cookie";

function ProfileMain() {
    const cookie = new Cookies();
    const redirect = useNavigate();
    const updateClick = ()=>{
        const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                fio: formData.get('fio'),
                login: formData.get('login'),
                email: formData.get('email'),
                pwd: formData.get('pwd')
            };
            update(formDataValues).then(a=>{
                if(!a){
                    window.location.reload();
                }
            });

        });
    };
    const updatePassClick = ()=>{
        const myForm = document.querySelector("#auth_form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                pwd: formData.get('pwd'),
                pwd2: formData.get('pwd2')
            };
            updatePass(formDataValues).then(a=>{
                if(!a){
                    window.location.reload();
                }
            });

        });
    };
    return (
        <main className="AuthMain RegMain ProfileMain">
                <h1 className="h1_profile_data">Данные профиля</h1>
                <form id="auth_form1" className="change_data">
                    <label>ФИО<sup>*</sup></label>
                    <input type="text" name="fio" placeholder="Введите имя" defaultValue={cookie.get('name')} required/>
                    <label>Логин<sup>*</sup></label>
                    <input type="text" name="login" placeholder="Введите логин" defaultValue={cookie.get('login')} required/>
                    <label>Почта<sup>*</sup></label>
                    <input type="text" name="email" placeholder="Введите почту" defaultValue={cookie.get('email')} required/>
                    <label>Пароль<sup>*</sup></label>
                    <input type="password" name="pwd" placeholder="Введите пароль" required/>
                    <input type="submit" id="btn1" onClick={()=>{updateClick()}} value="Изменить"/>
                </form>
            <form id="auth_form" className="change_pass">
                <label>Старый пароль<sup>*</sup></label>
                <input type="password" name="pwd" placeholder="Введите пароль" required/>
                <label>Новый пароль<sup>*</sup></label>
                <input type="password" name="pwd2" placeholder="Введите пароль" required/>
                <input type="submit" id="btn2" onClick={()=>{updatePassClick()}} value="Изменить"/>
            </form>
        </main>
    );
}

export default ProfileMain;