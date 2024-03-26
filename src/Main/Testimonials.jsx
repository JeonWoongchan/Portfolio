import React, { forwardRef } from 'react';
import './css/testimonials.css'
import useSectionOpacity from '../Function/useSectionOpacity';

const Testimonials = forwardRef((props, ref) => {
    return (
        <section ref={ref} id='testmonidals' className='section'>
            <div className="max-container" style={{opacity : useSectionOpacity(ref)}}>
                <h2 className='title'>Testimonials</h2>
                <p className='description'>See what they say about me</p>
                <ul className='testimonial-list'>
                    <TestimonialList num={1} name={'James Kim'} comp={'Google'}/>
                    <TestimonialList num={2} name={'Anna Jin'} comp={'Samsung'}/>
                    <TestimonialList num={3} name={'Luna Lee'} comp={'Apple'}/>
                </ul>
            </div>
        </section>
    );
})

function TestimonialList({num, name, comp}){
    return(
        <li className='testimonial'><img className='testimonial-image' src={`/images/testimonials/people${num}.webp`} alt={`people${num}`}/>
            <div className='testimonial-detail'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid repellat quia, et eligendi veniam quasi harum quod nihil, 
                voluptatem libero error. Enim sapiente perspiciatis accusamus fuga provident! Laboriosam, ipsam.</p>
                <p className=''><a href="#" className='name'>{name}</a>/{comp}</p> 
            </div>
        </li>
    )
}

export default Testimonials;

