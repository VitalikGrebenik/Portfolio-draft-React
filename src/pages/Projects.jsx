import React from 'react'
import Projectsitem from '../components/myproject/Projectsitem'

import {ProjectList} from '../components/helper/Helper.js'


import '../style/project.scss'

const Projects = () => {
  return (
    <>
            <div className='projects_title'>
          <h1>My personal Projects</h1>
        </div>
      <div className='projects'>

        <div className='projectList'>
          {ProjectList.map((project, idx) => {
              return (
                <Projectsitem id={idx} name={project.name} image={project.image} />
              );
            })}
        </div>
      </div>
    </>
  )
}

export default Projects
