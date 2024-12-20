import React from "react";
import './proj.css'
import ProjCard from "./card";
import quiz from '../assets/images/download.webp'
import todo from '../assets/images/todo-app-logo.webp'
import turo from '../assets/images/turoapp.webp'

const Projects = () => {
    return (

        <div id="Projects" className="proj-cont">
            <div className="proj-cont-child">
                <h1 className="proj-heading">
                    Projects
                </h1>
                <div className="proj-card">
                    <ProjCard
                        quizlogo={quiz}
                        btn1={<button className="proj-openBtn" onClick={()=> window.open('https://subhan-quizapp.netlify.app/')}>visit</button>}
                    />
                    <ProjCard
                     turologo={turo}
                     btn3={<button className="proj-openBtn" onClick={()=> window.open('https://subhan-react-turoapp.netlify.app/')}>visit</button>}
                        
                        />
                
                    <ProjCard
                    todologo={todo} 
                    btn2={<button className="proj-openBtn" onClick={()=> window.open('https://subhan-todoapp-js.netlify.app/')}>visit</button>}
                    />
            
                </div>
<div className="proj-foot">
                {/* <button>More Projects</button> */}
</div>

            </div>

        </div>
    )
}
export default Projects;