import React from 'react';
import Card from '../common/card';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import './styles/skills.css';
import SkillLogo from '../common/skillLogo';
import INFO from '../../data/user';

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <Card
          icon = {faScrewdriverWrench}
          title = 'Skills'
          body = {
            <div className='skills-container'>
              {INFO.skills.map((skills, index)=>(
                <div className='skills-item' key={index}>
                  <SkillLogo
                    logoName ={skills.logoName}
                    logoLink ={skills.logoLink}
                  />
                </div>
              ))}
            </div>
          }
        />
      </div>
      
    </>  
  )
}

export default Skills;