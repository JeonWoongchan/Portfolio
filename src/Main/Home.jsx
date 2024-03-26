import React, { forwardRef, useEffect, useState } from 'react';
import './css/home.css'
import useSectionOpacity from '../Function/useSectionOpacity'
import SlideDown from './SlideDown';
import TypeIt from 'typeit-react';

const Home = forwardRef((props, ref) => {

    return (
        <section ref={ref} id='home' className='section'>
            <div style={{ opacity: useSectionOpacity(ref) }} className='max-container home-main' >
                <img className='home-image' src="/images/profile.png" alt="" />
                <TypeIt
                    options={{
                        speed: 80,
                        waitUntilVisible: true,
                        cursor : false
                    }}
                >
                    <h1 className='title'>안녕하세요 <br /> <span className='title-span'>전웅찬</span>의 포트폴리오 사이트입니다</h1>
                </TypeIt>
                <p className='description'>
                    다양한 경험을 통해 항상 발전하는 프론트엔드 개발자를 목표로 하고 있습니다.
                </p>
                <a className='contact-btn' href="">Contact Me</a>
            </div>
            <SlideDown handleMenuClick={props.handleMenuClick} next={'About'} />
        </section>
    );
});

export default Home;
