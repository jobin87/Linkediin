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
import { Analytics } from "./specificboxes/analytics";
import { About } from "./specificboxes/about";
import { Post } from "./specificboxes/createpost";
import { Suggested } from "./specificboxes/suggested";
import { Intro } from "./specificboxes/intro";

export function ProfileCenter() {

  return (
    <Box sx={{ width: 730, paddingRight: 2, paddingTop: 2 }}>
     <Intro/>
    <Suggested/>
     <Analytics/>
     <About/>
     <Post/>
    </Box>
  );
}
