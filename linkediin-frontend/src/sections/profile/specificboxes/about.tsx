import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLocalStorage } from "src/hooks/use-local-storage";
import { EditIconButton } from "src/components/editicon-button/edit-icon";
import { EditAboutDialog } from "../diologues";

export function About() {
  const [openAbout, setOpenAbout] = useState(false);

  const [aboutText, setAboutText] = useState("");
  const handleOpenAbout = () => setOpenAbout(true);
  const handleCloseAbout = () => setOpenAbout(false);

  return (
    <Box
      sx={{
        position: "relative",
        height: 250,
        width: "100%",
        mt: 1.1,
        bgcolor: "white",
        p: "20px",
        borderRadius: "10px",
        mb:1
      }}
    >
      <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
        About
      </Typography>

      <Box sx={{ mt: 2 }}>
      <Typography
          sx={{
            fontSize: "0.8rem",
            color: aboutText ? "text.primary" : "text.secondary",
            fontWeight:400,
            whiteSpace: "pre-line", 
          }}
        >
          {aboutText || "Click the edit icon to add your About information."}
        </Typography>
      </Box>
      <Box
        sx={{
          height: "40%",
          border: "0.4px solid",
          borderColor: "divider",
          p: 2,
          borderRadius: "14px",
          mt:3
        }}
      >
        <EditIconButton onClick={handleOpenAbout} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
            Add a profile photo to help others recognize you.
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "0.7rem", color: "text.secondary", mb: 1 }}>
          Members with a profile photo receive up to 2.3 times as many profile
          views.
        </Typography>
      </Box>

      <EditAboutDialog openAbout={openAbout} onCloseAbout={handleCloseAbout}   aboutText={aboutText}  setAboutText={setAboutText}/>
    </Box>
  );
}
