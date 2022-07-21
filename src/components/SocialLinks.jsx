import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'


const SocialLinks = () => {
    const links=[{id:1,child:(<>Linkedin <FaLinkedin size={30}/></>),href:"www.linkedin.com/in/lonnieberry"},
                 {id:2,child:(<>Github <FaGithub size={30}/></>),href:"https://github.com/lonniebe"},
                 {id:3,child:(<>Email <HiOutlineMail size={30}/></>),href:"mailto:lonchbe@gmail.com"} ]


  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed" >
        <ul>
          {links.map(({id,child,href})=> (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounder-md duration-300 bg-gray-500 rounder-tr-md"}>
                <a className='flex justify-between items-center w-full text-white' href={href}>
                  {child}
                </a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default SocialLinks