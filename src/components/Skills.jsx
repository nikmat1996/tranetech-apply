import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/skills.css'
import img from '../assets/images/ourskill_bgImg.webp';
import { skillsData as data } from './DATA'
import EachSkill from './EachSkill';


const Skills = () => {

    const skillsRef = useRef()
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cb = ([{isIntersecting}]) => {
            if (isIntersecting)
                setIsVisible(true)
        }
        const skillObserver = new IntersectionObserver(cb)

        skillObserver.observe(skillsRef.current)
    }, [])
    

    const SKILLS_STYLE = {
        backgroundImage: `url(${img})`
    }
    return (
        <section className='skills_section' style={SKILLS_STYLE}>
            <div className='skills_section-left'>
                <h3>Our Skills</h3>
                <h2>Optimal Integration of Information, Design, & Technology</h2>
            </div>
            <div className='skills_section-right' ref={skillsRef}>
                {
                    data.map(item => (
                        <EachSkill key={item.skill} data={item} isVisible={isVisible} />
                    ))
                }
            </div>

        </section>
    )
}

export default Skills