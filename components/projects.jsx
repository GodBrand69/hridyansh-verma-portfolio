import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {

    const container = {
        hidden:{},
        visible:{
            transition: {staggeredChildren: 0.2}
        }
    }

    const projectVariant = {
        hidden: {opacity: 0, scale:0.8},
        visible: {opacity: 1, scale: 1}
    }
    

    const overlayStyles = "absolute w-full z-20 font-playFair opacity-0 hover:opacity-90 bg-grey h-full max-sm:p-[6%] md:p-[20%] text-[#010026] transition duration-500 text-center items-center justify-center";

    return (  
        <section id="projects" className="mt-32">
        <h1 className="font-bold mb-20 text-center text-6xl">Projects</h1>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration:0.5}}
                variants={container}
                className="gap-8 relative mx-[13%] md:flex"
            >
                <motion.div className="max-sm:my-2 relative" transition={{delay:0.2, duration:0.5}} variants={projectVariant}>
                <div className={overlayStyles}>
                    <h2 className="text-2xl">
                        Fylo
                    </h2>
                    <p className="mt-7">
                        Landing Page of Fylo.
                    </p>
                </div>
                    <Image className="w-full h-full" src="/fylo.jpg" width={400} height={400} />
                </motion.div>
                <motion.div className="max-sm:my-2 relative" transition={{delay:0.3, duration:0.5}} variants={projectVariant}>
                <div className={overlayStyles}>
                    <h2 className="text-2xl">
                        To-Do List App
                    </h2>
                    <p className="mt-7">
                        Add and delete items from your To-Do List.
                    </p>
                </div>
                    <Image className="w-full h-full" src="/todolist.png" width={400} height={400} />
                </motion.div>
                
                <motion.div className="max-sm:my-2 relative" transition={{delay:0.4, duration:0.5}} variants={projectVariant}>
                <div className={overlayStyles}>
                    <h2 className="text-2xl">
                        Snap
                    </h2>
                    <p className="mt-7">
                        Landing Page of Snap.
                    </p>
                </div>
                    <Image className="w-full h-full" src="/snap.jpg" width={400} height={400} />
                </motion.div>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration:0.5}}
                variants={container}
                className="gap-8 mt-7 relative mx-[13%] max-sm:py-4 md:flex"
            >
                <motion.div className="max-sm:my-2 relative" transition={{delay:0.5, duration:0.5}} variants={projectVariant}>
                <div className={overlayStyles}>
                    <h2 className="text-2xl">
                        Blog App
                    </h2>
                    <p className="mt-7">
                        Compose your blog posts.
                    </p>
                </div>
                    <Image className="w-full h-full" src="/blog.png" width={400} height={400} />
                </motion.div>
                <motion.div className="max-sm:my-2 relative" transition={{delay:0.6, duration:0.5}} variants={projectVariant}>
                <div className={overlayStyles}>
                    <h2 className="text-2xl">
                        Sunnyside
                    </h2>
                    <p className="mt-7">
                        Landing Page of Sunnyside.
                    </p>
                </div>
                    <Image className="w-full h-full" src="/sunnyside.jpg" width={400} height={400} />
                </motion.div>
                
                <motion.div className="max-sm:my-2 relative" transition={{delay:0.7, duration:0.5}} variants={projectVariant}>
                <div className={overlayStyles}>
                    <h2 className="text-2xl">
                        Keep App
                    </h2>
                    <p className="mt-7">
                        Clone of Google Keep App which can add and delete notes.
                    </p>
                </div>
                    <Image className="w-full h-full" src="/keep.png" width={400} height={400} />
                </motion.div>
            </motion.div>

        </section>
    );
}



export default Projects;