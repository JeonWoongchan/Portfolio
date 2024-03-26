import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SlideDown(props) {
    return (
        <div className='slide-down' onClick={() => { props.handleMenuClick(props.next) }}>
            <MdKeyboardArrowDown className="slide-down-btn" />
        </div>
    );
}

