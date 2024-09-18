import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef=useRef()

  const nameRef=useRef()
  const emailref=useRef()
  const messageref=useRef()

  const [form,setform]=useState({
    name:'',
    email:'',
    message:''
  })
 const [loading,setloading]=useState(false)

 const [invalid,setinvalid]=useState(false)

 const handleNull=(ref)=>{
  nameRef.current.style.display='hidden'
ref.current.style.outline='1px solid red'
 setinvalid(true)

 }
 const handleChange=(e)=>{
  if (invalid) {
    setinvalid(false)
  }
  const {name,value}=e.target

  setform({...form,[name]:value})
 }

 const handleSubmit=(e)=>{
  e.preventDefault()

 if (form.name===''||form.email===''||form.message==='') {
setinvalid(true)
}
 
 else{
  console.log(invalid)
  setloading(true)
  emailjs.send(
    'service_0elj48i',
    'template_kc7ue6l',
    {
      from_name: form.name,
      to_name:'Chike',
      from_email:form.email,
      to_email:'nwabuisichike70@gmail.com',
      message:form.message,
    },
    'pbrT157buIRsPjct8'
  )
  .then(()=>{setloading(false);
  alert('Thank you, I will get back to you as soon as possible.')
},(error)=>{
  setloading(false)
  console.log(error);
  alert('Something went wrong')
} )
 }
 }
  
  

  return (
   <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>

<p className={`${styles.sectionSubText}`}>Get in touch</p>
<h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

<form  ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>

  <label  className="flex flex-col">
    <span className="text-white font-medium mb-4">Your Name</span>
    <input type={'text'} name='name' value={form.name} onChange={handleChange} placeholder="What's your name"
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
  </label>

  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">Your Email</span>
    <input type={'email'} name='email' value={form.email} onChange={handleChange} placeholder="What's your email"
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
  </label>

  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">Your Message</span>
    <textarea  name='message' ref={messageref} value={form.message} onChange={handleChange} placeholder="What's your message"
    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
  </label>
   <span className={!invalid?'hidden':'text-red-300 font-bold'}>All fields need to be filled</span>
  <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
{loading ?'sending...':'send'}
  </button>
</form>
    </motion.div>
    <motion.div variants={slideIn('right','tween',0.2,1)} className='xl:flex xl:h-auto xl:w-[550px] md:h-[550px] h-[350px]'>
        <EarthCanvas/>
    </motion.div>
   </div>
  );
};

export default SectionWrapper(Contact, "contact");
