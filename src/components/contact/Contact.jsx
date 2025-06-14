import { useEffect, useRef, useState } from 'react'
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
    setError(false) // Reset error state
    setSuccess(false) // Reset success state

    // Get form data
    const formData = new FormData(formRef.current)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    // Basic validation
    if (!name || !email || !message) {
      setError(true)
      return
    }

    // Try EmailJS first
    if (typeof emailjs !== 'undefined') {
      emailjs
        .sendForm(
          'service_23esc8b',
          'template_fsded85',
          formRef.current,
          '7pzVgbIoEe2C773uU'
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result)
            setSuccess(true)
            formRef.current.reset();
          },
          (error) => {
            console.error('Email send error:', error)
            // Fallback to mailto
            const subject = encodeURIComponent(`Contact from ${name}`)
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
            window.open(`mailto:mayouv.mark@gmail.com?subject=${subject}&body=${body}`)
            setSuccess(true)
            formRef.current.reset();
          }
        )
        .catch((error) => {
          console.error('EmailJS catch error:', error)
          // Fallback to mailto
          const subject = encodeURIComponent(`Contact from ${name}`)
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
          window.open(`mailto:bestdeals24hr@outlook.com?subject=${subject}&body=${body}`)
          setSuccess(true)
          formRef.current.reset();
        })
    } else {
      // EmailJS not available, use mailto fallback
      const subject = encodeURIComponent(`Contact from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
      window.open(`mailto:bestdeals24hr@outlook.com?subject=${subject}&body=${body}`)
      setSuccess(true)
      formRef.current.reset();
    }
  }
  
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000); // Increased to 3 seconds for better UX

      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 5000); // Auto-hide error after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [error]);
  
  return (
    <div className="contact">
      <div className="contact-container">
        <motion.div
          ref={ref}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          variants={variants}
          initial='initial'
          whileInView='animate'
        >
          {/* Text Container */}
          <motion.div 
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            variants={variants}
          >
            <motion.h1 
              variants={variants}
              className="contact-title"
            >
              Let's work together
            </motion.h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {/* <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} variants={variants}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ff6500' }}>Email</h2>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>.com</span>
              </motion.div> */}
              
              <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} variants={variants}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ff6500' }}>Address</h2>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Brooklyn, New York</span>
              </motion.div>
              
              <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} variants={variants}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#ff6500' }}>Phone</h2>
                <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>+1 929 277 1804</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Form Container */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="contact-form"
          >
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input 
                type='text' 
                required 
                placeholder='Your Name' 
                name='name' 
                autoComplete='name'
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input 
                type='email' 
                required 
                placeholder='Your Email' 
                name='email' 
                autoComplete='email'
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                rows={6} 
                placeholder='Tell me about your project...' 
                name='message' 
                required
                className="form-textarea"
              />
            </div>
            
            <button 
              type='submit'
              className="form-button"
            >
              Send Message
            </button>
            
            {error && (
              <div style={{
                color: '#ff6b6b',
                fontSize: '0.875rem',
                fontWeight: '500',
                background: 'rgba(255, 107, 107, 0.1)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 107, 107, 0.2)'
              }}>
                Please fill in all required fields.
              </div>
            )}
            {success && (
              <div style={{
                color: '#51cf66',
                fontSize: '0.875rem',
                fontWeight: '500',
                background: 'rgba(81, 207, 102, 0.1)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(81, 207, 102, 0.2)'
              }}>
                Thank you! Your message has been sent successfully!
              </div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
