"use strict"

import React , {useState} from 'react';

export default function Card(props) {
    let img = props?.img;
    
    return (
        <div onClick={()=>{props.changeImgSrc(img.src)}} className='col-lg-4 col-md-6 col-sm-12'data-bs-toggle="modal" data-bs-target={"#"+img.id}>
            <div className='position-relative card'>
            <img className='w-100 rounded-3' src={img?.src} alt="logo" />
            <div className="layer bg-blue position-absolute top-0 bottom-0 start-0 end-0 bg-light-green rounded-3 d-flex align-items-center justify-content-center">
                <i className='fa fa-plus text-white fa-6x'></i>
            </div>
            </div>
        </div>
    );
}

