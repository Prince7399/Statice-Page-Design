import React from 'react'
import { styles } from '../../styles/style'
import { Box, Button, Typography } from '@mui/material'

const CollaboratorsSection = () => {
    return (
        <>
            <Box style={{ ...styles.section, color: 'white' }}>
                <Box style={styles.sectionContent} display="flex" flexWrap={'wrap'} flexDirection={{ sx: 'column', md: 'row' }} alignItems="center" py={8} px={2} sx={{ backgroundColor: '#121212' }}>
                    <Box width={{ xs: '100%', md: '50%' }} mb={{ xs: 4, md: 0 }}>
                        <h2 style={styles.sectionTitle}>
                            Our <span style={{ ...styles.highlight, color: "#FF6B35" }}>Collaborators</span>
                        </h2>
                        <Typography>
                            Lorem iTypographysum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                        </Typography>
                        <Button style={styles.collaborationButton}>Become a Member</Button>
                    </Box>
                    <Box display={'flex'} flexDirection={{ sx: 'column', md: 'row' }} flexWrap="wrap" justifyContent="center" alignContent={'center'} gap={4} py={4} px={1} sx={{ backgroundColor: '#121212' }}>
                        <img src={''} alt="Collaborator 1" style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
                        <img src={''} alt="Collaborator 2" style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
                        <img src={''} alt="Collaborator 3" style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CollaboratorsSection
