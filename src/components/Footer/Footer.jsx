"use strict"

import React , {useState} from 'react';

export default function Footer() {
    return (
        <>
        <div className='text-white'>
            <div className="upper-footer bg-dark-blue py-5">
                <div className="container">
                    <div className="row text-center py-5 g-3">
                        <div className="col-md-4">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4">
                            <h3>AROUND THE WEB</h3>
                            <ul className='icons d-flex justify-content-center align-items-center list-unstyled gap-3'>
                                <li><i className="fa-brands fa-facebook"></i></li>
                                <li><i className="fa-brands fa-twitter" ></i></li>
                                <li><i className="fa-brands fa-linkedin-in"></i></li>
                                <li><i className="fa-solid fa-globe"></i></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer py-3">
                <div className="container">
                    <p className='m-0 text-center '>Copyright © Your Website 2021</p>
                </div>
            </div>
        </div>
        </>
    );
}

