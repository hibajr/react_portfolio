import {FaLinkedin,FaInstagram} from 'react-icons/fa'

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={32}/>
      </a>
     
     <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={32}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
