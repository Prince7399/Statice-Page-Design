// components/layout/Footer.js
import React from 'react';
import { styles } from '../../styles/style';

const Footer = () => {
    return (
        <div style={{ ...styles.footer, color: 'white' }}>
            <div style={styles.sectionContent} sx={styles.sectionContent}>
                <div style={styles.footerContent}>
                    <div style={styles.footerText}>
                        © 2021 All Rights Reserved
                    </div>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        <div style={styles.footerText}>
                            info@intelligententerpriseround.com
                        </div>
                        <div style={styles.footerText}>
                            +91 9876543210
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;