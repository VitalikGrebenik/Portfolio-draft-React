import React from 'react'

import "../style/home.scss"

const Home = () => {
  return (
	<div className='Home'>
    <div className='about'>
      <h2> Hi, My Name is Vitalik</h2>
      <div className='prompt'>
        <p>A software developer with a passion for learning and creating.</p>
      </div>
    </div>
    <div className='containerskills'>
      <div className="skills">
        <h1> Skills</h1>
        <ul className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, SCSS, Npm, Githab , Git , BEM, Api, TypeScript
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Home