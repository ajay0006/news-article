import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import Contact from "../components/contact";
import Posts from "../components/posts";


const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="article/:id" element={<Posts/>}/>
            </Routes>
        </MainLayout>
        <Footer/>
    </BrowserRouter>
);

export default AppRouter;