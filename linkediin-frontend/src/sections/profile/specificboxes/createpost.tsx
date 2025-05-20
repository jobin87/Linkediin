import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, Link } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { CreatePostDialog } from "../diologues";

export function Post() {
  const [openCreatePost, setOpenCreatePost] = useState(false);

  const handleOpenCreatePost = () => setOpenCreatePost(true);
  const handleCloseCreatePost = () => setOpenCreatePost(false);

  const [postText, setPostText] = useState("");
  const [media, setMedia] = useState<File | null>(null);

  const handleSavePost = () => {
    console.log("Saved post:", { postText, media });
    // Store it in state, send to backend, etc.
    setOpenCreatePost(false);
    setPostText("");
    setMedia(null);
  };

  return (
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
            onClick={handleOpenCreatePost}
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
      <Box sx={{ mt: 2, height: 40, gap: 1, display: "flex" }}>
        <Button
          sx={{ height: 30, borderRadius: "20px", bgcolor: "#01754f" }}
          variant="contained"
        >
          posts
        </Button>
        <Button sx={{ height: 30, borderRadius: "20px" }} variant="outlined">
          comments
        </Button>
        <Button sx={{ height: 30, borderRadius: "20px" }} variant="outlined">
          Videos
        </Button>
      </Box>

      {/* <Typography variant="body2" color="text.secondary">
        You haven't posted lately
      </Typography> */}
      <EditOutlinedIcon
        onClick={handleOpenCreatePost}
        sx={{
          position: "absolute",
          top: 20,
          right: 8,
          fontSize: 20,
          cursor: "pointer",
        }}
      />
      <CreatePostDialog
        postText={postText}
        setPostText={setPostText}
        media={media}
        setMedia={setMedia}
        openCreatePost={openCreatePost}
        onClosecreatePost={() => setOpenCreatePost(false)}
        onSavePost={handleSavePost}
      />
    </Paper>
  );
}
