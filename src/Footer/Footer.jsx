import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './css/footer.css'
import useScroll from '../Function/useScroll';

const Footer = forwardRef((props, ref) => {
    const {scrollY} = useScroll()

    return (
        <footer ref={ref} id='footer' className=''>
            <div className="    ">
                <ul className='footer-icon-list'>
                    <li>
                        <a href="https://github.com/JeonWoongchan"><img className='git-icon' src="/images/github_git_icon.png" /></a>
                    </li>
                    <li>
                        <a href="https://velog.io/@jchan715/posts"><img className='career-icon' src="/images/velog_logo_icon.png" /></a>
                    </li>
                </ul>
            </div>
            <p className='description'>jchan715@naver.com</p>
            <aside style={{ display: scrollY > 150 ? 'block' : 'none' }}>
                <a href="" title='back to top'><FontAwesomeIcon icon={faArrowUp} className='arrow-up-icon' /></a>
            </aside>
        </footer>
    );
})

export default Footer;

