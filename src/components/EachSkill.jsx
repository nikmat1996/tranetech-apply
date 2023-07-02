import React from 'react';
import '../assets/css/eachSkill.css'

const EachSkill = ({ data: { skill, level, items } }) => {
    
    const BAR_STYLE = {
        width: `${level}%`
    }
    return (
        <div className='skill'>
            <p>{skill}</p>
            <div className="skill__percentage">
                <div>
                    <div style={BAR_STYLE}></div>
                </div>
                <p>{level}%</p>
            </div>
            <div className="skill__items">{...items.join(', ')}</div>
        </div>
    )
}

export default EachSkill