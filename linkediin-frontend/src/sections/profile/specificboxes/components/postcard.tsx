import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router";
import { paths } from "src/routes/paths";

interface PostCardProps {
  author: string;
  timeAgo: string;
  content: string;
  mediaUrl?: string;
  likes?: number;
  comments?: number;
  reposts?: number;
  type?: "post" | "repost";
}

export const PostCard: React.FC<PostCardProps> = ({
  author,
  timeAgo,
  content,
  mediaUrl,
  likes = 0,
  comments = 0,
  reposts = 0,
  type = "post",
}) => {
  const [expanded, setExpanded] = useState(false);
   const navigate= useNavigate()  ;
   const handlenavigateread = ()=>{
    navigate(paths.dashboard.post.root)
   }
  return (
    <Paper variant="outlined" sx={{ p: 2, mt: 2, borderRadius: 2 }}>
      <Typography variant="body2" color="text.secondary">
        <strong>{author}</strong> {type === "repost" ? "reposted this" : "posted this"} · {timeAgo}
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
        {mediaUrl && (
          <Box
            component="img"
            src={mediaUrl}
            alt="preview"
            sx={{
              width: 60,
              height: 60,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        )}

        <Box>
          <Typography
            variant="body2"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: expanded ? "none" : 2,
              whiteSpace: expanded ? "pre-line" : "normal",
            }}
          >
            {content}
          </Typography>
          {content.length > 100 && (
            <Link
              component="button"
              variant="caption"
              underline="hover"
              onClick={handlenavigateread}
            >
              {expanded ? "Show less" : "Read more"}
              
            </Link>
          )}
        </Box>
      </Stack>

      <Divider sx={{ my: 1 }} />

      <Box display="flex" gap={2} alignItems="center" fontSize={14}>
        {likes > 0 && (
          <Typography variant="caption" color="text.secondary">
            👍 {likes}
          </Typography>
        )}
        {comments > 0 && (
          <Typography variant="caption" color="text.secondary">
            {comments} comment{comments > 1 ? "s" : ""}
          </Typography>
        )}
        {reposts > 0 && (
          <Typography variant="caption" color="text.secondary">
            {reposts} repost{reposts > 1 ? "s" : ""}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};
