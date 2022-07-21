import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-10'>
            <div>Hey ! 👋</div>
            <div>My Name is Lonnie Berry, </div>
            <div>I'm looking for my first challange as a Student/Intern Software Engineer.</div>
            <div>Ungraduated BSc Computer Science in the 3rd year of study.</div>
            <div>Experienced in Python, Java, Javascript, C#, C++, C, AWS.</div>
            <div>I'm a team player, Fast learner, and highly motivated to learn and improve.</div>
            <div>Always in process and fully motivated about learning and experiencing new areas and knowledge.</div>
            <br></br>
            <div>I Would love to hear from you !🤟 </div>
            </p>
        </div>
    </div>
  )
}

export default About