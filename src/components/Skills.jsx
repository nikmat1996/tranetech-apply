import React from 'react';
import '../assets/css/skills.css'
import img from '../assets/images/ourskill_bgImg.webp';
import { skillsData as data } from './DATA'
import EachSkill from './EachSkill';


const Skills = () => {

    const SKILLS_STYLE = {
        backgroundImage: `url(${img})`
    }
    return (
        <section className='skills_section' style={SKILLS_STYLE}>
            <div className='skills_section-left'>
                <h3>Our Skills</h3>
                <h2>Optimal Integration of Information, Design, & Technology</h2>
            </div>
            <div className='skills_section-right'>
                {
                    data.map(item => (
                        <EachSkill data={item} />
                    ))
                }
            </div>

        </section>
    )
}

export default Skills