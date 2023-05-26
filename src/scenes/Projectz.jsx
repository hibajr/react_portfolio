import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'
import badiliImage from '../assets/Hero Section.png'
import megashopImage from '../assets/megashop.png'
import projects from './Projects'

///////PROJECT///////////////

const Project = ({title,image,description,siteURL})=>{
 return (
 <div className='flex items-center p-4 gap-5 bg-white w-[90%] mx-auto justify-start h-60'>
    <div className='w-[30%]'>
      <img src={image} alt="" className='w-full h-full'/>
    </div>
    <div className='w-[70%]'>
      <h3 className='font-opensans underline text-lg font-semibold'>{title}</h3>
      <p className='text-base max-width-[50%]'>{description}</p>
      <a href={siteURL} className='mt-3'>
      <button className='p-2 bg-blue mt-3 rounded-md text-white font-semibold'>Visit Site</button>
      </a>
    </div>
    
 </div>
)
}

const ProjectSm = ({title,image,description,siteURL})=>{
  return (
   <div className='w-90% p-1 mt-2 mb-5'>
    <p className='text-center text-lg font-semibold'>{title}</p>
    <div>
      <img src={image} alt="" className='w-full h-full' />
    </div>
    <p className='p-1 text-sm'>
      {description}
    </p>
    <div className='flex justify-center'>
    <a href={siteURL} className=''>
      <button className='p-2 bg-blue font-semiboldn rounded-lg mt-3 mx-auto font-semibold text-white'>Visit Site</button>
    </a>
    </div>
   </div>
 )
 }

/////////////////////////////

const Projectz = () => {

  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)')

  return (
   < div className='mt-4' id='projects'>
    <motion.div
    className="md:w-2/5 mx-auto text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div>
      <p className="font-playfair font-semibold text-4xl">
        <span className="text-red">PRO</span>JECTS
      </p>
      <div className="flex justify-center mt-5">
        <LineGradient width="w-2/3" />
      </div>
    </div>
    <p className="mt-10 mb-10">
    Through these personal projects, 
    I have gained valuable experience and knowledge in frontend web development, 
    and I am excited to apply these skills to future projects.
    </p>
  </motion.div>

    <div className='mx-auto'>
         {isAboveSmallScreens ? 
        ( 
        <div className='mx-auto'>
            <div className='flex flex-col p-4 gap-3 w-full mx-auto '>
             <Project 
              title={'Megashop'}
              image={megashopImage}
              description={projects.Megashop.description}
              siteURL={'https://marvelous-buttercream-59a51d.netlify.app'}
             />
            
            </div>
            <div className='mt-20'>
              <LineGradient/>
            </div>
        </div> 
        )
        : 
        (<div>
          <ProjectSm 
          title='Megashop'
          image={megashopImage}
          description={projects.Megashop.description}
          siteURL = {'https://marvelous-buttercream-59a51d.netlify.app'}
          />
        </div>
        )
        }
    </div>
  </div>
  )
}

export default Projectz