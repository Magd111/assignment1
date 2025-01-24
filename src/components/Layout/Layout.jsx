"use strict"

import React , {useState} from 'react';
import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'
import { Outlet } from 'react-router-dom';
import Home from './../Home/Home';

export default function Layout() {
    return (
        <>
        <div className='d-flex flex-column min-vh-100 justify-content-between'>
            <Navbar/>
            <div className='min-vh-100 pt-5 d-flex justify-content-center align-items-center'>
            <Outlet/>
            </div>
            
            <Footer/>
        </div>
        </>
    );
}

