import '../css/header2.css';
import logo from '../logo.png';
import {Link} from "react-router-dom";

function Header(props) {
    let link = <Link to="/auth" className="auth_link">Войти</Link>;
    if(props.Id !== undefined){
        link = <Link to="/profile" className="auth_link">Профиль</Link>;
    }
    return (
        <header id="secondHeader">
            <Link to="/"><img className="header2_logo" src={logo}/></Link>
            <Link to="/news">Новости</Link>
            <Link to="/schedule?date=default">Расписание</Link>
            <Link to="/films">Фильмы</Link>
            <Link to="/contacts">Контакты</Link>
            {link}
        </header>
    );
}

export default Header;