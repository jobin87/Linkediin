import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { DialogActions } from "@mui/material";


interface PostItem {
  text: string;
  mediaUrl?: string;
}

interface CreatePostDialogProps {
  postText: string;
  setPostText: (text: string) => void;
  media: File | null;
  setMedia: (file: File | null) => void;
  openCreatePost: boolean;
  onClosecreatePost: () => void;
  onSavePost: () => void;
  posts: PostItem[];
}

interface DialogsProps {
  openBox1: boolean;
  onCloseBox1: () => void;
  openBox2: boolean;
  onCloseBox2: () => void;
  openAbout: boolean;
  onCloseAbout: () => void;
}

export const EditJobPreferencesDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>Edit Job Preferences</DialogTitle>
    <DialogContent>
      <Paper sx={{ p: 2 }}>
        <Typography fontWeight="bold">* Indicates required</Typography>
        <Typography mt={2}>Job titles *</Typography>
        <Typography>Full-stack Developer</Typography>

        <Typography mt={2}>Work style</Typography>
        <Typography>Full-time, Remote</Typography>

        <Typography mt={2}>Skills</Typography>
        <Typography>React, Node, Express, MongoDB</Typography>
      </Paper>
    </DialogContent>
  </Dialog>
);



export const EditBusinessDialog = ({
  openBox2,
  onCloseBox2,
}: {
  openBox2: boolean;
  onCloseBox2: () => void;
}) => (
  <Dialog open={openBox2} onClose={onCloseBox2} maxWidth="sm" fullWidth>
    <DialogTitle>Edit Business Info</DialogTitle>
    <DialogContent>
      <Paper sx={{ p: 2 }}>
        <Typography fontWeight="bold">* Indicates required</Typography>
        <Typography mt={2}>Business Name *</Typography>
        <Typography>Jobin's Development</Typography>

        <Typography mt={2}>Service</Typography>
        <Typography>Web Development, Mobile Development</Typography>

        <Typography mt={2}>Pricing</Typography>
        <Typography>Custom</Typography>
      </Paper>
    </DialogContent>
  </Dialog>
);

export const EditAboutDialog = ({
  openAbout,
  onCloseAbout,
  aboutText,
  setAboutText,
}: {
  openAbout: boolean;
  onCloseAbout: () => void;
  aboutText: string;
  setAboutText: (text: string) => void;
}) => {
  const [localText, setLocalText] = useState("");

  useEffect(() => {
    if (openAbout) setLocalText(aboutText);
  }, [openAbout, aboutText]);

  const handleSave = () => {
    setAboutText(localText);
    onCloseAbout();
  };

  return (
    <Dialog open={openAbout} onClose={onCloseAbout} maxWidth="sm" fullWidth>
      <DialogTitle>Edit About</DialogTitle>
      <DialogContent>
        <Paper sx={{ p: 2 }}>
          <Typography fontWeight="bold">* Indicates required</Typography>
          <Typography mt={2} mb={1}>
            About *
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Write something about yourself..."
            value={localText}
            onChange={(e) => setLocalText(e.target.value)}
          />
        </Paper>
      </DialogContent>

      <DialogActions>
        <Button onClick={onCloseAbout}>Cancel</Button>
        <Button
          onClick={handleSave}
          variant="contained"
          disabled={!localText.trim()}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export function CreatePostDialog({
  postText,
  setPostText,
  media,
  setMedia,
  openCreatePost,
  onClosecreatePost,
  onSavePost,
  posts,
}: CreatePostDialogProps) {
  return (
    <Dialog open={openCreatePost} onClose={onClosecreatePost} fullWidth maxWidth="sm">
      <DialogTitle>Create a Post</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          multiline
          rows={3}
          label="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          sx={{ mt: 1 }}
        />
        <Button variant="contained" component="label" sx={{ mt: 2 }}>
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setMedia(e.target.files[0]);
              }
            }}
          />
        </Button>

        {/* Preview uploaded image */}
        {media && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Preview:</Typography>
            <img
              src={URL.createObjectURL(media)}
              alt="Preview"
              style={{ maxWidth: "100%", borderRadius: 8 }}
            />
          </Box>
        )}

      </DialogContent>
      <DialogActions>
        <Button onClick={onClosecreatePost}>Cancel</Button>
        <Button onClick={onSavePost} variant="contained">
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}