import React from 'react';
import './styles/skillLogo.css';

function SkillLogo(props) {
  const { logoName, logoLink } = props;
  return (
    <>
      <div className='skill-logo'>
        <img src={logoLink} alt="logo" />
      </div>
      <div>
        {logoName}
      </div>
    </>
  );
}

export default SkillLogo;