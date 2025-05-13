import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  Link,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useLocalStorage } from "src/hooks/use-local-storage";
import { EditIconButton } from "src/components/editicon-button/edit-icon";

export function ProfileCenter() {
  // Avatar image
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

  const buttonLabels = [
    "Open to",
    "Add profile section",
    "Enhance profile",
    "Resources",
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogForBox1, setOpenDialogForBox1] = useState(false);
  const [openDialogForBox2, setOpenDialogForBox2] = useState(false);
  const [setOpenaboutdialogue, setaboutdialogue] = useState(false);

  const handleDialogToggle = () => setOpenDialog(!openDialog);
  const handleDialogToggleForBox1 = () =>
    setOpenDialogForBox1(!openDialogForBox1);
  const handleDialogToggleForBox2 = () =>
    setOpenDialogForBox2(!openDialogForBox2);
  const handleaboutdialogue = () => setaboutdialogue(!setOpenaboutdialogue);

  return (
    <Box sx={{ width: 730, paddingRight: 2, paddingTop: 2 }}>
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
          sx={{ bgcolor: "background.paper", overflow: "hidden", p: 2, mt: 5 }}
        >
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
                sx={{ borderRadius: "20px",backgroundColor: label === "Open to" ? "#0a66c2" : "transparent", }}
                key={label}
                variant={index === 0 ? "contained" : "outlined"}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "48%",
                mt: 4,
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
                mt: 4,
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
                  Showcase your services as a section on your profile so your
                  business can be easily discovered.
                  <br />
                  <Box component="span" sx={{ color: "#0a66c2" }}>
                    Get Started
                  </Box>
                </Typography>
              </Button>
              <EditOutlinedIcon
                onClick={handleDialogToggleForBox2}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  fontSize: 20,
                  cursor: "pointer",
                }}
              />
            </Box>
            
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

          <Typography
            sx={{ fontSize: "0.7rem", color: "text.secondary", mb: 1 }}
          >
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
      <Box
        sx={{
          position: "relative",
          height: 200,
          width: "100%",
          mt: 1.1,
          bgcolor: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Padded Inner Content */}
        <Box sx={{ p: "20px", flexGrow: 1 }}>
          <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
            Analytics
          </Typography>

          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              mt: 0.5,
            }}
          >
            <Box
              component="img"
              src="/svg/eye.svg"
              alt="Private icon"
              width="15"
              height="15"
              sx={{ color: "text.secondary" }}
            />
            Private to you
          </Typography>

          {/* Analytics Cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              mt: 2,
            }}
          >
            <Box sx={{ flex: 1, bgcolor: "#f9f9f9", borderRadius: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/svg/person.svg"
                  alt="Profile Views Icon"
                  sx={{ width: 20, height: 20, color: "text.secondary", mr: 1 }}
                />
                90 Profile Views
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.8rem", ml: 3.5 }}>
                Discover who's viewed your profile.
              </Typography>
            </Box>

            <Box sx={{ flex: 1, bgcolor: "#f9f9f9", borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ fontSize: "0.9rem" }}>
                60 Post Impressions
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                Check out who's engaging with your posts.
              </Typography>
            </Box>

            <Box sx={{ flex: 1, bgcolor: "#f9f9f9", borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ fontSize: "0.9rem" }}>
                13 Search Appearances
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.7rem" }}>
                See how often you appear in search results.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Full-Width Button (not affected by padding) */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            color: "primary.black",
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "none",
            borderTop: "1px solid #eee",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            border: "1px solid",
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
          }}
        >
          Show all analytics
        </Button>
      </Box>
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
          About
        </Typography>
        <Box
          sx={{
            height: "40%",
            border: "0.4px solid",
            borderColor: "divider",
            p: 2,
            mt: 2,
            borderRadius: "14px",
          }}
        >
          <EditIconButton onClick={() => setOpenaboutdialogue(true)} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
              Add a profile photo to help others recognize you.
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "0.7rem", color: "text.secondary", mb: 1 }}
          >
            Members with a profile photo receive up to 2.3 times as many profile
            views.
          </Typography>
        </Box>
      </Box>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          position: "relative",
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative",
              alignItems: "center",
            }}
          >
            <Typography>Activity</Typography>
            <Button
              variant="outlined"
              sx={{
                lineHeight: 1,
                color: "#0a66c2",
                border: "1px solid  #0a66c2",
                borderRadius: "20px",
                height: "30px",
                width: "130px",
                position: "absolute",
                right: 38,
              }}
            >
              create Post
            </Button>
          </Box>
          <Link
            href="#"
            underline="hover"
            variant="caption"
            fontWeight={600}
            sx={{ color: "#0a66c2", lineHeight: 0.8, width: 82 }}
          >
            550 followers
          </Link>
        </Typography>
        <Box sx={{ mt:2, height: 40,gap:1, display: "flex"}}>
          <Button sx={{ height: 30,borderRadius: "20px", bgcolor:"#01754f"}}  variant="contained">
            posts
          </Button>
          <Button  sx={{ height: 30,borderRadius: "20px"}} variant="outlined">comments</Button>
          <Button  sx={{ height: 30,borderRadius: "20px"}} variant="outlined">Videos</Button>
        </Box>

        <Typography variant="body2" color="text.secondary">
          You haven't posted lately
        </Typography>
        <EditOutlinedIcon
          onClick={handleDialogToggle}
          sx={{
            position: "absolute",
            top: 20,
            right: 8,
            fontSize: 20,
            cursor: "pointer",
          }}
        />
      </Paper>

      {/* Experience Box */}
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 2,
          position: "relative",
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Add your work experience to showcase your career.
        </Typography>
        <EditOutlinedIcon
          onClick={handleDialogToggleForBox1}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: 20,
            cursor: "pointer",
          }}
        />
      </Paper>

      {/* Education Box */}
      <Paper
        elevation={0}
        variant="outlined"
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 2,
          position: "relative",
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          Education
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Add your academic background to enhance credibility.
        </Typography>
        <EditOutlinedIcon
          onClick={handleDialogToggleForBox2}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            fontSize: 20,
            cursor: "pointer",
          }}
        />
      </Paper>
    </Box>
  );
}
