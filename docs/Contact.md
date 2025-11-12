# Contact Component Documentation

## Overview
The `Contact` component provides a comprehensive contact form with EmailJS integration and multiple fallback methods. It features smooth animations, form validation, and an elegant user interface for getting in touch with Mark Mayouf.

## File Location
`src/components/contact/Contact.jsx`

## Dependencies
- React (`useEffect`, `useRef`, `useState`)
- Framer Motion (`motion`, `useInView`)
- EmailJS (`@emailjs/browser`)

## Features
- **EmailJS Integration**: Sends emails directly from the frontend
- **Fallback System**: Multiple email sending methods for reliability
- **Form Validation**: Basic client-side validation
- **Visual Feedback**: Success and error state handling
- **Auto-Hide Messages**: Automatic dismissal of status messages
- **Responsive Design**: Works across all device sizes
- **Smooth Animations**: Entrance animations based on scroll position

## Contact Information Displayed
- **Address**: Brooklyn, New York
- **Phone**: +1 929 277 1804

## EmailJS Configuration
```jsx
// EmailJS service configuration
const serviceID = 'service_23esc8b'
const templateID = 'template_fsded85'
const userID = '7pzVgbIoEe2C773uU'
```

## State Management
```jsx
const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)
```

## Form Fields
1. **Name Field**
   - Type: Text input
   - Required: Yes
   - AutoComplete: name
   - Placeholder: "Your Name"

2. **Email Field**
   - Type: Email input
   - Required: Yes
   - AutoComplete: email
   - Placeholder: "Your Email"

3. **Message Field**
   - Type: Textarea (6 rows)
   - Required: Yes
   - Placeholder: "Tell me about your project..."

## Email Sending System

### Primary Method: EmailJS
```jsx
emailjs.sendForm(
  'service_23esc8b',
  'template_fsded85',
  formRef.current,
  '7pzVgbIoEe2C773uU'
)
```

### Fallback Method: Mailto
```jsx
const subject = encodeURIComponent(`Contact from ${name}`)
const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
window.open(`mailto:mayouv.mark@gmail.com?subject=${subject}&body=${body}`)
```

## Validation System
```jsx
// Basic validation
if (!name || !email || !message) {
  setError(true)
  return
}
```

## Animation System

### Container Animation
```jsx
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
```

### Scroll-Based Activation
```jsx
const isInView = useInView(ref, { margin: '-100px' })
```
- Triggers animation when component is 100px into viewport
- Provides smooth entrance effect

### Staggered Element Animation
- Contact information animates first
- Form follows with slight delay
- Individual form elements have progressive reveal

## Auto-Hide Functionality

### Success Message
```jsx
useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }
}, [success]);
```

### Error Message
```jsx
useEffect(() => {
  if (error) {
    const timer = setTimeout(() => {
      setError(false);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }
}, [error]);
```

## Component Structure
```jsx
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <motion.div variants={variants}>
          {/* Contact Information */}
          <motion.div>
            <h1>Let's work together</h1>
            <div>
              <div>Address: Brooklyn, New York</div>
              <div>Phone: +1 929 277 1804</div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" name="name" required />
            </div>
            
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows={6} required />
            </div>
            
            <button type="submit">Send Message</button>
            
            {/* Status Messages */}
            {error && <div className="error">Please fill all fields</div>}
            {success && <div className="success">Message sent successfully!</div>}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};
```

## CSS Classes Required
- `.contact` - Main container
- `.contact-container` - Inner wrapper
- `.contact-title` - Main heading styling
- `.contact-form` - Form container
- `.form-group` - Form field grouping
- `.form-label` - Field labels
- `.form-input` - Text input styling
- `.form-textarea` - Textarea styling
- `.form-button` - Submit button

## Styling Features
- **Orange Theme**: Consistent #ff6500 branding
- **Grid Layout**: Responsive contact info grid
- **Modern Form Design**: Clean, accessible form styling
- **Visual Feedback**: Distinct success/error states
- **Responsive Typography**: Scalable text across devices

## Error Handling
1. **Client Validation**: Checks for empty fields
2. **EmailJS Errors**: Catches service failures
3. **Network Issues**: Handles connectivity problems
4. **Graceful Degradation**: Falls back to mailto links

## Performance Features
- **Efficient State Management**: Minimal re-renders
- **Cleanup Functions**: Proper timer cleanup
- **Optimized Animations**: GPU-accelerated transforms
- **Lazy Loading**: Animation triggers only when in view

## Accessibility Features
- **Form Labels**: Proper label-input associations
- **Required Attributes**: Clear field requirements
- **Error Messages**: Screen reader accessible feedback
- **Keyboard Navigation**: Full keyboard accessibility
- **AutoComplete**: Standard autocomplete attributes

## Browser Compatibility
- **Modern Browsers**: Full EmailJS support
- **Legacy Support**: Mailto fallback for older browsers
- **Mobile Optimized**: Touch-friendly form controls

## Security Considerations
- **Client-Side Only**: No sensitive server data
- **Public EmailJS Keys**: Safe for frontend use
- **Input Validation**: Basic XSS prevention
- **Rate Limiting**: EmailJS handles sending limits

## Customization Options
1. **EmailJS Config**: Update service/template IDs
2. **Contact Info**: Modify address and phone number
3. **Form Fields**: Add/remove form elements
4. **Animation Timing**: Adjust entrance animations
5. **Styling**: Update colors and layout
6. **Validation**: Enhance validation rules

## Integration Notes
- Works with the global portfolio navigation
- Maintains consistent branding throughout
- Optimized for the overall user experience flow
- Compatible with the responsive design system 