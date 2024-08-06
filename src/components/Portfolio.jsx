import React from 'react'
import project1 from "./../assets/images/project1.png"
import project2 from "./../assets/images/project2.png"
import project3 from "./../assets/images/project3.png"
import project4 from "./../assets/images/project4.png"
import project5 from "./../assets/images/project5.png"

import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal'

const projects = [
    {
        img: project1,
        title: "Project #1",
        description: "Restaurent Website using React and Tailwind Css.",
        links: {
            site: "https://restaurent-zeta.vercel.app/",
            github: "#",
        },
    },
    {
        img: project2,
        title: "Project #2",
        description: "Space Website using React, Tailwind Css.",
        links: {
            site: "https://space-vert.vercel.app/",
            github: "#",
        },
    },
    {
        img: project3,
        title: "Project #3",
        description: "A Hotstar Website with various features.",
        links: {
            site: "https://hotstar-jet.vercel.app/",
            github: "#",
        },
    },
    {
        img: project4,
        title: "Project #4",
        description: "A Corporate Website using React and Tailwind css.",
        links: {
            site: "https://corporate-website-eta.vercel.app/",
            github: "#",
        },
    },
    {
        img: project5,
        title: "Project #5",
        description: "Spotify Website using Html, Css, Javascript",
        links: {
            site: "#",
            github: "#",
        },
    },
]


function Portfolio() {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>

            <h2 className='text-3xl font-bold uppercase text-gray-200 mb-8'>Portfolio</h2>
            {
                projects.map((project, index) => (
                    <Reveal>
                    <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className='w-full md:w-1/2 p-4'>
                            <img 
                            src={project.img} 
                            alt={project.title}
                            className='w-full h-full object-cover rounded-lg shadow-lg'
                            
                            />


                        </div>
                        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">

                        <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className="flex space-x-4 ">
                                <a href={project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-800 transition duration-300'>View Site</a>
                                <a href={project.links.github} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-800 transition duration-300'><AiOutlineGithub/></a>
                            </div>
                        
                        </div>


                    </div>
                    </Reveal>

                ))
            }

        </div>
    )
}

export default Portfolio
