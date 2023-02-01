import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import Skills from "./skills";

const About = () => {
    return (  
        <section id="about" >
            <div className="mx-auto text-center pt-24 pb-10 max-sm:w-3/4 sm:w-1/2">
        <div>
        <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
        >
        <h1 className="font-bold text-6xl text-white">About Me.</h1>
        </motion.div>
        <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0, y:50},
                visible:{opacity:1, y:0}
            }}
        >
        <p className="font-medium text-white text-md leading-8 ">
                My name is Hridyansh Verma and I am a currently graduating from
                Indian Institute of Information Technology, Bhopal
                with a degree of Bachelor in Technology. 
                I am a team player and am always looking for ways to improve my
                skills and expand my knowledge in the field. I am excited to 
                work as a full stack web developer and am confident that my 
                passion and dedication will make me a valuable asset to any team.
            </p>
        </motion.div>
        </div>
        {/* <img src="/header-img.svg" /> */}
        </div>
        <Skills />
        </section>
    );
}
 
export default About;