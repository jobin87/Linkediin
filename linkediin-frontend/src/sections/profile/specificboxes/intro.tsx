import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, Link, Avatar, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useLocalStorage } from "src/hooks/use-local-storage";
import { EditIconButton } from "src/components/editicon-button/edit-icon";
import { PhotoCamera } from "@mui/icons-material";

export function Intro() {


     const { state: savedImage, setState: setSavedImage } =
        useLocalStorage<string>("savedImage", "");
      const [image, setImage] = useState<string | null>(null);
    
      // Banner image
      const { state: savedBannerImage, setState: setBannerSavedImage } =
        useLocalStorage<string>("savedBannerImage", "");
      const [Bannerimage, setBannerImage] = useState<string | null>(null);
    
      // Load avatar
      useEffect(() => {
        if (savedImage) setImage(savedImage);
      }, [savedImage]);
    
      // Load banner
      useEffect(() => {
        if (savedBannerImage) setBannerImage(savedBannerImage);
      }, [savedBannerImage]);
   const buttonLabels = [
     "Open to",
     "Add profile section",
     "Enhance profile",
     "Resources",
   ];
     const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       const file = event.target.files?.[0];
       if (!file) return;
       const reader = new FileReader();
       reader.onloadend = () => {
         const base64 = reader.result as string;
         setBannerImage(base64);
         setBannerSavedImage(base64);
       };
       reader.readAsDataURL(file);
       event.target.value = "";
     };

     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         const file = event.target.files?.[0];
         if (!file) return;
         const reader = new FileReader();
         reader.onloadend = () => {
           const base64 = reader.result as string;
           setImage(base64);
           setSavedImage(base64);
         };
         reader.readAsDataURL(file);
         event.target.value = "";
       };
     

  return (
    <Box
    sx={{
      bgcolor: "background.paper",
      borderRadius: 1,
      overflow: "hidden",
      mt: 1,
      boxShadow: 1,
      height: "500px",
      position: "relative",
    }}
  >
    {/* Banner */}
    <Box
      sx={{
        height: "170px",
        backgroundImage: `url('${
          Bannerimage ||
          "https://images.unsplash.com/photo-1503264116251-35a269479413"
        }')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <EditIconButton enableFileUpload onFileChange={handleBannerChange} />
    </Box>

    <Box
      sx={{ overflow: "hidden", p: 2, mt: 5 ,display:"flex",flexDirection:"row",gap:1}}
    >
        <Box sx={{}}>
        <Typography
        variant="h5"
        sx={{
          lineHeight: 1.2,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        Jobin Jose
        <img
          src="/svg/guard.svg"
          alt="Verified badge"
          width="20"
          height="20"
        />
      </Typography>

      <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
        MERN Stack Developer || Typescript || Java || DSA
      </Typography>
      <Typography
        variant="body2"
        sx={{ lineHeight: 2, color: "text.secondary" }}
      >
        pathanamthitta district, India ·{" "}
        <Box component="span" sx={{ color: "#0a66c2", cursor: "pointer" }}>
          contact info
        </Box>
      </Typography>

      <Typography
        variant="caption"
        sx={{ color: "#0a66c2", cursor: "pointer", fontWeight: "bold" }}
      >
        Personal Portfolio <br />
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "#0a66c2", cursor: "pointer", fontWeight: "bold" }}
      >
        500+ connections
      </Typography>
      <Box display="flex" gap={1} sx={{ mt: 1 }}>
        {buttonLabels.map((label, index) => (
          <Button
            size="small"
            sx={{
              borderRadius: "20px",
              backgroundColor:
                label === "Open to" ? "#0a66c2" : "transparent",
            }}
            key={label}
            variant={index === 0 ? "contained" : "outlined"}
          >
            {label}
          </Button>
        ))}

        </Box>
   

     
      </Box>
      <Box sx={{ml:8}}>
        <Typography>
            WORKINGPLACE
        </Typography>

        <Typography>
            college
        </Typography>
      </Box>
      
    </Box>
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          p:2
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "48%",
            display: "flex", // Make this box a flex container
            flexDirection: "column", // Stack the content vertically
            justifyContent: "flex-start", // Align items at the start
          }}
        >
          {/* First Box */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column", // Stack the content vertically
              justifyContent: "flex-start", // Align content at the start
              alignItems: "flex-start", // Align content to the left
            }}
          >
            <Typography sx={{ fontSize: "0.75rem", textAlign: "left" }}>
              Open to work
              <br />
              Full-Stack Developer Roles
              <br />
              Show Details
            </Typography>
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "48%",
          }}
        >
          {/* Second Box */}
          <Button
            variant="outlined"
            fullWidth
            sx={{
              height: "100%",
              textAlign: "left", // Align text to the left
            }}
          >
            <Typography sx={{ fontSize: "0.75rem" }}>
              Showcase your services as a section on your profile  <br /> so your
              business can be easily discovered.
              <br />
              <Box component="span" sx={{ color: "#0a66c2" }}>
                Get Started
              </Box>
            </Typography>
          </Button>
         
        </Box>
      </Box>

    {/* Avatar with OpenToWork ring */}
    <Box
      sx={{
        position: "absolute",
        top: 90,
        left: 30,
        width: 125,
        height: 125,
      }}
    >
      {/* Outer ring (background image) */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundImage:
            "url('https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Avatar inside the ring */}
        <Avatar
          src={
            image ||
            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          }
          sx={{
            width: 85,
            height: 85,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* "+" Button */}
        <IconButton
          color="primary"
          component="label"
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            position: "absolute",
            bottom: -4,
            right: -4,
            zIndex: 2,
          }}
        >
          <PhotoCamera sx={{ fontSize: 16 }} />
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageChange}
          />
        </IconButton>
      </Box>
    </Box>
  </Box>
  );
}
