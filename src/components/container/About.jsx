import React from 'react'
import about from '../../assets/About.jpg'

const About = () => {
  return (
    <div className='section bg-Solitude' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
      <div className='border-[3px] border-solid border-Teal rounded-lg'>
       <img src={about} alt=''/>
      </div>
<div>
<div className='font-bold sm:text-[1.875rem] 
text-[1.5rem] mb-5'
> We provide the <br/>best{" "}
<span className='text-Teal'>online courses</span>
</div>
<p className='text-sm text-white leading-7'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Nam placeat sit dolore autem odio aspernatur! Mollitia 
nihil qui nisi ipsam quisquam debitis eum molestiae vero distinctio, ipsa 
tenetur, maiores saepe? quisquam debitis eum molestiae
vero distinctio
</p>
<button className='py-3 px-6 text-sm text-white border border-solid border-Teal rounded-lg font-bold mt-3'>Know More</button>
</div>
      </div>
    </div>
  )
}

export default About