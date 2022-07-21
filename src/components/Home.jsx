import React from 'react'
import HeroImage from "../assets/HeroImage.png";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='vai-black h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='text-white max-w-screen-lg mx-auto flex flex-col items-center md:flex-row justify-center h-full'>
            
            <div>
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Software Developer</h2>
                <p className='text-gray-500 py-5 max-w-lg'>
                    As a 3rd Computer Science student at the Academic College of Tel-Aviv Yaffo,
                    I'm looking for my first student position as a Software Engineer,
                    I'm a team player, problem-solver and highly motivateed to learn and Improve. 
                </p>

                <div className="flex">
                    <Link to="portfolio" smooth duration={500} className='group curser-pointer bg-gradient-to-r from-cyan-700 to-blue-600 text-white w-fit px-6 py-3 my-2 flex items-center rounder-md'>
                                My Portfolio   
                        <span className="group-hover:rotate-90">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                    <button className='ml-4 group curser-pointer bg-gradient-to-r from-cyan-700 to-blue-600 text-white w-fit px-6 py-3 my-2 flex items-center rounder-md'>
                        Download CV
                        <span className="group-hover:rotate-90">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto h-1/3 w-1/3 '/>
        </div>
    </div>
  )
}

export default Home