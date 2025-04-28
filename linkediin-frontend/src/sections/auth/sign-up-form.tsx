import {
  Box,
  Card,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { RouterLink } from "src/routes/components";
import { useNavigate } from "react-router";
import { paths } from "src/routes/paths";

export function SignInWelcomeBox() {

  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate(paths.auth.signUp); // 👈 your signup route
  };

  return (
    <Stack spacing={3} alignItems="center" textAlign="center">
      <Box
        component="img"
        src="/images/linkeddiin.png" // Change this path according to your logo
        sx={{ width: "20%", height: 38, mt: 6 }}
      />

      <Stack spacing={1}>
        <Typography variant="h4" fontWeight={600}>
          Welcome Back
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Don’t miss your next opportunity. Sign in to stay updated on your
          professional world.
        </Typography>
      </Stack>

      <Box border="1px solid" sx={{ width: 360, p: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: "grey.200" }} />
            <Box textAlign="left">
              <Typography variant="subtitle1" fontWeight={600}>
                Jobin Jose
              </Typography>
              <Typography variant="body2" color="text.secondary">
                j*****@gmail.com
              </Typography>
            </Box>
          </Stack>

          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: "grey.200" }} />
          <Typography variant="body2" fontWeight={600}>
            Sign in using another account
          </Typography>
        </Stack>
      </Box>

      <Typography variant="body2">
        New to LinkedIn?{" "}
        <Link
          underline="hover"
          fontWeight={600}
          component="button"
          onClick={handleJoinNow}
        >
          Join now
        </Link>
      </Typography>
    </Stack>
  );
}
