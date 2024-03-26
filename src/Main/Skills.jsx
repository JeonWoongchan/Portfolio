import React, { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import './css/skills.css'
import useSectionOpacity from '../Function/useSectionOpacity';
import SlideDown from './SlideDown';
import useScroll from '../Function/useScroll';
import { motion } from 'framer-motion';

const Skills = forwardRef((props, ref) => {

    const SkillList = [{ 'name': 'HTML', 'content': '편하게 사용할 수 있어요', 'img': '/images/html_icon.png' },
    { 'name': 'CSS', 'content': '편하게 사용할 수 있어요', 'img': '/images/css_icon.png' },
    { 'name': 'JavaScript', 'content': '주로 사용하는 언어에요', 'img': '/images/javascript_icon.png' },
    { 'name': 'React', 'content': '가장 많이 사용해봤어요', 'img': '/images/react_icon2.png' },
    { 'name': 'NextJS', 'content': '최근 공부중인 프레임워크에요', 'img': '/images/nextjs_icon.png' }]

    const ToolList = [{ 'name': 'Visual Studio Code', 'content': '가장 많이 사용했어요', 'img': '/images/vsCode.png' },
    { 'name': 'Intellij', 'content': '팀프로젝트에 많이 사용했어요', 'img': '/images/intellij.png' },]

    const EtcList = [{ 'name': 'Git', 'content': '팀프로젝트에 많이 사용했어요', 'img': '/images/git.png' },
    { 'name': 'Vercel', 'content': '배포할 때 사용했어요', 'img': '/images/vercel.png' },]

    const { scrollY } = useScroll();
    const [boxAnimation, setBoxAnimation] = useState(['base-position', 'base-position', 'base-position'])

    const [more1, setMore1] = useState([])
    const [more2, setMore2] = useState([])
    const [more3, setMore3] = useState([])

    useEffect(() => {
        setMore1(new Array(SkillList.length).fill(false))
        setMore2(new Array(ToolList.length).fill(false))
        setMore3(new Array(EtcList.length).fill(false))
    }, [])

    useEffect(() => {
        if (scrollY > 1700) {
            setBoxAnimation(['slide-right', 'first-slide-left', 'second-slide-left'])
        }
    }, [scrollY])

    const moreHandler = (num, i) => {
        if (num === 1) {
            let copy = [...more1]
            if (!more1[i]) { 
                copy[i] = true;
                setMore1(copy)
            } else { 
                copy[i] = false;
                setMore1(copy)
            }
        } else if (num === 2) {
            let copy = [...more2]
            if (!more2[i]) {
                copy[i] = true;
                setMore2(copy)
            } else {
                copy[i] = false;
                setMore2(copy)
            }
        } else if (num === 3) {
            let copy = [...more3]
            if (!more3[i]) {
                copy[i] = true;
                setMore3(copy)
            } else {
                copy[i] = false;
                setMore3(copy)
            }
        }
    }

    return (
        <section ref={ref} id='skills' className='section'>
            <div className="max-container" style={{ opacity: useSectionOpacity(ref) }}>
                <h2 className='title'>SKILLS</h2>
                <p className='description'>
                    JavaScript로 시작하여 React와 NextJS까지 경험해 보았습니다. <br/>React는 제가 가장 많이 사용한 라이브러리로 React를 사용하여 다양한 페이지를 제작할 수 있습니다.<br/><br/>
                    팀 프로젝트를 하면서 생긴 백엔드 기능에 대한 관심으로 NextJs도 사용해 보았으며, <br/>NextJs 외에 TypeScript 및 다른 라이브러리에도 관심을 가지고 공부할 예정입니다.<br/>
                    {/* 또한 실무에서 협업에 필요한 Git에 대해 경험하기 위해 팀 프로젝트에서 Git을 사용해보았습니다. */}
                </p>
                <p className='description-detail'>
                </p>
                <div className='skills-container'>
                    <section className={`skills-coding ${boxAnimation[0]}`}>
                        <h3 className='section-title'>Conding Skills</h3>
                        {
                            SkillList.map((a, i) => {
                                return (
                                    <CreateSkillList a={a} i={i} num={1} more={more1} moreHandler={moreHandler} key={i} />
                                )
                            })
                        }
                    </section>
                    <section className={`skills-tools ${boxAnimation[1]}`}>
                        <h3 className='section-title'>Tools</h3>
                        {
                            ToolList.map((a, i) => {
                                return (
                                    <CreateSkillList a={a} i={i} num={2} more={more2} moreHandler={moreHandler} key={i} />
                                )
                            })
                        }
                    </section>
                    <section className={`skills-etc ${boxAnimation[2]}`}>
                        <h3 className='section-title'>Etc</h3>
                        {
                            EtcList.map((a, i) => {
                                return (
                                    <CreateSkillList a={a} i={i} num={3} more={more3} moreHandler={moreHandler} key={i} />
                                )
                            })
                        }
                    </section>
                </div>
                <p className='skill-more'>SKILL에 마우스 올려 더보기</p>
            </div>
            <SlideDown handleMenuClick={props.handleMenuClick} next={'Work'} />
        </section>
    );
})

function CreateSkillList({ a, i, num, more, moreHandler }) {

    return (
        <ul className='section-list'>
            <li className='skill'>
                <motion.span className='skill-name' onMouseEnter={()=>{ moreHandler(num, i) }} onMouseLeave={()=>{ moreHandler(num, i) }}
                    initial={{ scale : 1 }} 
                    animate={{ scale :[1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }} 
                    whileHover={{ scale: 1.1 , transition: { duration: 0.2 }}}>
                    <img className='skill-img' src={a.img} alt="" />{a.name}
                {
                    more[i] ? <span className='skill-detail'>{a.content}</span> : null
                }
            </motion.span>
        </li>
        </ul >
    )
}

export default Skills;

