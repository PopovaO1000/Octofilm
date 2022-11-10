import '../css/index.css';
import parma from '../img/parma2.jpg';
import sredne from '../img/sredne2.jpg';
import vershina from '../img/vershina.jpg';
import devka_okno from '../img/devka_okno.jpg';
import {Link} from "react-router-dom";
function IndexMain() {
    return (
        <main className="FilmsMain">
            <section>
                <div className="Films_main_film">
                    <div className="Films_main_film_disc">
                        <h4>ffs</h4>
                        <p>По неизвестной причине Луна вдруг сходит с орбиты и идёт на столкновение с Землёй, что провоцирует множественные катаклизмы.</p>
                        <Link>Билеты</Link>
                    </div>
                </div>
                <a href="#">
                    <img className="index_pic film_pic" src={parma}/>
                    <div>
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                </a>
                <a href="#">
                    <img className="index_pic film_pic" src={sredne}/>
                    <div>
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                </a>
                <a href="#">
                    <img className="index_pic film_pic" src={vershina}/>
                    <div>
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                </a>
                <a href="#">
                    <img className="index_pic film_pic" src={devka_okno}/>
                    <div>
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                </a>
                <a href="#">
                    <img className="index_pic film_pic" src={devka_okno}/>
                    <div>
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                </a>
                <a href="#">
                    <img className="index_pic film_pic" src={devka_okno}/>
                    <div>
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                </a>
            </section>
        </main>
    );
}

export default IndexMain;