import React from 'react'
import { styles } from '../../styles/style'

const LocationSection = () => {
    return (
        <div style={{ ...styles.section, ...styles.locationSection }}>
            <div style={styles.sectionContent}>
                <div style={{ maxWidth: '500px' }}>
                    <div style={styles.locationCard}>
                        <h3 style={styles.locationTitle}>Surat, Gujarat</h3>
                        <p style={styles.locationDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button style={styles.btnSecondary}>
                            📍 View on Map
                        </button>
                        <p style={{ fontSize: '14px', color: '#999' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSection
