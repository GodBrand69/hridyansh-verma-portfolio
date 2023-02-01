import { use } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const {register, trigger, formState: {errors}} = useForm();

    const onSubmit = async(e) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }

    return (  
        <section id="contact" >
        <div className="flex max-sm:px-8 sm:px-24 mt-20 gap-10 py-24 contact rounded-3xl">
            <motion.img 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            className="max-md:hidden w-[45%]" src="/contact-img.svg" />
            <div className="max-md:w-[45%] max-sm:w-full sm:w-full text-center">
            <motion.div
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
        >
        <h1 className="font-bold text-6xl text-white">Get in touch.</h1>
        </motion.div>

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
            {/* <img src="" /> */}
            <form
                className="w-full"
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/886a0234c0f20b988b4d76bc91020744"
            >
            <div className="gap-4">
            <input 
                className="p-4 bg-slate-800 w-full text-slate-400"
                placeholder="Full Name" 
                type="text" 
                {...register("name", {
                    required: true,
                    maxLength: 100,
                })} 
                autocomplete="off"
                />
                {errors.name && (
                    <p className="text-red mt-1">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Maximum length is 100 characters."}
                    </p>
                )}
                <input 
                className="p-4 mt-6 bg-slate-800 w-full text-slate-400"
                placeholder="Email" 
                type="email" 
                {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })} 
                autocomplete="off"
                />
                {errors.email && (
                    <p className="text-red mt-1">
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Enter a valid Email."}
                    </p>
                )}
            </div> 
                <textarea 
                className="p-3 mt-6 w-full bg-slate-800 block text-slate-400 "
                placeholder="Message" 
                rows="5"
                columns="50"
                type="text" 
                {...register("message", {
                    required: true,
                    maxLength: 3000,
                })} 
                autocomplete="off"
                />
                {errors.message && (
                    <p className="text-red mt-1">
                        {errors.message.type === "required" && "This field is required."}
                        {errors.message.type === "maxLength" && "Maximum length is 1000 characters."}
                    </p>
                )}
                <button type="submit" className="w-full mt-6 justify-end contact-btn text-white border-2 py-3 px-16 text-lg" >Send Message <FontAwesomeIcon className="fa-lg fa-light" icon={faArrowRightLong} /></button>
            </form>
        </motion.div>
            </div>
            
        </div>
        </section>
        
    );
}
 
export default Contact;