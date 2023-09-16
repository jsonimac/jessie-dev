import React from 'react';
import Card from '../common/card';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import './styles/skills.css';

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <Card
          icon = {faScrewdriverWrench}
          title = 'Skills'
          body = {
            <div className='skills-container'>
              <div className='skills-item'>
                hello
              </div>
              <div className='skills-item'>
                hello2
              </div>
              <div className='skills-item'>
                hello
              </div>
              <div className='skills-item'>
                hello2
              </div>
              <div className='skills-item'>
                hello
              </div>
              <div className='skills-item'>
                hello2
              </div>
            </div>
          }
        />
      </div>
      
    </>  
  )
}

export default Skills;