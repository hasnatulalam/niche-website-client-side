import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <div className='mb-5 position-relative text-center'>
                <div>
                    <img className='img-fluid w-100' src="https://i.ibb.co/mFX1jKY/banner-Bike2jpg.jpg" alt="" />
                </div>
                <div className='info text-light'>
                    <p>BEST BIKE FOR YOUR DAILY LIFE</p>
                    <h1>Smart Bike</h1>
                    <Button id='btn-get-started' variant='light' className='m-0 mt-lg-3 w-50 text-uppercase'>Visit Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;