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


export const CreatePostDialog = ({
  postText,
  setPostText,
  media,
  setMedia,
  openCreatePost,
  onClosecreatePost,
  onSavePost,
}: {
  postText: string;
  setPostText: (text: string) => void;
  media: File | null;
  setMedia: (file: File | null) => void;
  openCreatePost: boolean;
  onClosecreatePost: () => void;
  onSavePost: () => void;
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setMedia(file);
  };

  return (
    <Dialog open={openCreatePost} onClose={onClosecreatePost} fullWidth maxWidth="sm">
      <DialogTitle>Create a Post</DialogTitle>
      <DialogContent>
        <Paper sx={{ p: 2 }}>
          <TextField
            multiline
            fullWidth
            rows={4}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What do you want to talk about?"
            variant="outlined"
            InputProps={{
              style: {
                fontSize: "0.95rem",
              },
            }}
          />

          {/* Upload buttons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
            <input
              accept="image/*,video/*"
              type="file"
              id="upload-media"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label htmlFor="upload-media">
              <IconButton color="primary" component="span">
                {/* You can add a media icon here */}
              </IconButton>
            </label>
            <Typography variant="body2" color="text.secondary">
              {media ? media.name : "Add image or video"}
            </Typography>
          </Box>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClosecreatePost} color="secondary">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!postText && !media}
          onClick={onSavePost}
        >
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};
