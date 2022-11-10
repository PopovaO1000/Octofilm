import '../css/header2.css';
import logo from '../logo.png';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header id="secondHeader">
            <Link to="/"><img className="header2_logo" src={logo}/></Link>
            <Link to="/news">Новости</Link>
            <Link to="/schedule">Расписание</Link>
            <Link to="/films">Фильмы</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/auth" className="auth_link">Войти</Link>
        </header>
    );
}

export default Header;