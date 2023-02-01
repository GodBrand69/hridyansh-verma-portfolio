import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
    return (  
        <section id="footer" className="py-28 flex justify-between">
            <AnchorLink  className="mx-[5%]" href="#home">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, y:50},
                visible:{opacity:1, y:0}
            }}
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}}><Image 
            height={100} 
            width={100} 
            src="/logo.jpg" 
            />
            </motion.div>
            </AnchorLink>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, y:50},
                visible:{opacity:1, y:0}
            }}
            className="flex max-sm:pr-7 sm:px-14 gap-10">
            <motion.a 
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}} 
            href="https://github.com/GodBrand69">
            <FontAwesomeIcon className="fa-2xl text-white py-3" icon={faGithub} /></motion.a>
            <motion.a 
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}} 
            href="https://www.linkedin.com/in/hridyansh-verma-8ba59a181">
            <FontAwesomeIcon className="fa-2xl text-white py-3" icon={faLinkedin} /></motion.a>
            <motion.a 
            whileHover={{scale:1.2}} 
            whileTap={{scale: 0.9}} 
            href="/resume.pdf"
            download>
            <FontAwesomeIcon className="fa-2xl text-white py-3" icon={faFile} /></motion.a>
            </motion.div>
        </section>
    );
}

export default Footer;