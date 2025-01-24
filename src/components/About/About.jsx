import React , {useState} from 'react';
import Line from '../line/line';

export default function About() {
    return (
        <>
        <div className="min-vh-100 w-100 bg-light-green d-flex justify-content-center align-items-center flex-column">
            <h2 className='text-uppercase fw-bold fs-1 text-white'>about component</h2>
            <Line/>
            <div className="container">
            <div className="row text-white">
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

