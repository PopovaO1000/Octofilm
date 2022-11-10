import '../css/index.css';
import photo_kino from '../img/photo_kinoteatra.jpg';

function ContactMain() {
    return (
        <main className="ContactMain">
            <h1>ТЦ Идея</h1>
            <section>
                <img src={photo_kino}/>
                <div>
                    <p>г. Магадан, Пролетарская 66, ТЦ Идея</p>
                    <p>Бронирование билетов: +7 (4132) 22-22-28</p>
                    <p>E-mail: kino@magtm.org</p>
                </div>
            </section>
            <section>
                <h1>Схема проезда</h1>
                <iframe className="frame"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A00ef92c41209de8b19c7ee66849cf9250d251ca51aa6bfb4c9159926410a1b84&amp;source=constructor"
                    width="500" height="400" frameBorder="0"></iframe>
                <script type="text/javascript" charSet="utf-8" async
                        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A00ef92c41209de8b19c7ee66849cf9250d251ca51aa6bfb4c9159926410a1b84&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
            </section>
        </main>
    );
}

export default ContactMain;