import React from 'react';
import { styles } from '../../styles/style';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <>
            <div style={styles.featureCard}>
                <div style={styles.featureIcon}>{icon}</div>
                <h3 style={styles.featureTitle}>{title}</h3>
                <p style={styles.featureDescription}>
                    {description}
                </p>
            </div>
        </>
    );
};

export default FeatureCard;