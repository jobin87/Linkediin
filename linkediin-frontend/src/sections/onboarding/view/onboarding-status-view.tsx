import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  CircularProgress,
  Fade,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  appointmentImage from "src/assets/appointment.jpg";
import  doctormanageImage from "src/assets/doctor-manage.png";
import  reportsmanageImage from "src/assets/reports.png";
import { OnboardingLayout } from "src/layouts/onboarding/layout";



export default function OnBoardingView() {



  return (
   <OnboardingLayout>
    <Box bgcolor={"red"}>
    <Typography variant="h2" color={"black"}>
      hello
    </Typography>
    </Box>
   </OnboardingLayout>
  );
}
