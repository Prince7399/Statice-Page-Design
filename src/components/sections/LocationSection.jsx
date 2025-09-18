import { Box, Typography, Button, Paper } from "@mui/material";

const LocationSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: "100vh",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    position: "relative",
                    backgroundImage: "url('/src/assets/ReverFront.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        maxWidth: 400,
                        p: 4,
                        borderRadius: 3,
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        📍 Novotel, Ahmedabad
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        6pm to 8pm
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Iscon Cross Roads, Sarkhej - Gandhinagar Hwy, next to Wide Angle
                        Cinema, Ahmedabad, Gujarat 380015
                    </Typography>

                    <Box sx={{ my: 2, borderTop: "1px solid rgba(255,255,255,0.2)" }} />

                    <Typography variant="body2" sx={{ mb: 1 }}>
                        E-Mail: info@loremipsum.in
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Mob No: 022-66221640
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            py: 1.5,
                            borderRadius: 2,
                            backgroundColor: "#1976d2",
                            "&:hover": { backgroundColor: "#115293" },
                            textTransform: "none",
                        }}
                    >
                        Reserve your Spot Now
                    </Button>

                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                        Seats are Limited — Secure your spot today
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ flex: 1, minHeight: { xs: "300px", md: "100%" } }}>
                <iframe
                    title="Novotel Ahmedabad"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.101864933215!2d72.50219027508384!3d23.021111479168363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b2887c7d1c5%3A0x7e7a7b3f91bb64a7!2sNovotel%20Ahmedabad!5e0!3m2!1sen!2sin!4v1695032765865!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </Box>
    );
};

export default LocationSection;