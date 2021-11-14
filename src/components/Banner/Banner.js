import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <div className='mb-5 position-relative text-center'>
                <div>
                    <img className='img-fluid w-100' src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-quartz-watch-promotion-season-atmospheric-black-banner-image_184423.jpg" alt="" />
                </div>
                <div className='info text-light'>
                    <p>BEST Watches FOR YOUR DAILY LIFE</p>
                    <h1>Smart Watches</h1>
                    <Button id='btn-get-started' variant='light' className='m-0 mt-lg-3 w-50 text-uppercase'>Visit Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;