import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import contactImage from '../assets/Contact.jpg'
import {FaLinkedin,FaInstagram} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import useMediaQuery from "../hooks/useMediaQuery";

const ContactC = ({icon,username})=>{
  return(
    <div className="flex justify-start gap-3 p-3 items-center">
     {icon}
      <p>{username}</p>
    </div>
  )
}

const Contact= () => {
   
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=""
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">CONTACT ME</span> TO GET STARTED
          </p>
          <div className=" my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {isAboveMediumScreens ? (
     <div className="flex bg-white justify-between w-[85%] p-5 items-center mx-auto">
      <div className="p-3">
       <ContactC icon={<FaInstagram size={32}/>} username={'hibajr_'}/>
       <ContactC icon={<FaLinkedin size={32}/>} username={'Abraham'}/>
       <ContactC icon={<AiOutlineMail size={32}/>} username={'hibaabraham477@gmail.com'}/>
      </div>
      <div className="h-[600px] w-[600px]">
        <img src={contactImage} alt="" className="h-full w-full" />
      </div>
     </div>
     ) :(
      <div>
        <div>
        <ContactC icon={<FaInstagram size={32}/>} username={'hibajr_'}/>
        <ContactC icon={<FaLinkedin size={32}/>} username={'Abraham'}/>
        <ContactC icon={<AiOutlineMail size={32}/>} username={'hibaabraham477@gmail.com'}/>
        </div>
      </div>
     )}

    </section>
  )
}

export default Contact;
