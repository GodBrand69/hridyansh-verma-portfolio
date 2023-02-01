import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const [open, setOpen] = useState(true);

    function handleClick(){
        setOpen(!open)
    }

    const item={
        exit:{
            opacity:0,
            height:0,
            transition:{
            ease:"easeInOut",
            duration:0.3,
            delay:1.2
            }
        }
    }
        

    return (  
        <>
            <nav className="flex justify-between fixed w-full z-20 pb-10 backdrop-blur-lg">  {/* fixed w-full z-20 */}
                <div className="max-sm:px-10 sm:px-20 max-sm:py-12 sm:py-8">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            variants={item}
                            initial={{height:0,opacity:0}}
                            animate={{ opacity:1}}
                            transition={{duration:.5}}
                            exit="exit"
                            whileTap={{scale:0.9}}
                            className="max-sm:w-1/2"
                        >
                            <AnchorLink href="#home"><Image height={100} width={100} src="/logo.jpg" /></AnchorLink> 
                        </motion.div>
                    
                </div>
                <div>
                <span className="absolute z-40 right-[7%] top-[30%] sm:hidden"><FontAwesomeIcon onClick={handleClick} className="hidden fa-2xl text-white" icon={open ? faXmark : faBars} /></span>
                <span className={!open ? "hidden" : ""}>
                
                <ul className="py-8 max-sm:z-30 max-sm:bg-white max-sm:text-blue-900 max-sm:rounded-2xl max-sm:text-center max-sm:h-[200px] text-white max-sm:top-[60%] max-sm:right-0 max-sm:absolute sm:flex">
                            <AnimatePresence>
                            <motion.div
                                variants={item}
                                initial={{height:0,opacity:0}}
                                animate={{ opacity:1}}
                                transition={{duration:.5}}
                                exit="exit"
                                >
                                <li className="max-sm:relative md:px-8">
                                <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{scale:0.9}}
                                >
                                <AnchorLink href="#about"><button className="btn hover:border-b-2 py-3 px-8">About</button></AnchorLink>
                            </motion.div>
                        </li>
                        </motion.div>
                        
                        <motion.div
                                variants={item}
                                initial={{height:0,opacity:0}}
                                animate={{ opacity:1}}
                                transition={{duration:.5}}
                                exit="exit"
                                >
                                    <li className="max-sm:relative max-sm:top-10 md:px-8">
                                <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{scale:0.9}}
                                >
                                <AnchorLink href="#projects"><button className="btn hover:border-b-2 py-3 px-8">Projects</button></AnchorLink>
                                </motion.div>
                                </li>
                                </motion.div>
                        
                        <motion.div
                                variants={item}
                                initial={{height:0,opacity:0}}
                                animate={{ opacity:1}}
                                transition={{duration:.5}}
                                exit="exit"
                                >
                        <li className="max-sm:relative  max-sm:top-20 md:px-8">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{scale:0.9}}
                            >
                            <AnchorLink href="#contact"><button className="btn hover:border-b-2 py-3 px-8">Contact</button></AnchorLink>
                        </motion.div>
                        </li>
                                </motion.div>
                        
                        </AnimatePresence>
                    </ul>
                
                </span>
                    
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;