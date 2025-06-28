import React from 'react';

const Contact = () => {
    return (
        <section>
            <div className="container">
                <h2 style={{ textAlign: 'center', color: 'var(--accent-color)' }}>Contact</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea rows="5" placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;