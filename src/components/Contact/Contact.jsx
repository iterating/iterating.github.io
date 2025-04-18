import React, { useEffect, useState, useCallback, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);

  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  
  // UI state management
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = useCallback(() => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Optimized event handlers with useCallback
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: '',
        });
        
        // Auto-hide success message after delay
        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      } else {
        // Handle non-OK responses
        console.error('Server responded with error', await response.text());
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm]);

  // Memoize section header content
  const sectionHeader = useMemo(() => (
    <div className="section-header">
      <h4 className="subtitle scroll-animation" data-aos="fade-up">
        <i className="las la-dollar-sign"></i> contact
      </h4>
      <h1 className="scroll-animation" data-aos="fade-up">
        Let's Work <span>Together!</span>
      </h1>
    </div>
  ), []);

  return (
    <section className="contact-area page-section scroll-content" id="contact">
      <div className="custom-container">
        <div className="contact-content content-width">
          {sectionHeader}
          <h3 className="scroll-animation" data-aos="fade-up"></h3>
          <p id="required-msg">* Marked fields are required to fill.</p>

          <form
            className="contact-form scroll-animation"
            data-aos="fade-up"
            onSubmit={handleSubmit}
            noValidate
          >
            {success && (
              <div
                className="alert alert-success messenger-box-contact__msg"
                role="alert"
              >
                Your message was sent successfully.
              </div>
            )}
            <div className="row">
              <div className="col-md-6">
                <div className={`input-group ${errors.fullName ? 'has-error' : ''}`}>
                  <label htmlFor="full-name">
                    Full Name <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    name="fullName"
                    id="full-name"
                    placeholder="Your Full Name"
                    required
                  />
                  {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className={`input-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">
                    Email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    required
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <label htmlFor="phone-number">
                    Phone <span>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                    id="phone-number"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className={`input-group ${errors.subject ? 'has-error' : ''}`}>
                  <label htmlFor="subject">
                    Subject <sup>*</sup>
                  </label>
                  <input
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="What is this about?"
                    required
                  />
                  {errors.subject && <div className="error-message">{errors.subject}</div>}
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    id="message"
                    placeholder="Write your message here ..."
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input-group submit-btn-wrap">
                  <button
                    className={`theme-btn ${loading ? 'loading' : ''}`}
                    name="submit"
                    type="submit"
                    id="submit-form"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
