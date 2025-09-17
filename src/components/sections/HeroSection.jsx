import CountdownTimer from '../UI/CountdownTimer';
import { styles } from '../../styles/style';
import { Box, Button, Typography } from '@mui/material';
import img from '../../assets/Speech.jpg';
import Header from '../layout/header';

const HeroSection = () => {
    return (
        <>
            <div style={{
                ...styles.heroSection,
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }} className='hero-section'>
                <Header />
                <div style={styles.heroContent}>
                    <div>
                        <span style={styles.chip}>June 12, 2025</span>
                        <span style={styles.chip}>Mumbai, India</span>
                    </div>

                    <Typography style={styles.heroSubtitle} fontSize={56} fontWeight={600} color='white'>
                        Intelligent Enterprise Roundtable
                    </Typography>

                    <Typography style={styles.heroSubtitle} fontSize={16} color='white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo
                    </Typography>

                    <Box display="flex" flexDirection="column" alignItems="center">
                        <button style={{ ...styles.btnPrimary, fontSize: '1.1rem', padding: '16px 32px', marginBottom: '48px' }}>
                            Register Now
                        </button>
                        <Button variant="outlined" sx={{ borderColor: 'white', color: 'white', }}>Contact Us</Button>
                    </Box>

                    <CountdownTimer />
                </div>
            </div>
        </>
    );
};

export default HeroSection;