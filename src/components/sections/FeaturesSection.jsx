import { Box, Typography } from "@mui/material";

import CompasIcon from "../../assets/compassIcon.svg?react";
import AIChip from "../../assets/AIused.svg?react";
import GearIcon from "../../assets/gearIcon.svg?react";

const features = [
    {
        icon: <CompasIcon style={{ width: 120, height: 120, fill: "#4A90E2" }} />,
        title: "Discover RISE with SAP",
        description:
            "Discover how Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    },
    {
        icon: <AIChip style={{ width: 120, height: 120, fill: "#4A90E2" }} />,
        title: "AI use-cases",
        description:
            "Discover how Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    },
    {
        icon: <GearIcon style={{ width: 120, height: 120, fill: "#4A90E2" }} />,
        title: "SAP Transformation",
        description:
            "Discover how Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    },
];

const FeaturesSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#121212",
                color: "white",
                py: { xs: 6, md: 10 },
                textAlign: "center",
                mx: 'auto',
                px: '100px',
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: "700", mb: 2 }}
            >
                What you will{" "}
                <Box component="span" sx={{ color: "#FF8E53" }}>
                    learn
                </Box>
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    opacity: 0.8,
                    maxWidth: "700px",
                    mx: "auto",
                    mb: { xs: 6, md: 8 },
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 4,
                    mt: 4,
                }}
            >
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: {
                                xs: "1 1 100%",
                                sm: "1 1 45%",
                                md: "1 1 30%",
                            },
                            maxWidth: { xs: "100%", sm: "45%", md: "30%" },
                            textAlign: "center",
                            px: { xs: 0, md: 2 },
                            textAlign: 'left',
                        }}
                    >
                        {feature.icon}
                        <Typography
                            fontSize={18}
                            sx={{ fontWeight: 600, mt: 2, mb: 1 }}
                        >
                            {feature.title}
                        </Typography>
                        <Typography
                            fontSize={14}
                            sx={{ opacity: 0.8, lineHeight: 1.6 }}
                        >
                            {feature.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default FeaturesSection;
