import {Link, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOneFilm} from "../actions/outputfilms.js";

function OneFilmMain() {
    const [film, setFilm] = useState([]);
    let info;
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    useEffect(()=>{
        getOneFilm(id).then((filmrow)=> {
            setFilm(filmrow.map((film)=>{
                    return(
                        <div key={film.id_news} className="Film_One">
                            <img src={require(`../img/${film.img_poster}`)}/>
                            <h2>{film.name}</h2>
                            <p>Жанр: {film.genre}</p>
                            <p>Рейтинг: {film.rating}</p>
                            <p>Режиссер: {film.director}</p>
                            <p>Актеры: {film.actors}</p>
                            <p>Рейтинг: {film.age_rate}+</p>
                            <p>Синопсис: {film.about}</p>
                            <iframe width="560" height="315" src={`${film.trailer}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    )
                })
            )
        })
    },[]);
    return (
        <main className="NewsMain">
            <section>
                {film}
            </section>
        </main>
    );
}

export default OneFilmMain;