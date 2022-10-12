import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../components/home";
import Contact from "../components/contact";
import Post from "../components/post";


const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="article/:id" element={<Post/>}/>
            </Routes>
        </MainLayout>
        <Footer/>
    </BrowserRouter>
);

export default AppRouter;