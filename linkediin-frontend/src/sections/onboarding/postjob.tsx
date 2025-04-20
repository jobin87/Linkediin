import { Box, Button, Typography } from "@mui/material";

export const PostJobPage = () => {
  return (
    <Box
      sx={{
        height: "40vh",
        bgcolor: "#EDE8E3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2, // spacing between text and button
      }}
    >
      <Typography variant="h3" fontWeight={200} sx={{ color: "red", textAlign: "center" }}>
        Post your job for millions of people to see
      </Typography>
      <Button variant="outlined" sx={{ width: "200px", borderRadius: 3, color:"#3483eb",borderColor: "#3483eb", }}>
        Post a job
      </Button>
    </Box>
  );
};
