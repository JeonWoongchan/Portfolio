import React, { forwardRef, useState } from 'react';
import './css/work.css'
import useSectionOpacity from '../Function/useSectionOpacity';

const Work = forwardRef((props, ref) => {
    const [isSelected, setIsSelected] = useState('All');
    const PROJECT_LIST = [
        { id: 1, 'category': 'Blog', 'title': '리액트 로그인 처리', 'img': '/project/React.jpeg', 'detail': 'JWT 로그인 방식', 'url': 'https://velog.io/@jchan715/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%B2%98%EB%A6%ACJWT' },
        { id: 2, 'category': 'Blog', 'title': 'CSR vs SCR', 'img': '/project/csr.png', 'detail': 'CSR과 SCR에 대한 이해', 'url': 'https://velog.io/@jchan715/CSR%EA%B3%BC-SSR' },
        { id: 3, 'category': 'Blog', 'title': '캘린더 구현', 'img': '/project/calendar0.png', 'detail': '캘린더 기능 구현방식', 'url': 'https://velog.io/@jchan715/React-%EC%BA%98%EB%A6%B0%EB%8D%94-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0' },
        { id: 4, 'category': 'Blog', 'title': 'BOM & DOM', 'img': '/project/dombom.jpg', 'detail': 'BOM과 DOM에 대한 이해', 'url': 'https://velog.io/@jchan715/BOM%EA%B3%BC-DOM%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4' },
        { id: 5, 'category': 'Blog', 'title': 'useRef', 'img': '/project/React.jpeg', 'detail': 'useRef 사용법', 'url': 'https://velog.io/@jchan715/React-useRef%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%9B%90%ED%95%98%EB%8A%94-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9C%84%EC%B9%98%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%8F%99%EC%8B%9C%ED%82%A4%EA%B8%B0' },
        { id: 6, 'category': 'React', 'title': '레스토랑 WooDy', 'img': '/project/resaurantCover.png', 'detail': '예약 가능한 레스토랑 사이트', 'url': 'https://github.com/JeonWoongchan/restaurant' },
        { id: 7, 'category': 'React', 'title': '커뮤니티OTT', 'img': '/project/ottCover.png', 'detail': '디즈니플러스 클론코딩 + 커뮤니티', 'url': 'https://github.com/JeonWoongchan/BomBomOTT' },
        { id: 8, 'category': 'React', 'title': 'Weather Life', 'img': '/project/weatherCover.png', 'detail': '날씨 정보 제공 사이트', 'url': 'https://github.com/JeonWoongchan/weatherLife' },
        { id: 9, 'category': 'NextJs', 'title': 'NextJS Practice', 'img': '/project/forum.png', 'detail': 'NextJS 연습용 게시판', 'url': 'https://github.com/JeonWoongchan/NextJsPractice' }]

    return (
        <section ref={ref} id='work' className='section'>
            <div className="max-container" style={{ opacity: useSectionOpacity(ref) }}>
                <h2 className='title'>My work</h2>
                {/* <p className='description'>Projects</p> */}
                <ul className='work-list'>
                    <li className='work'>
                        <button className={`work-btn ${isSelected == 'All' ? 'btn-selected' : ''}`}
                            onClick={() => { setIsSelected('All') }}>All<span className='work-btn-span'>8</span></button>
                    </li>
                    <li className='work'>
                        <button className={`work-btn ${isSelected == 'Blog' ? 'btn-selected' : ''}`}
                            onClick={() => { setIsSelected('Blog') }}>Blog<span className='work-btn-span'>4</span></button>
                    </li>
                    <li className='work'>
                        <button className={`work-btn ${isSelected == 'React' ? 'btn-selected' : ''}`}
                            onClick={() => { setIsSelected('React') }}>React<span className='work-btn-span'>3</span></button>
                    </li>
                    <li className='work'>
                        <button className={`work-btn ${isSelected == 'NextJs' ? 'btn-selected' : ''}`}
                            onClick={() => { setIsSelected('NextJs') }}>NextJS<span className='work-btn-span'>1</span></button>
                    </li>
                </ul>
                <ul className='project-list'>
                    {PROJECT_LIST.map((a, i) => {
                        return (
                            <ProjectList key={a.id} num={a.id} title={a.title} img={a.img} detail={a.detail} category={a.category} url={a.url} isSelected={isSelected} />
                        )
                    })}
                </ul>
                {/* <SlideDown handleMenuClick={props.handleMenuClick} next={'Testimonials'} /> */}
            </div>
        </section>
    );
})

function ProjectList({ num, img, title, detail, category, url, isSelected }) {

    if (isSelected != 'All' && category !== isSelected) {
        return
    } else {
        return (
            <li className='project'>
                <a href={url} target='_blank'>
                    <img className='project-image' src={img} alt={`project${num}`} />
                    <div className='project-metadata'>
                        <h3 className='project-title'>{title}</h3>
                        <p className='project-detail'>{detail}</p>
                    </div>
                </a>
            </li>
        )
    }

}

export default Work;
