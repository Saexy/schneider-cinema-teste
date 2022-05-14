import React from 'react';

import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import lstprojects from '../../models/projects';

import "./style.css"

const Projects = () => {

    const navigate = useNavigate()

    const handleClickLearn = (id) => {
        navigate(`/projects/${id}`)
    }

    const listProjects = lstprojects.map((project, i) => 
        <div className={i % 2 == 0 ? "project left" : "project right"}>
            <div className='image'>
                <img src={require("../../assets/images/projects/" + project.image)} alt="" />
            </div>
            <div className='texts'>
                <p className='title'>{project.name}</p>
                {project.list.map((individualproject, ip) => <p className="individualprojects">{individualproject.name}</p>)}
                <a className='learn' onClick={(e) => handleClickLearn(project.id)}>≫ LEARN MORE</a>
            </div>
        </div>
    )

    return (
        <div className="projects">
            <Navbar>Projects</Navbar>
            <div className="list">
                {listProjects}
            </div>
            <Footer></Footer>
        </div>
    );
}
 
export default Projects
