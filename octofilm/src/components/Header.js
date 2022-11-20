import '../css/header.css';
import logo from '../logo.png';
import {Link} from "react-router-dom";

function Header(props) {
    let link = <Link to="/auth">Войти</Link>;
    if(props.Id !== undefined){
        link = <Link to="/profile">Профиль</Link>;
    }
    return (
        //header - бэкграунд -картинка
        <header id="fistHeader">
            <div className="first_gradient"></div>
            <div className="second_gradient"></div>
            <div className="main_auth_block">
                {link}
            </div>
            <nav className="main_nav">
                <Link to="/news">Новости</Link>
                <Link to="/schedule?date=default">Расписание</Link>
                <Link to="/films">Фильмы</Link>
                <Link to="/contacts">Контакты</Link>
            </nav>
            <a className="main_logo_ref">
                <img src={logo} alt="logo" className="main_logo"/>
            </a>
                <div className="main_slider_buttons">
                    <button className="main_slider_button"></button>
                    <button className="main_slider_button"></button>
                    <button className="main_slider_button"></button>
                    <button className="main_slider_button active_slider_button"></button>
                </div>
        </header>
    );
}

export default Header;