import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Skills = () => {
    const Languages = ["C", "C++", 'Python', "JavaScript"]
    const frontEnd =["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js", "Next.js"]
    const backEnd = ["Node.js", "Express", "Mongoose"]
    const DB = ["MongoDB", "SQL", "SQLite"]

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
    
    return (
        <>
<motion.div ref={carousel} className="overflow-hidden">
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
            <h1 className="mx-auto text-center font-bold sm:pb-10 text-5xl text-white">Skills</h1>
        </motion.div>
        
            <motion.div drag="x"
            dragConstraints={{right:0, left: -width}}
            whileDrag={{cursor: "grabbing"}} 
            whileTap={{cursor: "grabbing"}} 
            className="flex max-sm:hidden w-1/6 text-center max-sm:mx-[5%] sm:mx-[13%] gap-10 text-white"
            >
            <div className="py-10 min-w-full rounded-3xl bg-slate-900">
            <motion.div
            className="mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Front End</h1>
            </motion.div>  
                <ul className="text-md py-2">
                {frontEnd.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay:0.2, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </div>
            <div className="py-10 rounded-3xl  bg-slate-900 min-w-full">
            <motion.div
            className="mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Back End</h1>  
            </motion.div>
                
                <ul className="text-md py-2">
                    {backEnd.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </div>
            <div className="py-10 min-w-full rounded-3xl bg-slate-900">
            <motion.div
            className="mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Databases</h1>
            </motion.div>
                
                <ul className="text-md py-2">
                {DB.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay:0.3, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </div>
            <div className="py-10 min-w-full rounded-3xl bg-slate-900">
            <motion.div
            className="sm:mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
        >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Languages</h1>
            </motion.div>
                <ul className="text-md py-2">
                        {Languages.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay:0.4, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </div>
            </motion.div>
        </motion.div>


        <div className="text-white sm:hidden text-center">
        <motion.div 
        className="py-10 w-1/2 my-10 mx-auto rounded-3xl bg-slate-900"
        initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
        >
            <motion.div
            className="sm:mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
        >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Front End</h1>
            </motion.div>
                <ul className="text-md py-2">
                        {frontEnd.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay:0.4, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }} 
            className="py-10 w-1/2 my-10 mx-auto rounded-3xl bg-slate-900">
            <motion.div
            className="sm:mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:50},
                visible:{opacity:1, x:0}
            }}
        >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Back End</h1>
            </motion.div>
                <ul className="text-md py-2">
                        {backEnd.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay:0.4, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </motion.div>
            <motion.div
            className="py-10 w-1/2 mx-auto my-10 rounded-3xl bg-slate-900"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
            <motion.div
            className="sm:mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
        >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Databases</h1>
            </motion.div>
                <ul className="text-md py-2">
                        {DB.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay:0.4, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </motion.div>
            <motion.div
            className="py-10 w-1/2 mx-auto my-10 rounded-3xl bg-slate-900"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
            <motion.div
            className="sm:mb-4 max-sm:mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:50},
                visible:{opacity:1, x:0}
            }}
        >
            <h1 className="font-bold max-sm:text-lg sm:text-xl md:text-2xl">Languages</h1>
            </motion.div>
                <ul className="text-md py-2">
                        {Languages.map((Language) =>
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay:0.4, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, y:50},
                            visible:{opacity:1, y:0}
                        }}
                        >
                            <li className="max-sm:text-xs py-1">{Language}</li>
                        </motion.div>
                        )}
                </ul>
            </motion.div>
            
        </div>
        </>
        
    );
}

export default Skills;