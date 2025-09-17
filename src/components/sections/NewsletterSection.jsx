// components/forms/NewsletterForm.js
import React from 'react';
import { useForm } from '../../hooks/useForm';
import Button from '../UI/Button';
import { styles } from '../../styles/style';

const NewsletterSection = () => {
    const { values, handleChange, reset } = useForm({ email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', values.email);
        // Handle form submission
        reset();
    };

    return (
        <div style={{ ...styles.section, ...styles.newsletterSection }}>
            <div style={styles.sectionContent}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '16px' }}>
                    Subscribe our newsletter
                </h2>
                <p style={{ marginBottom: '32px', opacity: '0.9' }}>
                    Subscribe to our newsletter for updates on events and news.
                </p>

                <div style={styles.newsletterForm}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                    <button style={{ ...styles.btnPrimary, background: 'rgba(0,0,0,0.2)' }}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;