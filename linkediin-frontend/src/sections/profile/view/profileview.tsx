import { Box } from "@mui/material";
import { ProfileCenter } from "../profilecenter";
import { ProfileRight } from "../profileright";

export const ProfileView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "#ECEAE7",
        minHeight: "100%",
      }}
    >
      <ProfileCenter />
      <ProfileRight />
    </Box>
  );
};
