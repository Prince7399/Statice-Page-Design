import React from 'react'
import { styles } from '../../styles/style'

const CollaboratorsSection = () => {
    return (
        <div style={{ ...styles.section, backgroundColor: 'black', color: 'white' }}>
            <div style={styles.sectionContent}>
                <h2 style={styles.sectionTitle}>
                    Our <span style={{ ...styles.highlight, color: "#FF6B35" }}>Collaborators</span>
                </h2>

                <p style={styles.sectionSubtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>

                <div style={styles.collaboratorsGrid}>
                    <div style={{ ...styles.collaboratorLogo, color: '#666' }}>ORACLE</div>
                    <div style={{ ...styles.collaboratorLogo, color: '#FFD700' }}>SAP</div>
                    <div style={{ ...styles.collaboratorLogo, color: '#FF9900' }}>AWS</div>
                </div>
            </div>
        </div>
    )
}

export default CollaboratorsSection
