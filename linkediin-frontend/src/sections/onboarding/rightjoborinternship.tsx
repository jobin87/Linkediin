import { Box, Typography, Button, Stack } from "@mui/material";

export const RightJobOrIntershipPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      
        alignItems:"center",
        height: "70vh",
        width: "100%",
        bgcolor: "white",
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
          top:"70%",
          bgcolor: "white", // lighter version of #C9C2B2
        }}
      >
        <Typography variant="h3" fontWeight={200} mb={1} ml={5} top="50%">
        Find the right job or<br/>internship for you
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
          bgcolor: "white", // match the left side
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
          bgcolor: "white", // match the left side
          justifyContent:"center",
          mt:4,
          gap:2
        }}>
     {[
        "Engineering",
         "Business Development",
         "Finance",
        " Administrative Assistant",
         "Retail Associate",
         "Customer Service",
         "Operations",
         "Information Technology",
         "Marketing",
         "Human Resources",
         "Show more" ,
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
