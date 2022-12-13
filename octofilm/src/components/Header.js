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
            <div className="sim-slider">
                    <div className="sim-slider-list">
                        <div className="slider slider_1 sim-slider-element"></div>
                        <div className="slider slider_2 sim-slider-element"></div>
                        <div className="slider slider_3 sim-slider-element"></div>
                        <div className="slider slider_3 sim-slider-element"></div>
                    </div>
            </div>
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
                <div className="main_slider_buttons sim-slider-dots">
                    <button className="main_slider_button sim-slider-dot"></button>
                    <button className="main_slider_button sim-slider-dots"></button>
                    <button className="main_slider_button sim-slider-dots"></button>
                    <button className="main_slider_button active_slider_button sim-slider-dots"></button>
                </div>
            <script src="sim-slider.js"></script>
            <script>new Sim()</script>
        </header>
    );
}

export default Header;