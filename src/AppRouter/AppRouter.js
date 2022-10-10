import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/home";
import Contact from "../components/contact";
import Posts from "../components/posts";


const AppRouter = () => (
    <BrowserRouter>
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="article/:id" element={<Posts/>}/>
            </Routes>
        </>
    </BrowserRouter>
);

export default AppRouter;