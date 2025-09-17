// components/sections/FeaturesSection.js
import React from 'react';
import FeatureCard from '../UI/FeatureCard';
import { styles } from '../../styles/style';

const FeaturesSection = () => {
    const features = [
        {
            icon: '🌐',
            title: 'Discover How APIs Rule',
            description: 'Lorem ipsum dolor sit amet...'
        },
        {
            icon: '🤖',
            title: 'AI-first Vision',
            description: 'Lorem ipsum dolor sit amet...'
        },
        {
            icon: '⚙️',
            title: 'SAP S/4 Optimization',
            description: 'Lorem ipsum dolor sit amet...'
        }
    ];

    return (
        <>
            <div style={{ ...styles.section, backgroundColor: '#000', color: 'white' }}>
                <div style={styles.sectionContent}>
                    <h2 style={styles.sectionTitle}>
                        What you will <span style={styles.highlight}>learn</span>
                    </h2>

                    <p style={styles.sectionSubtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default FeaturesSection;