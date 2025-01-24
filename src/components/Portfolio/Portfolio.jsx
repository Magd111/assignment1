"use strict"

import React , {useState} from 'react';
import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import Card from '.././Card/Card';

export default function Portfolio() {
    let images =[{
        id: "image1", src:port1
    },
    {
        id: "image2", src:port2
    },
    {
        id: "image3", src:port3
    },
    {
        id: "image4", src:port1
    },
    {
        id: "image5", src:port2
    },
    {
        id: "image6", src:port3
    }
    ]
    return (
        <>
        <div className='light-bg text-dark bg-light text-center flex-grow-1 pt-5 mt-5 align-self-stretch'>
            <h2 className='dark-heading text-uppercase fw-bold fs-2'>portfolio component</h2>
            <div className='d-flex justify-content-center align-items-center my-3 '>
                <div className="line line-dark me-2"></div>
                <i className="fa-solid fa-star"></i>
                <div className="line line-dark ms-2"></div>
            </div>
            <div className="container">
                <div className="row g-5 py-5">
                    {images.map((img)=><Card key={img.id} img={img} />)}
                </div>
            </div>
            {images.map((img)=><>
                <div className="modal fade" id={img.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      
                      <div className="modal-body">
                        <img src={img.src} alt="" className='w-100 rounded-3' />
                      </div>
                    </div>
                  </div>
                </div>
            </>
            )}
        </div>
        </>
    );
}

