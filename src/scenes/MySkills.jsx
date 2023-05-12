import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import tailwindcss from '../assets/skills/cdnlogo.com_tailwind-css.svg'
import html from '../assets/skills/cdnlogo.com_html-5.svg'
import css from '../assets/skills/cdnlogo.com_css.svg'
import javascript from '../assets/skills/cdnlogo.com_javascript.svg'
import reacT from '../assets/skills/cdnlogo.com_react.svg'
import redux from '../assets/skills/cdnlogo.com_redux.svg'
import firebase from '../assets/skills/cdnlogo.com_firebase (1).svg'
import framerMotion from '../assets/skills/framer-motion.svg'


////////SKILL COMPONENT///////////

const Skill = ({ icon, name }) => {
  return (
    <div className="px-5">
      <div className="h-16 w-16">
        <img
          src={icon}
          alt=""
          className="h-full w-full"
        />
      </div>
      <p className="pt-2 text-start text-baseS">
        {name}
      </p>
    </div>
  )
}

//////////////////////////////////

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-base">
            As a frontend web developer, I have expertise in various areas including HTML, CSS, JavaScript, React, and more. <br />
            I am constantly learning and expanding my skills to stay current with the latest technologies and industry trends."
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-opaque-black before:z-[-1]"
            >
              <div className="h-full w-full p-4 grid grid-cols-4 gap-3 bg-[#f7eae8] items-center">
                <Skill icon={html} name={'HTML5'} />
                <Skill icon={css} name={'CSS3'} />
                <Skill icon={javascript} name={'Javascript'} />
                <Skill icon={reacT} name={'React'} />
                <Skill icon={tailwindcss} name={'Tailwind CSS'} />
                <Skill icon={redux} name={'Redux'} />
                <Skill icon={firebase} name={'Firebase'} />
                <Skill icon={framerMotion} name={'Framer motion'} />
                
              </div>
            </div>
          ) : (
           <div className="grid grid-cols-3 place-items-center">
                <Skill icon={html} name={'HTML5'} />
                <Skill icon={css} name={'CSS3'} />
                <Skill icon={javascript} name={'Javascript'} />
                <Skill icon={reacT} name={'React'} />
                <Skill icon={tailwindcss} name={'Tailwind CSS'} />
                <Skill icon={redux} name={'Redux'} />
                <Skill icon={firebase} name={'Firebase'} />
                <Skill icon={framerMotion} name={'Framer motion'} />
           </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MySkills;
