import React, { forwardRef, useEffect, useState } from 'react';
import './css/about.css'
import useSectionOpacity from '../Function/useSectionOpacity'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import SlideDown from './SlideDown';
import useScroll from '../Function/useScroll';

const About = forwardRef((props, ref) => {
    const { scrollY } = useScroll();
    
    const [boxAnimation, setBoxAnimation] = useState(['base-position', 'base-position', 'base-position', 'base-position'])
    
    useEffect(()=>{ 
        if(scrollY > 800){
            setBoxAnimation(['first-slide-up ', 'second-slide-up', 'third-slide-up', 'fourth-slide-up'])
        }
    },[scrollY])

    return (
        <section ref={ref} id='about' className='section'> 
            <div className='max-container' style={{opacity : useSectionOpacity(ref)}}>
                <h2 className='title'>ABOUT ME</h2>
                <p className='description'>
                    안녕하세요. 프론트엔드 개발자를 목표로 하는 전웅찬입니다.<br/><br/> HTML, CSS, JavaScript를 시작으로 React를 통해 상태 관리와 컴포넌트 기반 구조에 대해 경험하였고,<br/>
                    SEO를 개선하고 SSR을 경험해보기 위해 NextJS를 이용한 페이지도 구현해보았습니다. <br/>
                    다양한 라이브러리, 프레임워크에 관심을 갖고 항상 배우며 성장하는 개발자를 목표하고 있습니다.
                </p>
                <ul className='major-list'>
                    <li className={`major ${boxAnimation[0]}`}>
                        <img src="/images/js_icon.png" alt="" className='major-icon'/>
                        <p className='major-title'>JavaScript</p>
                        <p className='major-description'>프론트엔드 개발에 기본이 되는 JavaScript부터 제 것으로 만들기 위해 노력했습니다.</p>
                    </li>
                    <li className={`major ${boxAnimation[1]}`}>
                        <img src="/images/react_icon.png" alt="" className='major-icon'/>
                        <p className='major-title'>React</p>
                        <p className='major-description'>상태 관리와 컴포넌트 재사용성을 고려한 UI를 개발하고자 노력하였습니다. </p>
                    </li>
                    <li className={`major ${boxAnimation[2]}`}>
                        <img src="/images/nextjs_icon.ico" alt="" className='major-icon'/>
                        <p className='major-title'>NextJs</p>
                        <p className='major-description'>리액트와 함께 서버 기능도 구현해보고자 MongoDB를 이용하여 구현해보았습니다.</p>
                    </li>
                </ul>
                <ul className={`career-list ${boxAnimation[2]}`}>
                    <li className='career'>
                        <a href="https://github.com/JeonWoongchan"><img className='git-icon' src="/images/github_git_icon.png" /></a>
                    </li>
                    <li className='career'>
                        <a href="https://velog.io/@jchan715/posts"><img className='career-icon' src="/images/velog_logo_icon.png" /></a>
                    </li>
                </ul>
            </div>
            <SlideDown handleMenuClick={props.handleMenuClick} next={'Skills'}/>
        </section>
    );
})

export default About;

