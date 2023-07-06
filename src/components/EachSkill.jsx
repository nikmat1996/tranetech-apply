import React, { useEffect, useState } from 'react';
import '../assets/css/eachSkill.css'

const EachSkill = ({ data: { skill, level, items }, isVisible }) => {
    const [levelPercentage, setLevelPercentage] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const incresingNumInterval = setInterval(() => {
                console.log(levelPercentage, " is levelPercentage. ",level, " is level." )
                setLevelPercentage(prev => {
                    if (prev === level)
                        clearInterval(incresingNumInterval)
                    return prev < level ? prev + Math.round(level / 20) : level
                })
                
            }, 100)

            return () => clearInterval(incresingNumInterval)
        }
     }, [isVisible])
    
    
    console.log(isVisible, "isVisible")

    const BAR_STYLE = {
        width: `${isVisible ? level : 0}%`
    }
    return (
        <div className='skill'>
            <p>{skill}</p>
            <div className="skill__percentage">
                <div style={BAR_STYLE}></div>
                <p>{levelPercentage}%</p>
            </div>
            <div className="skill__items">{...items.join(', ')}</div>
        </div>
    )
}

export default EachSkill