import React from 'react'
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../components/helper/Helper.js";
import "../style/projectDisplay.scss";

const ProjectDisplay = () => {
	const { id } = useParams();
	const project = ProjectList[id];
	return (
		<div className='containerproject'>
			<div className="project">
				<h1> {project.name}</h1>
					<img src={project.image}/>
				<p>
				<b>Skills:</b> {project.skills}
				</p>
				<div className='githab' onClick={() => window.open(project.githab)}></div>
			</div>
		</div>
	);
}

export default ProjectDisplay