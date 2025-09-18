import React from 'react';
import AgendaItem from '../UI/AgendaItem';
import { styles } from '../../styles/style';

const AgendaSection = () => {
    const agendaData = [
        { time: '02:45 PM', title: 'Event Entry & Registration' },
        { time: '06:00 PM', title: 'Accelerate Digital Transformation' },
        { time: '06:45 PM', title: 'SAP What & Business Value Booster' },
        { time: '07:00 PM', title: 'Snack / break' },
        { time: '07:15 AM', title: 'Transform your Business on the Cloud for Real with SAP' },
        { time: '08:30 PM', title: 'Fireside Chat & Customer Journey with IBM' },
        { time: '09:45 PM', title: 'Achieving Data Tribe in Supply Chain' },
        { time: '08:30 PM', title: 'Live Q&A' },
        { time: '09:00 PM', title: 'Wrap-up & Networking Dinner' },
    ];
    return (
        <>
            <div style={{ ...styles.section, backgroundColor: '#121212', maxWidth: '100%', overflowX: 'hidden' }} sx={{ px: { xs: 0, md: 5 } }}>
                <div style={styles.sectionContent} sx={{ px: { xs: 0, md: 5 } }}>
                    <div style={styles.agendaHeader}>
                        <h2 style={{ ...styles.sectionTitle, color: 'white' }}>
                            Event <span style={{ ...styles.highlight, color: "#FF6B35" }}>Agenda</span>
                        </h2>
                        <span style={styles.agendaDownload}>Download Agenda</span>
                    </div>

                    <p style={{ ...styles.sectionSubtitle, color: 'white' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>

                    <div style={styles.agendaList}>
                        {agendaData.map((item, index) => (
                            <AgendaItem key={index} {...item}
                                style={{
                                    ...styles.agendaItem,
                                    borderBottom: index === length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)'
                                }} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default AgendaSection;