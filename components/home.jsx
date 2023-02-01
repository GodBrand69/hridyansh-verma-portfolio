import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
    return (  
        <section id='home' className='max-md:text-center top-20 relative'>
        <div className='flex relative'>
        
            <motion.img 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration:0.5}}
            variants={{
            hidden:{opacity:0, x:50},
            visible:{opacity:1, x:0}
            }}
            className='z-8 profile relative lg:left-[20%] max-md:hidden md:w-1/3 md:h-1/2 lg:w-1/5' 
            src='/profile.png' />
        <div className=" py-24 max-sm:mx-[20%] max-md:mx-[35%] lg:-right-[20%] md:ml-32 relative">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2, duration:0.5}}
            variants={{
            hidden:{opacity:0, x:50},
            visible:{opacity:1, x:0}
            }}
        >
            <h1 className="lg:text-7xl max-sm:text-5xl mx-auto sm:text-5xl md:text-6xl font-bold text-white py-4">Hello!</h1>
            <p className="font-playFair max-sm:text-5xl mx-auto sm:text-5xl lg:text-7xl md:text-6xl  font-semibold text-white py-4">I'm <motion.span whileHover={{scale: 1.3}} className='sub-text text-7xl'>H</motion.span>ridyansh,</p>
            <p className="font-playFair max-sm:text-5xl mx-auto sm:text-5xl lg:text-7xl md:text-6xl  font-bold text-white py-4"><span className='md:text-6xl sm:text-5xl sub-text'>web dev</span>eloper</p>
        </motion.div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.4, duration:0.5}}
            variants={{
            hidden:{opacity:0, x:50},
            visible:{opacity:1, x:0}
            }}
        >
            <AnchorLink href="#contact"><button className="contact-btn text-white border-2 py-3 mt-10 px-16 text-lg">Contact Me!</button></AnchorLink>
        </motion.div>      
        </div>
        </div>
    </section>
    );
}
 
export default Home;