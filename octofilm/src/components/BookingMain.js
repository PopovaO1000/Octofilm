import '../css/index.css';
import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {outputSchedule} from "../actions/outputshedule.js";
import {useEffect, useState} from "react";
import {redirect} from "react-router";
import {getOneSeans} from "../actions/outputBooking.js";

function BookingMain() {
   const [booking, setBooking] = useState([]);
   let [searchParams, setSearchParams] = useSearchParams();
   const film = searchParams.get('film');
   const date = searchParams.get('date');
   const time = searchParams.get('time');
   useEffect(()=>{
      getOneSeans(film,date,time).then((seansObj)=>{
         // setBooking(seansrow.map((seans)=>{
         //     })
         // );
         console.log(seansObj)
      });
   },[]);
   return (
       <main className="NewsMain">
          <section>
             vkus
          </section>
       </main>
   );
}

export default BookingMain;