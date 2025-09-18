import { styles } from '../../styles/style'
import backImg from "../../assets/FloorBlackandWhite.jpg"
import { Box } from '@mui/material'

const AboutSection = () => {
    return (
        <div style={{ ...styles.section, ...styles.aboutSection }}>
            <Box>
                <img src={backImg} alt="Background" style={{ width: '100%', height: 'auto', }} />
            </Box>
            <Box style={{ ...styles.sectionContent, paddingTop: '40px' }}>
                <h2 style={styles.sectionTitle}>
                    <span style={{ color: 'white' }}>About</span> <span style={styles.highlight}>Event</span>
                </h2>

                <p style={{ opacity: '0.8', lineHeight: '1.8', maxWidth: '800px', color: 'white' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </Box>
        </div>
    )
}

export default AboutSection
