import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";

import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

import { RouterLink } from "src/routes/components";
import { paths } from "src/routes/paths";

import { useBoolean } from "src/hooks/use-boolean";

import { useAppDispatch } from "src/store";
import { requestSignInWithPassword } from "src/store/app/appThunk";

import { AnimateLogo2 } from "src/components/animate";
import { Field, Form } from "src/components/hook-form";
import { Iconify } from "src/components/iconify";

import { useEffect } from "react";
import toast from "react-hot-toast";
import useUniqueBrowserId from "src/hooks/use-browser-id";
import { FormHead } from "../form-head";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { GoogleIcon } from "src/assets/icons";
import { FaMicrosoft } from "react-icons/fa";

// ----------------------------------------------------------------------

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Email must be a valid email address!" }),
  password: zod
    .string()
    .min(1, { message: "Password is required!" })
    .min(6, { message: "Password must be at least 6 characters!" }),
  deviceId: zod.string().min(1, { message: "Device ID is required!" }),
  remember: zod.boolean().optional(),
});

export function CenteredSignUpView() {
  const password = useBoolean();
  const dispatch = useAppDispatch();
  const uniqueBrowserId = useUniqueBrowserId();
  const navigate = useNavigate();

  const defaultValues = {
    password: "",
    email: "",
    deviceId: "",
    remember: false,
  };

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const getClientIp = async () => {
    try {
      const response = await fetch("https://api64.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error fetching IP address:", error);
      return null;
    }
  };

  useEffect(() => {
    if (uniqueBrowserId) {
      methods.setValue("deviceId", String(uniqueBrowserId));
    }
  }, [uniqueBrowserId, methods]);

  const onSubmit = handleSubmit(async (data) => {
    const ipaddress = await getClientIp();
    if (ipaddress) {
      try {
        const response = await dispatch(
          requestSignInWithPassword({
            email: data.email,
            password: data.password,
            deviceId: data.deviceId,
            clientIP: ipaddress,
          })
        );
        if (response.payload) {
          navigate(paths.onboarding.root);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Error fetching IP address! Try again later.");
    }
  });

  const renderForm = (
    <Box gap={1} display="flex" flexDirection="column">
      <Box ml="1%" mt="5%">
        <Typography>Email or Phone number</Typography>
        <Field.Text
          name="email"
          {...methods.register}
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      <Box gap={1} display="flex" flexDirection="column" ml="1%">
        <Typography>Password</Typography>
        <Field.Text
          name="password"
          {...methods.register}
          placeholder="6+ characters"
          type={password.value ? "text" : "password"}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
        />
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            {...methods.register("remember")}
            color="primary"
            size="small"
          />
        }
        label="Remember me"
        sx={{ fontSize: 14, width: "8.8rem", ml: "1%" }}
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
          mt: 2,
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="caption">
          By clicking Agree & Join or Continue, you agree to the LinkedIn
          <br />
          <Link href="#" underline="always">
            User Agreement
          </Link>
          ,&nbsp;
          <Link href="#" underline="always">
            Privacy Policy
          </Link>
          , and&nbsp;
          <Link href="#" underline="always">
            Cookie Policy
          </Link>
          .
        </Typography>
      </Box>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 2, borderRadius: 4, bgcolor:"#4285F4" }}
      >
        Agree And Join
      </LoadingButton>

      {/* Divider with "or" */}
      <Divider
        sx={{
          my: 1,
          width: "100%",
          "&::before, &::after": {
            borderColor: "text.secondary",
          },
        }}
      >
        or
      </Divider>

      {/* Google Sign In */}
      <Box sx={{    display:"flex",
            alignItems:"center",
            justifyContent:"center"}}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 3,
            width: "90%",
            textTransform: "none",
            bgcolor: "white",
            color:"black",
            border:"2px solid"
        
          
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

      {/* Microsoft Sign In */}
      <Box  sx={{    display:"flex",
            alignItems:"center",
            justifyContent:"center"}}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 3,
            width: "90%",
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
      {/* Already have an account */}
<Box mt={3} textAlign="center" mb={4}>
  <Typography variant="body2">
    Already on LinkedIn?{" "}
    <Link>
      Sign in
    </Link>
  </Typography>
</Box>

    </Box>
  );

  return (
    <Box>
      <FormHead sx={{mb:3}} title="Make the most of your professional life" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "background.default",
            maxWidth: "var(--layout-auth-content-width)",
            borderRadius: 1,
            
          }}
        > 
          <Form methods={methods} onSubmit={onSubmit}>
            {renderForm}
          </Form>
          
        </Box>
      </Box>
<Box textAlign="center" sx={{mt:3}}>
Looking to create a page for a business? Get help

  </Box>

    </Box>
  );
}
