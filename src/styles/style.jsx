import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const styles = {
    container: {
        backgroundColor: '#0a0a0a',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
    },
    header: {
        // backdropFilter: 'blur(10px)',
        width: '100%',
        minWidth: '100%',
        // padding: '0px 100px',
        padding: {
            xs: "0px 20px",
            sm: "0px 40px",
            md: "0px 80px",
            lg: "0px 100px",
        },
        maxHeight: '104px'
    },
    headerContent: {
        margin: '0',
        width: '100%',
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxHeight: '104px'
    },
    logo: {
        color: '#4A90E2',
        fontSize: '24px',
        fontWeight: 'bold'
    },
    navDots: {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
    },
    dot: {
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.3)'
    },
    dotActive: {
        background: 'white'
    },
    btnPrimary: {
        background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
        border: 'none',
        padding: '12px 24px',
        color: 'white',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    },
    heroSection: {
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        backgroundImage: 'url("../assets/Speech.jpg")',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    heroContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
    },
    heroTitle: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        fontWeight: '700',
        marginBottom: '24px',
        background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        marginBottom: '32px',
        opacity: '0.9',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    chip: {
        display: 'inline-block',
        padding: '8px 16px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '20px',
        margin: '0 8px 24px 0',
        fontSize: '14px'
    },
    countdownTimer: {
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        marginTop: '48px',
        flexWrap: 'wrap'
    },
    countdownItem: {
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        borderRadius: '12px',
        minWidth: '80px',
        textAlign: 'center'
    },
    countdownValue: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white',
        display: 'block'
    },
    countdownLabel: {
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.7)',
        textTransform: 'capitalize'
    },
    section: {
        padding: '80px 0 0',
        background: '#121212'
    },
    sectionContent: {
        // maxWidth: '1200px',
        padding: '0px 100px',
        // padding: {
        //     xs: "0 20px",
        //     sm: "0 40px",
        //     md: "0 80px",
        //     lg: "0 100px",
        // },
        margin: '0 auto',
        // padding: '0 20px'
    },
    sectionTitle: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: '700',
        textAlign: 'left',
        marginBottom: '16px'
    },
    sectionSubtitle: {
        textAlign: 'center',
        marginBottom: '48px',
        opacity: '0.7',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    highlight: {
        color: 'blue'
    },
    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '32px',
        marginTop: '48px'
    },
    featureCard: {
        background: 'rgba(255,255,255,0.05)',
        padding: '40px',
        borderRadius: '12px',
        textAlign: 'center',
        height: '100%'
    },
    featureIcon: {
        width: '48px',
        height: '48px',
        margin: '0 auto 24px',
        background: '#4A90E2',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
    },
    featureTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '16px'
    },
    featureDescription: {
        opacity: '0.8',
        lineHeight: '1.6'
    },
    aboutSection: {
        background: '#121212',
    },
    collaboratorsGrid: {
        display: 'flex',
        gap: '48px',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    collaboratorLogo: {
        padding: '20px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        opacity: '0.7'
    },
    collaborationButton: {
        textTransform: 'none',
        padding: '10px 16px',
        border: '1px solid #383C43',
        color: 'white',
        marginTop: '24px',
    },
    agendaHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        flexWrap: 'wrap',
        gap: '16px'
    },
    agendaDownload: {
        color: '#4A90E2',
        cursor: 'pointer'
    },
    agendaList: {
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '0'
    },
    agendaItem: {
        display: 'flex',
        padding: '20px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        alignItems: 'center',
        gap: '24px'
    },
    agendaTime: {
        minWidth: '100px',
        color: '#4A90E2',
        fontSize: '14px'
    },
    agendaTitle: {
        fontWeight: '500',
        flex: '1'
    },
    locationSection: {
        background: 'linear-gradient(135deg, #4A90E2, #6BA3F5)',
        position: 'relative'
    },
    locationCard: {
        background: 'rgba(255,255,255,0.95)',
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '500px',
        color: '#333'
    },
    locationTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '16px'
    },
    locationDescription: {
        marginBottom: '24px',
        lineHeight: '1.6',
        color: '#666'
    },
    btnSecondary: {
        background: 'linear-gradient(45deg, #4A90E2, #6BA3F5)',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '25px',
        color: 'white',
        fontWeight: '600',
        cursor: 'pointer',
        marginBottom: '16px'
    },
    newsletterSection: {
        background: 'linear-gradient(135deg, #FF6B35, #FF8E53)',
        textAlign: 'center'
    },
    newsletterForm: {
        display: 'flex',
        gap: '16px',
        width: '200px',
        maxWidth: '100%',
        margin: '0 auto',
        flexWrap: 'wrap',
    },
    emailInput: {
        flex: '1',
        padding: '12px 20px',
        borderRadius: '25px',
        border: 'none',
        outline: 'none',
        minWidth: '250px'
    },
    footer: {
        background: '#0a0a0a',
        padding: '40px 0'
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
    },
    footerText: {
        opacity: '0.7',
        fontSize: '14px'
    }
};

export const SectionContent = styled(Box)(({ theme }) => ({
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '0 16px',
    [theme.breakpoints.up('sm')]: { padding: '0 32px' },
    [theme.breakpoints.up('md')]: { padding: '0 64px' },
    [theme.breakpoints.up('lg')]: { padding: '0 100px' },
}));
