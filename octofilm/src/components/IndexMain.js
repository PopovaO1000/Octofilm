import '../css/index.css';
import parma from '../img/parma2.jpg';
import sredne from '../img/sredne2.jpg';
import vershina from '../img/vershina.jpg';
import devka_okno from '../img/devka_okno.jpg';
import {Link} from "react-router-dom";
function IndexMain() {
    return (
        <main className="IndexMain">
            <section>
                <h2>ПОПУЛЯРНОЕ</h2>
                <div className="index_pic_row">
                    <Link to={`../films/one?id=1`}><img className="index_pic" src={parma}/></Link>
                    <Link to={`../films/one?id=4`}><img className="index_pic" src={sredne}/></Link>
                    <Link to={`../films/one?id=3`}><img className="index_pic" src={vershina}/></Link>
                    <Link to={`../films/one?id=2`}><img className="index_pic" src={devka_okno}/></Link>
                </div>
            </section>
            <section>
                <h2>СКОРО В КИНО</h2>
                <div className="index_pic_row">
                    <Link to={`../films/one?id=1`}><img className="index_pic" src={parma}/></Link>
                    <Link to={`../films/one?id=4`}><img className="index_pic" src={sredne}/></Link>
                    <Link to={`../films/one?id=3`}><img className="index_pic" src={vershina}/></Link>
                    <Link to={`../films/one?id=2`}><img className="index_pic" src={devka_okno}/></Link>
                </div>
            </section>
        </main>
    );
}

export default IndexMain;