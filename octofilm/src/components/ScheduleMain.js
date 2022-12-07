import '../css/index.css';
import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {outputSchedule} from "../actions/outputshedule.js";
import {useEffect, useState} from "react";
import {redirect} from "react-router";
function ScheduleMain() {
    const redirect = useNavigate();
    const click = (val)=>{
        redirect(''+val);
        window.location.reload();
    }
    let [searchParams, setSearchParams] = useSearchParams();
    const date = searchParams.get('date');
    const [dates,setDates] = useState([]);
    const [schedule,setSchedule] = useState([]);
    let location = useLocation();
    useEffect(()=>{
        outputSchedule(date).then((seansiRows)=>{
            const datesFromDB = seansiRows.dates;
            const seansiFromDB = seansiRows.films;
            setDates(datesFromDB.map((date)=>{
                const dateDate = new Date(date.date.substr(0,10));
                if(date.date === seansiFromDB[0][2])
                {
                    return(
                        <button key={date.date} className="is_chosen" value={`../schedule?date=${date.date}`} onClick={(e)=>click(e.target.value)}>{dateDate.toLocaleString("ru",{day:'numeric',month:'short'})}</button>
                    )
                }else{
                    return(
                        <button key={date.date} value={`../schedule?date=${date.date}`} onClick={(e)=>click(e.target.value)}>{dateDate.toLocaleString("ru",{day:'numeric',month:'short'})}</button>
                        )
                }
                })
            );
            setSchedule(seansiFromDB.map((seans)=>{
                const times =seans.map((innerSeans,i)=>{
                    if(i>3)
                        return(
                            <Link key={innerSeans} to={`../booking?film=${seans[1]}&date=${seans[2]}&time=${innerSeans}`}>{innerSeans.substr(0,5)}</Link>
                        )
                })
                return(
                    <div key={seans[1]}>
                        <img className="index_pic film_pic" src={require(`../img/${seans[3]}`)}/>
                        <div className="schedule_disc">
                            <p>{seans[1]}</p>
                        </div>
                        <div className="schedule_time">
                            {times}
                        </div>
                    </div>
                )
            })
            )
        });
    },[]);
    return (
        <main className="FilmsMain ScheduleMain">
            <section>
                {dates}
            </section>
            <section>
                {schedule}
            </section>
        </main>
    );
}

export default ScheduleMain;