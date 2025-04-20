import { Box, Typography, Button, Stack } from "@mui/material";

export const ExplorePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      
        alignItems:"center",
        height: "50vh",
        width: "100%",
        bgcolor: "#EDE8E3",
      }}
    >
      {/* Left Side - Text */}
      <Box
        sx={{
          height: "100%",
          width: "40%",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent:"center",
          left:"20%",
          bgcolor: "#F5F3EF", // lighter version of #C9C2B2
        }}
      >
        <Typography variant="h3" fontWeight={200} mb={1} ml={5}>
          Explore collaborative articles
        </Typography>
        <Typography variant="h5" ml={5}  fontWeight={200}>
          We’re unlocking community knowledge in a new <br/> way. Experts add insights
          directly into <br/> each article, started with the help of AI.
        </Typography>
      </Box>

      {/* Right Side - Buttons */}
      <Box sx={{
          height: "100%",
          width: "60%",
          p: 4,
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          bgcolor: "#F5F3EF", // match the left side
          justifyContent:"center",
          gap:2,
        }}
        
      >
     <Box sx={{
          height: "90%",
          width: "90%",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          bgcolor: "#F5F3EF", // match the left side
          justifyContent:"center",
          mt:4,
          gap:2
        }}>
     {[
          "Marketing",
          "Public Administration",
          "Healthcare",
          "Engineering",
          "IT Services",
          "Sustainability",
          "Business Administration",
          "Telecommunications",
          "HR Management",
          "Show all",
        ].map((text) => (
          <Button key={text} variant="outlined" sx={{ borderRadius: 20, fontSize: "1.1rem", gap:2 }}>
            {text}
          </Button>
        ))}
     </Box>
      </Box>
    </Box>
  );
};
