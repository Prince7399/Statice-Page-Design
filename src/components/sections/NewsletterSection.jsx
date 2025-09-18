import { Box, Typography, TextField, Button, Grid, Link } from "@mui/material";

const NewsletterSection = () => {
    return (
        <Box sx={{ bgcolor: "#121212", p: { xs: 3, sm: 4, md: 6 }, }}>
            <Box
                sx={{
                    bgcolor: "#4a1d0a",
                    color: "white",
                    borderRadius: 2,
                    p: { xs: 3, sm: 4, md: 6 },
                    maxWidth: "1200px",
                    mx: "auto",
                    my: 6,
                }}
            >
                {/* <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                mb: 2,
                                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                            }}
                        >
                            Subscribe our <br /> newsletter
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#e0d7d4" }}>
                            Subscribe to our newsletter for updates on events, announcements,
                            and exclusive offers. Don’t miss out!
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 500, mb: 1, color: "#e0d7d4" }}
                        >
                            Stay up to date
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                            <TextField
                                fullWidth
                                variant="filled"
                                placeholder="Enter your email"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        bgcolor: "rgba(255,255,255,0.05)",
                                        borderRadius: 1,
                                        color: "white",
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#e65100",
                                    textTransform: "none",
                                    px: 3,
                                    "&:hover": { bgcolor: "#bf360c" },
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>

                        <Typography
                            variant="caption"
                            sx={{ color: "#cfc4c1", display: "block" }}
                        >
                            By submitting you agree to our{" "}
                            <Link href="#" underline="hover" color="inherit" sx={{ fontWeight: 500 }}>
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Grid>
                </Grid> */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }, // stack on mobile, row on desktop
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    {/* Left side (Text) */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                mb: 2,
                                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                            }}
                        >
                            Subscribe our <br /> newsletter
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#e0d7d4" }}>
                            Subscribe to our newsletter for updates on events, announcements,
                            and exclusive offers. Don’t miss out!
                        </Typography>
                    </Box>

                    {/* Right side (Form) */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 500, mb: 1, color: "#e0d7d4" }}
                        >
                            Stay up to date
                        </Typography>

                        {/* Email + Button */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", sm: "row" }, // stack on xs, row on sm+
                                gap: 1,
                                mb: 1,
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                placeholder="Enter your email"
                                InputProps={{
                                    disableUnderline: true,
                                    sx: {
                                        bgcolor: "rgba(255,255,255,0.05)",
                                        borderRadius: 1,
                                        color: "white",
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: "#e65100",
                                    textTransform: "none",
                                    px: 3,
                                    "&:hover": { bgcolor: "#bf360c" },
                                    flexShrink: 0,
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>

                        <Typography
                            variant="caption"
                            sx={{ color: "#cfc4c1", display: "block" }}
                        >
                            By submitting you agree to our{" "}
                            <Link
                                href="#"
                                underline="hover"
                                color="inherit"
                                sx={{ fontWeight: 500 }}
                            >
                                Privacy Policy
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default NewsletterSection;