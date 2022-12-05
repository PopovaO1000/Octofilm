import '../css/index.css';
import {Link} from "react-router-dom";
import {outputFilms} from "../actions/outputfilms.js";
import {useEffect, useState} from "react";

function IndexMain() {
    const [films, setFilms] = useState([]);
    useEffect(()=>{
        outputFilms().then((films)=>{
            setFilms(films.map((film)=>{
                if(film===films[0]){
                    const style = {
                        backgroundImage: 'url('+require(`../img/${film.img_poster}`)+')'
                    }
                    return(
                        <div className="Films_main_film" key={film.id_film} style={style}>
                            <div className="Films_main_film_disc">
                                <h4>{film.name}</h4>
                                <p>{film.about}</p>
                                <Link>Билеты</Link>
                            </div>
                        </div>
                    )
                }
                else {
                    return(
                        <Link key={film.id_film} to={`../films/one?id=${film.id_film}`}>
                            <img className="index_pic film_pic" src={require(`../img/${film.img_poster}`)}/>
                            <div>
                                <p>{film.name}</p>
                                <p>{film.genre}</p>
                            </div>
                        </Link>
                    )
                }
            })
            )
        });
    },[]);
    return (
        <main className="FilmsMain">
            <section>
                {films}
            </section>
        </main>
    );
}

export default IndexMain;