import { useEffect, useState } from 'react';
import useScroll from '../Function/useScroll'

//section의 스크롤 위치에 따라 opacity 조절하는 함수
const useSectionOpacity = (ref)=>{
    const [scrollOpacity, setScrollOpacity] = useState(1)

    useEffect(() => {
        const sectionY = ref.current.getBoundingClientRect().y
        const newOpacity = (1 / 1000) * sectionY + 1

        if(sectionY <= 0 && sectionY >= -600){
            setScrollOpacity(Math.max(0, newOpacity))
        }
    }, [useScroll()])

    return scrollOpacity
}

export default useSectionOpacity;
