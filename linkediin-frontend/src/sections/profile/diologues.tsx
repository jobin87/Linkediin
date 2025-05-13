import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Paper,
  Typography,
  TextField,
  Button,
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
}: {
  openAbout: boolean;
  onCloseAbout: () => void;
}) => (
  <>
    {/* About Dialog */}
    <Dialog open={openAbout} onClose={onCloseAbout} maxWidth="sm" fullWidth>
      <DialogTitle>Edit About</DialogTitle>
      <DialogContent>
        <Paper sx={{ p: 2 }}>
          <Typography fontWeight="bold">* Indicates required</Typography>
          <Typography mt={2}>About *</Typography>
          <Typography>
            I am a passionate developer specializing in full-stack web
            development. I love building performant and user-focused
            applications using React, Node, and MongoDB.
          </Typography>
        </Paper>
      </DialogContent>
    </Dialog>
  </>
);

export const CreatePostDialog = ({
  openCreatePost,
  onClosecreatePost,
}: {
  openCreatePost: boolean;
  onClosecreatePost: () => void;
}) => (
  <Dialog
    open={openCreatePost}
    onClose={onClosecreatePost}
    fullWidth
    maxWidth="sm"
  >
    <DialogTitle>Create a Post</DialogTitle>
    <DialogContent>
      <Paper sx={{ p: 2 }}>
        <Typography mb={1}>What's on your mind?</Typography>
        <TextField
          multiline
          fullWidth
          rows={4}
          placeholder="Start writing your post..."
          variant="outlined"
        />
      </Paper>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClosecreatePost} color="secondary">
        Cancel
      </Button>
      <Button variant="contained" color="primary">
        Post
      </Button>
    </DialogActions>
  </Dialog>
);
