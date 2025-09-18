// components/layout/Header.js
import React from 'react';
import Button from '../Ui/Button';
import { styles } from '../../styles/style';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from '../../assets/logo.png';
import { Box } from '@mui/material';

const Header = () => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    maxHeight: '104px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: { xs: 2, sm: 4, md: 8, lg: 12 },
                }}
            >
                <div style={styles.headerContent}>
                    <div style={styles.logo}>
                        <img src={logo} alt="Logo" style={{ height: '40px' }} />
                    </div>
                    <div style={styles.navDots}>
                        <LinkedInIcon sx={{ color: 'white' }} />
                        <FacebookIcon sx={{ color: 'white' }} />
                        <TwitterIcon sx={{ color: 'white' }} />
                        <YouTubeIcon sx={{ color: 'white' }} />
                    </div>
                    <button style={styles.btnPrimary}>Register</button>
                </div>
            </Box>
        </>
    );
};

export default Header;