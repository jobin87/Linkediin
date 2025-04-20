import { Box, Button, Typography } from "@mui/material";
import { FaMicrosoft } from "react-icons/fa";
import { GoogleIcon } from "src/assets/icons"; // Update path as needed

export default function OnBoardingLoginSection() {
  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        {/* Left box */}
        <Box sx={{ width: "63%", zIndex: 1, mt: 10, ml: 7}}>
          <Typography variant="h2" sx={{ fontWeight: 400 }}>
            Welcome to your <br /> Professional Community
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                width: "70%",
                textTransform: "none",
                bgcolor: "#4285F4",
              }}
              startIcon={
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GoogleIcon />
                </Box>
              }
            >
              Continue with Google
            </Button>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 3,
                width: "70%",
                textTransform: "none",
                bgcolor: "white",
                color: "black",
                border: "2px solid #000",
              }}
              startIcon={
                <Box
                  sx={{
                    borderRadius: "50%",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaMicrosoft />
                </Box>
              }
            >
              Continue with Microsoft
            </Button>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 3,
                width: "70%",
                textTransform: "none",
                bgcolor: "white",
                color: "black",
                border: "2px solid #000",
              }}
            >
              Sign In With Email
            </Button>
          </Box>

          <Box sx={{ mt: 3, width: "60%" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: 12, color: "#5f5f5f", ml: 2 }}
            >
              By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
              <Box
                component="span"
                sx={{ color: "#0a66c2", cursor: "pointer", ml: 4 }}
              >
                User Agreement
              </Box>
              ,{" "}
              <Box
                component="span"
                sx={{ color: "#0a66c2", cursor: "pointer" }}
              >
                Privacy Policy
              </Box>{" "}
              and{" "}
              <Box
                component="span"
                sx={{ color: "#0a66c2", cursor: "pointer" }}
              >
                Cookie Policy
              </Box>
              .
            </Typography>

            <Typography
              variant="body2"
              sx={{ mt: 2, fontSize: 12, color: "#5f5f5f", ml: 13 }}
            >
              New to LinkedIn?{" "}
              <Box component="span" sx={{ color: "#0a66c2", cursor: "pointer" }}>
                Join now
              </Box>
            </Typography>
          </Box>
        </Box>

        {/* Right Image Box */}
        <Box
          sx={{
            position: "relative",
            width: "80%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="/images/components/linkdeinnf1.svg"
            alt="Article Icon"
            sx={{
              position: "absolute",
              right: "-120px",
              top: "55%",
              transform: "translateY(-50%)",
              height: "170vh",
              width: "100vw",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
