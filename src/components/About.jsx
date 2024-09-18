import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div  variants={fadeIn('right','spring',0.5*index,0.75)} className='w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]'>
       <div options={{max:45,scale:1,speed:150}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className="font-bold text-center text-white text-[20px] ">
          {title}
        </h3>
       </div>
      </motion.div>
    </Tilt>
  )
}
;

const About = () => {
  return (
    <>
    <motion.div className="div" variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>

    <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn('','',0.1,1)} >
      I'm a skilled developer with experience in Javascript and Python,
      and expertise in frameworks like React, Node.js, and Three.js. I'm a quick
      learner intuitive problem solver and collaborate closely with clients to create efficient, scalable and user friendly solutions that meet
      personal or businees needs. Let's work together to bring your ideas to life!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {
        services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))
      }
    </div>
    </>
  );
};

export default SectionWrapper(About,"about");
