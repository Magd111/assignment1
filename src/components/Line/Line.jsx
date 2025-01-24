"use strict"

import React , {useState} from 'react';

export default function Line() {
    return (
        <div className='d-flex justify-content-center align-items-center gap-2 py-2'>
            <div className="line"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="line"></div>
        </div>
    );
}

