// import '../css/header2.css';
import {Link, useSearchParams} from "react-router-dom";
import ally from '../img/ally.webp';
import {useEffect, useState} from "react";
import {getOneNews} from "../actions/outputnews.js";

function OneNewsMain() {
    const [news, setNews] = useState([]);
    let info;
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    useEffect(()=>{
        getOneNews(id).then((newsrow)=> {
            setNews(newsrow.map((news)=>{
                    return(
                        <div key={news.id_news} className="News_One">
                            <h2>{news.name}</h2>
                            <img src={require(`../img/${news.img}`)}/>
                            <p>{news.text}</p>
                        </div>
                    )
                })
            )
        })
    },[]);
    return (
        <main className="NewsMain">
            <section>
                {news}
            </section>
        </main>
    );
}

export default OneNewsMain;