import React, { useEffect, useState } from 'react';
import './css/header.css'
import '../Function/useScroll'
import useScroll from '../Function/useScroll';

export default function Header(props) {
    const {scrollY} = useScroll()
    const menuList = ['Home', 'About', 'Skills', 'Work', 'Contact']

    return (
        <header className='header' style={{ backgroundColor: scrollY < 100 ? 'transparent' : ''}}>
            <div className="logo">
                <img className='icon' src="/images/profile.png" alt="로고" />
                <a href="#home" className='logo-text'>Woongchan</a>
            </div>
            <nav className='header-nav'>
                <ul className='header-menu'>
                    {menuList.map((a, i) => <Menu key={i} menu={a} handleMenuClick={props.handleMenuClick} />)}
                </ul>
            </nav>
        </header>
    );
}

function Menu(props) {
    return (

        <li><a className='header-item' onClick={() => { props.handleMenuClick(props.menu) }}>{props.menu}</a></li>
    )
}

