import '../css/index.css';
import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOneSeans} from "../actions/outputBooking.js";
import {bookingInsert} from "../actions/booking.js";

function BookingMain() {
    const redirect = useNavigate();

    const bookingClick = ()=>{
        const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                email: formData.get('email'),
                film: formData.get('film'),
                date: formData.get('date'),
                time: formData.get('time')
            };
            bookingInsert(formDataValues).then(a=>{
                if(!a){
                    redirect('/');
                    window.location.reload();
                }
            });
        });
    };

    const seatClick = (value)=>{
        const valueOfLocalStorage = localStorage.getItem(''+value);
        const thisSeat = document.getElementById(''+value);
        if(thisSeat.className.substr(0,14) !== "seat is_booked"){
            if(valueOfLocalStorage === null){
                localStorage.setItem(''+value,''+value);
                thisSeat.className += " is_chosen";
            }
            else{
                localStorage.removeItem(''+value);
                thisSeat.className === "seat is_chosen seat_gap" ? thisSeat.className = "seat seat_gap" : thisSeat.className = "seat";
            }
        }
        else{
            alert("Данное место уже забронировано")
        }
    };

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
                 seatArr.push(<button key={i+seat} id={i+1+'-'+seat} className={className} value={i+1+'-'+seat} onClick={(e)=>seatClick(e.target.value)}></button>);
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
              <article>
                  <form>
                      <input type="text" value={film} readOnly name="film"/>
                      <input type="text" value={date} readOnly name="date"/>
                      <input type="text" value={time} readOnly name="time"/>
                      <input type="text" placeholder="Введите вашу почту" required name="email"/>
                      <input type="submit" onClick={()=>bookingClick()}/>
                  </form>
              </article>
          </section>
       </main>
   );
}

export default BookingMain;