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
         const seats = seansObj.zal.split(' ');
         const bookedSeats = seansObj.notFreePlaces;
          setBooking(seats.map((maxSeat,i)=>{
             let seat = 1;
             let seatArr = [];
             let isRowBooked = false;
             let bookedSeatsArr = [];
             bookedSeats.forEach((bookedSeatRow,j)=>{
                 if(i+1 == bookedSeatRow.num){
                     isRowBooked = true;
                     bookedSeatRow.innerArr.forEach((bookedSeatt,m)=>{
                         bookedSeatsArr.push(bookedSeatt);
                     })
                 }
             });
             while(seat<=maxSeat){
                 let className = "seat";
                 if(isRowBooked){
                     bookedSeatsArr.forEach((bookedSeatt,j)=>{
                         if(seat == bookedSeatt){
                             className += " is_booked";
                         }
                     });
                 }
                 if(seat == 1){
                     className += " seat_gap";
                 }
                 seatArr.push(<button key={i+seat} id={i+1+'-'+seat} className={className}></button>);
                 seat += 1;
             }
             return seatArr;
         })
          );
      });
   },[]);
   return (
       <main className="NewsMain">
          <section>
              <article className="Booking_seats">
                  {booking}
              </article>
          </section>
       </main>
   );
}

export default BookingMain;