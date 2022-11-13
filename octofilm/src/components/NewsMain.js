// import '../css/header2.css';
import {Link} from "react-router-dom";
import ally from '../img/ally.webp';
import {useEffect, useState} from "react";
import {outputNews} from "../actions/outputnews.js";

function NewsMain() {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        outputNews().then((newsrow)=>{
            setNews(newsrow.map((news)=>{
                    if(news===newsrow[0]){
                        const style = {
                            backgroundImage: 'url('+require(`../img/${news.img}`)+')'
                        }
                        return(
                            <Link className="News_first" style={style} key={news.id_news}><div className="news_text">{news.name}</div></Link>
                        )
                    }
                    else {
                        return(
                            <Link key={news.id_news}>
                                <img src={require(`../img/${news.img}`)}/>
                                <div>
                                    <p>{news.name}</p>
                                </div>
                            </Link>
                        )
                    }
                })
            )
        });
    },[]);
    return (
        <main className="NewsMain">
            <section>
                {news}
            </section>
        </main>
    );
}

export default NewsMain;