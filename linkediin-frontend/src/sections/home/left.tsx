import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useLocalStorage } from "src/hooks/use-local-storage";
import { EditIconButton } from "src/components/editicon-button/edit-icon";

export function DashboardLeft() {
  const { state: savedImage, setState: setSavedImage } =
    useLocalStorage<string>("savedImage", "");
  const [image, setImage] = useState<string | null>(null);

  const { state: savedBannerImage, setState: setBannerSavedImage } =
    useLocalStorage<string>("savedBannerImage", "");
  const [bannerImage, setBannerImage] = useState<string | null>(null);

  useEffect(() => {
    if (savedImage) setImage(savedImage);
  }, [savedImage]);

  useEffect(() => {
    if (savedBannerImage) setBannerImage(savedBannerImage);
  }, [savedBannerImage]);

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
    <Box sx={{ width: 210, mt:2 }}>
      {/* Profile Card */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderRadius: 1,
          overflow: "hidden",
          mb: 2,
          boxShadow: 1,
          height: 300,
          position: "relative",
        }}
      >
        {/* Banner */}
        <Box
          sx={{
            height: 60,
            backgroundImage: `url('${
              bannerImage ||
              "https://images.unsplash.com/photo-1503264116251-35a269479413"
            }')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </Box>

        {/* Avatar with OpenToWork ring */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: "20%",
            transform: "translateX(-50%)",
            width: 60,
            height: 60,
          }}
        >
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
            <Avatar
              src={
                image ||
                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
              sx={{
                width: 40,
                height: 40,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <IconButton
              color="primary"
              component="label"
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                position: "absolute",
                bottom: -6,
                right: -6,
                zIndex: 2,
              }}
            >
              <PhotoCamera sx={{ fontSize: 16 }} />
              <input hidden accept="image/*" type="file" onChange={handleImageChange} />
            </IconButton>
          </Box>
        </Box>

        {/* Name and Title */}
        <Box sx={{ textAlign: "center", mt: 7 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Jobin Jose
          </Typography>
          <Typography variant="body2" color="text.secondary">
            MERN Stack Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
