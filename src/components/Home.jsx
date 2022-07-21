import React from 'react'
import HeroImage from "../assets/HeroImage.png";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

import DownloadLink from "react-download-link";

const Home = () => {
  return (
    <div name="home" className='vai-black h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='text-white max-w-screen-lg mx-auto flex flex-col items-center md:flex-row justify-center h-full'>
            
            <div className='items-center md:text:black'>
                <h2 className="text-4xl sm:text-7xl font-bold text-white">Hi! I'm Lonnie</h2>
                <p className='ml-1 sm:lg-4 text-gray-500 py-5 max-w-lg '>
                    I'm a 3rd Computer Science student at the Academic College of Tel-Aviv Yaffo,
                    I'm looking for my first student position as a Software Engineer,
                    I'm a team player, problem-solver and highly motivateed to learn and Improve. 
                </p>

                <div className="flex flex-row ml-2 mr-2">
                    <Link to="portfolio" smooth duration={500} className='left-align group curser-pointer bg-gradient-to-r from-cyan-700 to-blue-600 text-white w-fit px-6 py-3 my-2 flex items-center rounder-md'>
                                My Portfolio   
                        <span className="group-hover:rotate-90">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                    <a href='/CV.pdf' download className='ml-4 group curser-pointer bg-gradient-to-r from-cyan-700 to-blue-600 text-white w-fit px-6 py-3 my-2 flex items-center rounder-md'>Download CV
                    <span className="group-hover:rotate-90">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </a>
                </div>
            </div>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
    </div>
  )
}

export default Home