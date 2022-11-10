import '../css/index.css';
import parma from '../img/parma2.jpg';
import sredne from '../img/sredne2.jpg';
import vershina from '../img/vershina.jpg';
import devka_okno from '../img/devka_okno.jpg';
function IndexMain() {
    return (
        <main className="IndexMain">
            <section>
                <h2>ПОПУЛЯРНОЕ</h2>
                <div className="index_pic_row">
                    <a href="#"><img className="index_pic" src={parma}/></a>
                    <a href="#"><img className="index_pic" src={sredne}/></a>
                    <a href="#"><img className="index_pic" src={vershina}/></a>
                    <a href="#"><img className="index_pic" src={devka_okno}/></a>
                </div>
            </section>
            <section>
                <h2>СКОРО В КИНО</h2>
                <div className="index_pic_row">
                    <a href="#"><img className="index_pic" src={parma}/></a>
                    <a href="#"><img className="index_pic" src={sredne}/></a>
                    <a href="#"><img className="index_pic" src={vershina}/></a>
                    <a href="#"><img className="index_pic" src={devka_okno}/></a>
                </div>
            </section>
        </main>
    );
}

export default IndexMain;