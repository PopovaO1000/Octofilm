import '../css/index.css';
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOneSeans} from "../actions/outputBooking.js";
import {bookingInsert} from "../actions/booking.js";
import Cookies from 'universal-cookie';

function BookingMain() {
    const redirect = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const cookie = new Cookies();

    const bookingClick = ()=>{
        const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            if(localStorage.length === 0){
                alert("Пожалуйста, выберете места")
            }
            else{
                const formData = new FormData(myForm);
                let arrMesto = [];
                for(let mesto in localStorage){
                    if(mesto === 'length')
                        break;
                    arrMesto.push(mesto);
                }
                localStorage.clear();
                const formDataValues = {
                    email: formData.get('email'),
                    id_seans:id,
                    seatArr: arrMesto
                };
                bookingInsert(formDataValues).then(a=>{
                    if(!a){
                        alert("Места забронированы");
                        redirect('/');
                        window.location.reload();
                    }
                });
            }
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

   useEffect(()=>{
      getOneSeans(id).then((seansObj)=>{
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
   let inputEmail =  <input type="email" placeholder="Введите вашу почту" required name="email"/>;
   if(cookie.get('email') !== undefined){
       inputEmail =  <input type="email" value={cookie.get('email')} readOnly name="email"/>;
   }
   return (
       <main className="BookingMain">
          <section>
              <div>Экран</div>
              <article className="Booking_seats">
                  {booking}
              </article>
              <article>
                  <form>
                      {inputEmail}
                      <input type="submit" onClick={()=>bookingClick()}/>
                  </form>
              </article>
          </section>
       </main>
   );
}

export default BookingMain;