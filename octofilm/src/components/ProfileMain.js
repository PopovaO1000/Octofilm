import '../css/auth.css';
import {Link, useNavigate} from "react-router-dom";
import {exit, update, updatePass} from "../actions/auth.js";
import Cookies from "universal-cookie";
import {useEffect, useState} from "react";
import {deleteBooking, getUserBookings} from "../actions/outputBooking";

function ProfileMain() {
    const [bookings,setBookings] = useState([]);
    const cookie = new Cookies();
    const redirect = useNavigate();

     const exit = ()=>{
        cookie.remove('id');
        cookie.remove('name');
        cookie.remove('email');
        cookie.remove('login');
        redirect('/');
        window.location.reload();
    };

    const updateClick = ()=>{
        const myForm = document.querySelector("form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                fio: formData.get('fio'),
                login: formData.get('login'),
                email: formData.get('email'),
                pwd: formData.get('pwd')
            };
            update(formDataValues).then(a=>{
                if(!a){
                    window.location.reload();
                }
            });

        });
    };
    const updatePassClick = ()=>{
        const myForm = document.querySelector("#auth_form");
        myForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            const formData = new FormData(myForm);
            const formDataValues = {
                pwd: formData.get('pwd'),
                pwd2: formData.get('pwd2')
            };
            updatePass(formDataValues).then(a=>{
                if(!a){
                    window.location.reload();
                }
            });

        });
    };
    useEffect(()=>{
        getUserBookings(cookie.get('email')).then((bookingsRow)=>{
            if(typeof bookingsRow !== "string"){
                setBookings(bookingsRow.map((oneRow)=>{
                    const dateDate = new Date(oneRow.date);
                    return(
                        <div key={oneRow.id_booking} className="booking">
                            <div className="film_name">{oneRow.film_name}</div>
                            <div>{dateDate.toLocaleString("ru",{day:'numeric',month:'short', year: 'numeric'})}</div>
                            <div>{oneRow.time.substr(0,5)}</div>
                            <div>??????: {oneRow.zal_name}</div>
                            <div>??????????: {oneRow.mesto}</div>
                            <div>????????: {oneRow.cost} ??</div>
                            <button onClick={()=>{deleteBooking(oneRow.id_booking).then((res)=>{window.location.reload()})}}>????????????????</button>
                        </div>
                    )
                })
                );
            }
        });
    },[]);
    return (
        <main className="AuthMain RegMain ProfileMain">
            <div className="booking_row">
                {bookings}
            </div>
            <h1 className="h1_profile_data">???????????? ??????????????</h1>
            <form id="auth_form1" className="change_data">
                <label>??????<sup>*</sup></label>
                <input type="text" name="fio" placeholder="?????????????? ??????" defaultValue={cookie.get('name')} required/>
                <label>??????????<sup>*</sup></label>
                <input type="text" name="login" placeholder="?????????????? ??????????" defaultValue={cookie.get('login')} required/>
                <label>??????????<sup>*</sup></label>
                <input type="text" name="email" placeholder="?????????????? ??????????" defaultValue={cookie.get('email')} required/>
                <label>????????????<sup>*</sup></label>
                <input type="password" name="pwd" placeholder="?????????????? ????????????" required/>
                <input type="submit" id="btn1" onClick={()=>{updateClick()}} value="????????????????"/>
            </form>
            <form id="auth_form" className="change_pass">
                <label>???????????? ????????????<sup>*</sup></label>
                <input type="password" name="pwd" placeholder="?????????????? ????????????" required/>
                <label>?????????? ????????????<sup>*</sup></label>
                <input type="password" name="pwd2" placeholder="?????????????? ????????????" required/>
                <input type="submit" id="btn2" onClick={()=>{updatePassClick()}} value="????????????????"/>
            </form>
            <button onClick={()=>{exit()}}>??????????</button>
        </main>
    );
}

export default ProfileMain;