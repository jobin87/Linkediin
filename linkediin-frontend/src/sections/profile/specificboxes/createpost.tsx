import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Link,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { CreatePostDialog } from "../diologues";
import { PostCard } from "./components/postcard";

interface PostItem {
  text: string;
  mediaUrl?: string;
}

export function Post() {
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [postText, setPostText] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([]);

  const handleOpenCreatePost = () => setOpenCreatePost(true);
  const handleCloseCreatePost = () => setOpenCreatePost(false);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // ✅ Save post manually when it's created
  const handleSavePost = async () => {
    let mediaBase64: string | undefined;

    if (media) {
      mediaBase64 = await toBase64(media);
    }

    const newPost: PostItem = {
      text: postText,
      mediaUrl: mediaBase64,
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // ✅ persist after each save

    setOpenCreatePost(false);
    setPostText("");
    setMedia(null);
  };

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{ p: 2, borderRadius: 2, position: "relative" }}
    >
      <Typography
        variant="subtitle1"
        fontWeight={600}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Activity</Typography>
          <Button
            variant="outlined"
            sx={{
              lineHeight: 1,
              color: "#0a66c2",
              border: "1px solid #0a66c2",
              borderRadius: "20px",
              height: "30px",
              width: "130px",
              mr: 5,
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

      <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
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

      <Box sx={{ mt: 2 }}>
        {posts.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            You haven't posted lately
          </Typography>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              author="You"
              timeAgo="Just now"
              content={post.text}
              mediaUrl={post.mediaUrl}
              likes={5 + index}
              comments={2 + index}
              reposts={1 + index}
            />
          ))
        )}
      </Box>

      <CreatePostDialog
        postText={postText}
        setPostText={setPostText}
        media={media}
        setMedia={setMedia}
        openCreatePost={openCreatePost}
        onClosecreatePost={handleCloseCreatePost}
        onSavePost={handleSavePost}
        posts={posts}
      />
    </Paper>
  );
}

// Converts File to base64 string
function toBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
