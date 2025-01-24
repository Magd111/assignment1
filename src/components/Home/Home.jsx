"use strict"
import React , {useState} from 'react';
import logo from '../../assets/avataaars.svg'
import Line from '.././Line/Line'

export default function Home() {
    return (
        <>
        <div className="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center bg-light-green">
            <div>
            <img className='w-100 d-block' src={logo} alt="logo" />
            </div>
            <h2 className='text-center fs-1 fw-bold text-white text-uppercase'>start Framework</h2>
            <Line/>
            <p className='text-white '>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </>
    );
}

