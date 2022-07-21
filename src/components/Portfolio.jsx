import React from 'react'
import JS from '../assets/portfolio/JS.png';
import ReviewsApp from '../assets/portfolio/ReviewsApp.png';
import BAC from '../assets/portfolio/BAC.jpg'



const Portfolio = () => {
    const portfolios=[{id:1,src:JS,link:"https://github.com/lonniebe/Social-Network-JS1.git"},
                      {id:2,src:ReviewsApp,link:"https://github.com/lonniebe/Reviews-Web-Application.git"},
                      {id:3,src:BAC,link:"https://github.com/lonniebe/Bulls-Cows-Game.git"}]




  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex-flex-col
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here:</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {       portfolios.map(({id,src,link})=>(
                    
                    <div key={id}  className={`shadow-md shadow-gray-600 rounded-lg`}>
                    <img src={src} alt="" className='rounder-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href={link}>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-90">Code</button>
                        </a>
                    </div>
                    </div>
                    ))}
                    </div>



            

        </div>
    </div>
  )
}

export default Portfolio