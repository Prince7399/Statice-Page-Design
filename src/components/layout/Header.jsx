// components/layout/Header.js
import React from 'react';
import Button from '../ui/Button';
import { styles } from '../../styles/style';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div style={styles.header}>
            <div style={styles.headerContent}>
                <div style={styles.logo}>
                    <img src={logo} alt="Logo" style={{ height: '40px' }} />
                </div>
                <div style={styles.navDots}>
                    {/* <div style={{ ...styles.dot, ...styles.dotActive }}></div>
                    <div style={styles.dot}></div>
                    <div style={styles.dot}></div>
                    <div style={styles.dot}></div> */}
                    <LinkedInIcon sx={{ color: 'white' }} />
                    <FacebookIcon sx={{ color: 'white' }} />
                    <TwitterIcon sx={{ color: 'white' }} />
                    <YouTubeIcon sx={{ color: 'white' }} />
                </div>
                <button style={styles.btnPrimary}>Register</button>
            </div>
        </div>
    );
};

export default Header;