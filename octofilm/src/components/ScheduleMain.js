import '../css/index.css';
import parma from '../img/parma2.jpg';
import sredne from '../img/sredne2.jpg';
import vershina from '../img/vershina.jpg';
import devka_okno from '../img/devka_okno.jpg';
import {Link} from "react-router-dom";
function IndexMain() {
    return (
        <main className="FilmsMain ScheduleMain">
            <section>
                <Link className="is_chosen">25 Окт</Link>
                <Link>25 Окт</Link>
                <Link>25 Окт</Link>
                <Link>25 Окт</Link>
                <Link>25 Окт</Link>
                <Link>25 Окт</Link>
            </section>
            <section>
                <div>
                    <img className="index_pic film_pic" src={parma}/>
                    <div className="schedule_disc">
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                    <div className="schedule_time">
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                    </div>
                </div>
                <div>
                    <img className="index_pic film_pic" src={parma}/>
                    <div className="schedule_disc">
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                    <div className="schedule_time">
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                    </div>
                </div>
                <div>
                    <img className="index_pic film_pic" src={parma}/>
                    <div className="schedule_disc">
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                    <div className="schedule_time">
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                    </div>
                </div>
                <div>
                    <img className="index_pic film_pic" src={parma}/>
                    <div className="schedule_disc">
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                    <div className="schedule_time">
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                    </div>
                </div>
                <div>
                    <img className="index_pic film_pic" src={parma}/>
                    <div className="schedule_disc">
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                    <div className="schedule_time">
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                    </div>
                </div>
                <div>
                    <img className="index_pic film_pic" src={parma}/>
                    <div className="schedule_disc">
                        <p>efjueijuvef</p>
                        <p>hnhff</p>
                    </div>
                    <div className="schedule_time">
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                        <Link to="#">10:30</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default IndexMain;