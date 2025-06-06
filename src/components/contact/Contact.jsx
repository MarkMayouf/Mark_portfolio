import { useEffect, useRef, useState } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const variants = {
  initial: {
    y: 400,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {},
  },
}

const Contact = () => {
  const ref = useRef()
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const isInView = useInView(ref, { margin: '-100px' })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_23esc8b',
        'template_fsded85',
        formRef.current,
        '7pzVgbIoEe2C773uU'
      )
      .then(
        (result) => {
          setSuccess(true)
          formRef.current.reset();
        },
        (error) => {
          setError(true)
        }
      )
  }
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <motion.div
      ref={ref}
      className='contact'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Let’s work together</motion.h1>
        <motion.div className='item' variants={variants}>
          <h2>Email</h2>
          <span>mark@mayouftech.com</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
          <h2>Address</h2>
          <span>Brooklyn, New York</span>
        </motion.div>
        <motion.div className='item' variants={variants}>
          <h2>Phone</h2>
          <span>+1 929 277 1804</span>
          <p className='co'>Mark©2025</p>
        </motion.div>
      </motion.div>
      <div className='formContainer'>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <input 
            type='text' 
            required 
            placeholder='Your Name' 
            name='name' 
            autoComplete='name'
          />
          <input 
            type='email' 
            required 
            placeholder='Your Email' 
            name='email' 
            autoComplete='email'
          />
          <textarea 
            rows={6} 
            placeholder='Tell me about your project...' 
            name='message' 
            required
          />
          <button type='submit'>Send Message</button>
          {error && <span className="error">Something went wrong. Please try again.</span>}
          {success && <span className="success">Message sent successfully!</span>}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
