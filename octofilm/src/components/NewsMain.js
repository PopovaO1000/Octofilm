// import '../css/header2.css';
import {Link} from "react-router-dom";
import ally from '../img/ally.webp';

function NewsMain() {
    return (
        <main className="NewsMain">
            <section>
                <Link className="News_first"><div className="news_text">«The Beatles — Концерт на крыше» Питера Джексона: выступление великой группы в высокой точке</div></Link>
                <Link>
                    <img src={ally}/>
                    <div>
                        <p>«Аллея кошмаров». Удалось ли Гильермо дель Торо возродить нуар?</p>
                    </div>
                </Link>
                <Link>
                    <img src={ally}/>
                    <div>
                        <p>«Аллея кошмаров». Удалось ли Гильермо дель Торо возродить нуар?</p>
                    </div>
                </Link>
                <Link>
                    <img src={ally}/>
                    <div>
                        <p>«Аллея кошмаров». Удалось ли Гильермо дель Торо возродить нуар?</p>
                    </div>
                </Link>
                <Link>
                    <img src={ally}/>
                    <div>
                        <p>«Аллея кошмаров». Удалось ли Гильермо дель Торо возродить нуар?</p>
                    </div>
                </Link>
                <Link>
                    <img src={ally}/>
                    <div>
                        <p>«Аллея кошмаров». Удалось ли Гильермо дель Торо возродить нуар?</p>
                    </div>
                </Link>
                <Link>
                    <img src={ally}/>
                    <div>
                        <p>«Аллея кошмаров». Удалось ли Гильермо дель Торо возродить нуар?</p>
                    </div>
                </Link>
            </section>
        </main>
    );
}

export default NewsMain;