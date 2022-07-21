import React from "react";

import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import java from "../assets/experience/java.png";
import node from "../assets/experience/node.png";

const Experience = () => {
  const experiences = [
    {id: 1,title: "HTML",src: html,style:'shadow-orange-500'},
    {id: 2,title: "CSS",src: css,style:'shadow-orange-500'},
    {id: 3,title: "JavaScript",src: javascript,style:'shadow-orange-500'},
    {id: 4,title: "React",src: reactImage,style:'shadow-orange-500'},
    {id: 5,title: "Java",src: java,style:'shadow-orange-500'},
    {id: 6,title: "Node JS",src: node,style:'shadow-orange-500'},
  ];

  return (
    <div name='experience' className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4x font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>
                <p className="py-6">
                    These are the technologies that i worked with !
                </p>
            </div>


            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                
                {experiences.map(({id,src,title,style})=>(
                     <div key={id} 
                     className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                     <img src={src} alt="" className="w-20 mx-auto"/>
                     <p className="mt-4">{title}</p>
 
                 </div>
                ))
                }
            </div>


        </div>
    </div>
      
  );
};

export default Experience;