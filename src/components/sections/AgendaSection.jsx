// import React from 'react';
// import AgendaItem from '../UI/AgendaItem';
// import { styles } from '../../styles/style';

// const AgendaSection = () => {
//     const agendaData = [
//         { time: '02:45 PM', title: 'Event Entry & Registration' },
//         { time: '06:00 PM', title: 'Accelerate Digital Transformation' },
//         { time: '06:45 PM', title: 'SAP What & Business Value Booster' },
//         { time: '07:00 PM', title: 'Snack / break' },
//         { time: '07:15 AM', title: 'Transform your Business on the Cloud for Real with SAP' },
//         { time: '08:30 PM', title: 'Fireside Chat & Customer Journey with IBM' },
//         { time: '09:45 PM', title: 'Achieving Data Tribe in Supply Chain' },
//         { time: '08:30 PM', title: 'Live Q&A' },
//         { time: '09:00 PM', title: 'Wrap-up & Networking Dinner' },
//     ];
//     return (
//         <>
//             <div style={{ ...styles.section, backgroundColor: '#121212', maxWidth: '100%', overflowX: 'hidden' }} sx={{ px: { xs: 0, md: 5 } }}>
//                 <div style={styles.sectionContent} sx={{ px: { xs: 0, md: 5 } }}>
//                     <div style={styles.agendaHeader}>
//                         <h2 style={{ ...styles.sectionTitle, color: 'white' }}>
//                             Event <span style={{ ...styles.highlight, color: "#FF6B35" }}>Agenda</span>
//                         </h2>
//                         <span style={styles.agendaDownload}>Download Agenda</span>
//                     </div>

//                     <p style={{ ...styles.sectionSubtitle, color: 'white' }}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//                     </p>

//                     <div style={styles.agendaList}>
//                         {agendaData.map((item, index) => (
//                             <AgendaItem key={index} {...item}
//                                 style={{
//                                     ...styles.agendaItem,
//                                     borderBottom: index === length - 1 ? 'none' : '1px solid rgba(255,255,255,0.1)'
//                                 }} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// };

// export default AgendaSection;


import React from "react";
import {
    Box,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";

const agendaData = [
    {
        time: "05:45 PM",
        title: "Event Entry & Registration",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    { time: "06:00 PM", title: "Accelerate Digital Transformation" },
    { time: "06:40 PM", title: "SAP Move & Business Value Session" },
    { time: "07:00 PM", title: "SHORT BREAK", isBreak: true },
    {
        time: "07:15 AM",
        title: "Transform your Business on the Cloud for RISE with SAP.",
    },
    { time: "07:30 PM", title: "Fireside Chat, a Customer Journey with RISE." },
    { time: "07:45 PM", title: "Achieving Faster Time to Value" },
    { time: "08:30 PM", title: "Live Q/A" },
    { time: "09:00 PM", title: "Wrap-up & Networking Dinner" },
];

const EventAgenda = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                backgroundColor: '#121212',
                backgroundImage: "url('/src/assets/BackFrame.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                px: { xs: 2, sm: 4, md: 8 },
                py: { xs: 4, md: 6 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    mb: 4,
                }}
            >
                <Box>
                    <Typography variant="h3" fontWeight="bold">
                        Event{" "}
                        <Box component="span" color="orange">
                            Agenda
                        </Box>
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, maxWidth: "700px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam.
                    </Typography>
                </Box>
                <Button
                    variant="outlined"
                    sx={{ mt: { xs: 2, sm: 0 }, color: "white", borderColor: "white" }}
                    startIcon={<DownloadIcon />}
                >
                    Download Agenda
                </Button>
            </Box>

            {/* Day Box */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    bgcolor: "rgba(0,0,0,0.6)",
                    borderRadius: 2,
                    p: 2,
                    mb: 3,
                }}
            >
                <Typography variant="subtitle2">DAY</Typography>
                <Typography variant="h6" fontWeight="bold">
                    Monday
                </Typography>
                <Typography variant="body2">June 12, 2025</Typography>
            </Box>

            {/* Agenda List */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {agendaData.map((item, index) => (
                    <Accordion
                        key={index}
                        sx={{
                            background: "transparent",
                            borderBottom: "1px solid rgba(255,255,255,0.2)",
                            boxShadow: "none",
                            "&::before": { display: "none" },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={!item.isBreak ? <ExpandMoreIcon sx={{ color: "white" }} /> : null}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                px: 0,
                            }}
                        >
                            <Typography variant="subtitle1" color="white" fontWeight="bold" sx={{ minWidth: "100px" }}>
                                {item.time}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: item.isBreak ? "gray" : "white", fontWeight: item.isBreak ? "medium" : "bold" }}
                            >
                                {item.title}
                            </Typography>
                        </AccordionSummary>
                        {item.description && (
                            <AccordionDetails>
                                <Typography variant="body2">{item.description}</Typography>
                            </AccordionDetails>
                        )}
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
};

export default EventAgenda;