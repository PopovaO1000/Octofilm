import '../css/footer.css';
import telegram from '../img/media_icons/telegram.svg';
import vk from '../img/media_icons/vk.svg';
import twitter from '../img/media_icons/twitter.svg';

function Footer() {
    return (
        <footer>
            <div className="footer_icons">
                <a href="#"><img src={vk}/></a>
                <a href="#"><img src={twitter}/></a>
                <a href="#"><img src={telegram}/></a>
            </div>
            <address>
                <p>ТЕЛЕФОН +7 (4132) 22-22-28</p>
                <p>АДРЕС г. Магадан, Пролетарская 66, ТЦ Идея</p>
            </address>
        </footer>
    );
}

export default Footer;