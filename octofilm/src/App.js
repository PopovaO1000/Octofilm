import { Route, Link, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';

import './css/fonts.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexMain from "./components/IndexMain";
import AuthMain from "./components/AuthMain";
import SecondHeader from "./components/SecondHeader";
import NewsMain from "./components/NewsMain";
import RegMain from "./components/RegMain";
import ContactMain from "./components/ContactMain";
import FilmsMain from "./components/FilmsMain";
import ScheduleMain from "./components/ScheduleMain";

function App() {
    let header = <SecondHeader/>;
    let location = useLocation();
    if(location.pathname == '/'){
        header = <Header/>;
    };
  return (
    <div className="App">
        {header}
            <div>
                <Routes>
                    <Route index element={<IndexMain />} />
                    <Route path="/auth" element={<AuthMain />} />
                    <Route path="/reg" element={<RegMain />} />
                    <Route path="/news" element={<NewsMain />} />
                    <Route path="/contacts" element={<ContactMain />} />
                    <Route path="/films" element={<FilmsMain />} />
                    <Route path="/schedule" element={<ScheduleMain />} />
                </Routes>
            </div>
            <Footer/>
    </div>
  );
}

export default App;
