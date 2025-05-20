import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, Link } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export function Suggested() {
  const [openAboutDialogue, setOpenAboutDialogue] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleDialogToggle = () => setOpenDialog(!openDialog);

  const [createPostOpenDialog, setCreatePostOpenDialog] = useState(false);

  const handleCreatePostDialog = () =>
    setCreatePostOpenDialog(!createPostOpenDialog);

  const handleaboutdialogue = () => setOpenAboutDialogue(!openAboutDialogue);

  return (
    <Box
      sx={{
        position: "relative",
        height: 260,
        width: "100%",
        mt: 1.1,
        bgcolor: "white",
        p: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
        Suggested for you
      </Typography>
      <Typography
        sx={{
          fontSize: "0.7rem",
          color: "text.secondary",
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Box
          component="img"
          src="/svg/eye.svg"
          alt="Verified badge"
          width="15"
          height="15"
          sx={{
            color: "text.secondary", // Only works if SVG uses fill="currentColor"
          }}
        />
        Private to you
      </Typography>

      <Box
        sx={{
          height: "70%",
          border: "0.4px solid",
          borderColor: "divider",
          p: 2,
          mt: 2,
          borderRadius: "14px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Box
            component="img"
            src="/svg/camera.svg"
            alt="Camera icon"
            width="16"
            height="16"
            sx={{
              color: "text.secondary",
            }}
          />
          <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
            Add a profile photo to help others recognize you.
          </Typography>
        </Box>

        <Typography sx={{ fontSize: "0.7rem", color: "text.secondary", mb: 1 }}>
          Members with a profile photo receive up to 2.3 times as many profile
          views.
        </Typography>

        <Button
          variant="outlined"
          component="span"
          sx={{
            color: "primary.black",
            fontSize: "0.75rem",
            fontWeight: 500,
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Add photo
        </Button>
      </Box>
    </Box>
  );
}
