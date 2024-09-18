import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
   <section className='relative w-full h-screen mx-auto'>

    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}>

      <div className="flex flex-col justify-center items-center mt-5">

      <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
      <div className="w-1 sm:h-80 h-40 violet-gradient"/>

      </div>

      <div>
        <h1 className={`${styles.heroHeadText}`}>Hi I'm <span className="text-[#915eff]">Chike</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white`}>I develop 3D visuals, user <br/> interfaces and web applications </p>
        </div>

    </div>

    <ComputersCanvas/>

    <div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start">
          <motion.div animate={{y:[0,30,0]}} className='w-3 h-3 bg-secondary rounded-full' transition={{repeat:Infinity,duration:1.5, repeatType:'loop'}}>

          </motion.div>
        </div>
      </a>
    </div>
   </section>
  );
};

export default Hero;
