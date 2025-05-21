import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";
import {
  Typography,
  useMediaQuery,
  Box,
  Avatar,
  IconButton,
  Paper,
  ClickAwayListener,
  Button,
} from "@mui/material";
import { Stack } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";

import type { NavSectionProps } from "src/components/nav-section";
import type { Theme, SxProps } from "@mui/material/styles";

import { SettingsDrawer, useSettingsContext } from "src/components/settings";
import { LayoutSection } from "../core/layout-section";
import { Main } from "./main";
import { HeaderSection } from "./core/header-section";
import { paths } from "src/routes/paths";
import { Divider } from "@mui/material";
import { SettingsButton } from "../components/settings-button";

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
  data?: {
    nav?: NavSectionProps["data"];
  };
};

export function DashboardLayout({
  sx,
  children,
  header,
  data,
}: DashboardLayoutProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const settings = useSettingsContext();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [activeIndex, setActiveIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handleItemClick = (index: number, path: string) => {
    setActiveIndex(index);
    navigate(path);
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleViewProfile = () => {
    navigate(paths.dashboard.profile.root); // replace with actual route
    setShowMenu(false);
  };

  const handleSignOut = () => {
    console.log("Sign out");
    // implement sign-out logic
    setShowMenu(false);
  };

  const handleClickAway = () => {
    setShowMenu(false);
  };

  const navItems = [
    {
      label: "Home",
      icon: "/images/components/home.svg",
      path: paths.dashboard.root,
    },
    {
      label: "My Network",
      icon: "/images/components/mynetwork.svg",
      path: paths.dashboard.network.root,
    },
    { label: "Jobs", icon: "/images/components/job.svg", path: "/jobs" },
    {
      label: "Messages",
      icon: "/images/components/message.svg",
      path: "/messages",
    },
    {
      label: "Notifications",
      icon: "/images/components/notification.svg",
      path: "/notifications",
    },
  ];

  return (
    <LayoutSection
      headerSection={
        <HeaderSection
          layoutQuery="lg"
          slotProps={{
            toolbar: {
              sx: {
                [theme.breakpoints.up("lg")]: {
                  height: "45px",
                  bgcolor:"white"
                },
              },
            },
            container: { maxWidth: false },
          }}
          sx={header?.sx}
          slots={{
            leftArea: (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, ml: 13.3 }}
              >
                <Box
                  component="img"
                  src="/images/iin.png"
                  alt="LinkedIn Logo"
                  sx={{ height: 32, width: "auto" }}
                />
                <Box sx={{ position: "relative", width: 250,  }}>
                  <Box
                    component="input"
                    type="text"
                    placeholder="Search"
                    sx={{
                      top: "-15px",
                      position: "absolute",
                      height: 32,
                      width: "100%",
                      px: 2,
                      borderRadius: 0.6,
                      border: "1px solid",
                      fontSize: 14,
                      outline: "none",
                      transition: "all 0.3s ease",
                      zIndex: 1,
                      "&:focus": {
                        width: 330, // visually expand but overflow is okay
                        boxShadow: (theme) =>
                          `0 0 0 2px ${theme.palette.primary.light}`,
                      },
                    }}
                  />
                </Box>
              </Box>
            ),
            centerArea: (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.6,
                  position: "relative",
                }}
              >
                {navItems.map((item, index) => (
                  <Box
                    key={item.label}
                    onClick={() => handleItemClick(index, item.path)}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                      position: "relative",
                      px: 1.2,
                      color: activeIndex === index ? "black" : "text.disabled",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.label}
                      sx={{
                        height: 21,
                        width: "auto",
                        filter:
                          activeIndex === index
                            ? "brightness(0) saturate(100%)"
                            : "brightness(0) saturate(0%) opacity(0.6)",
                        transition: "filter 0.3s",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: activeIndex === index ? 300 : 200,
                        fontSize: 10,
                        mt: 0.1,
                      }}
                    >
                      {item.label}
                    </Typography>
                    {activeIndex === index && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -2,
                          height: 2,
                          width: 64,
                          bgcolor: "black",
                          borderRadius: 1,
                          transition: "all 0.3s ease",
                        }}
                      />
                    )}
                  </Box>
                ))}

                {/* Me Button and Dropdown */}
                <ClickAwayListener onClickAway={handleClickAway}>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      onClick={handleToggleMenu}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color:
                          activeIndex === 5 ? "text.primary" : "text.secondary",
                        "&:hover": {
                          color: "text.primary",
                        },
                      }}
                    >
                      <Avatar sx={{ width: 24, height: 24, mb: "2px" }} src="">
                        U
                      </Avatar>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="caption">Me</Typography>
                        <ArrowDropDown fontSize="small" />
                      </Stack>
                    </Box>
                    {showMenu && (
                      <Box
                        component={Paper}
                        sx={{
                          position: "absolute",
                          right: 0,
                          minWidth: 240,
                          zIndex: 10,
                          p: 1.5,
                        }}
                      >
                        {/* Header */}
                        <Box>
                          <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                            Jobin Jose
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.5 }}
                          >
                            MERN Stack Developer || TypeScript || Java || DSA
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: 60,
                            }}
                          >
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={handleViewProfile}
                            >
                              View Profile
                            </Button>
                          </Box>
                        </Box>

                        <Divider />

                        {/* Menu Items */}
                        {[
                          { label: "Account", variant: "h6" },
                          {
                            label: "Try 1 month of Premium for ₹0",
                            variant: "body2",
                          },
                          { label: "Settings & Privacy", variant: "body2" },
                          { label: "Help", variant: "body2" },
                          { label: "Language", variant: "body2" },
                        ].map(({ label, variant }) => (
                          <Box
                            key={label}
                            sx={{
                              py: 0.5,
                              cursor: "pointer",
                              "&:hover": { color: "primary.main" },
                            }}
                          >
                            <Typography variant={variant as any}>
                              {label}
                            </Typography>
                          </Box>
                        ))}

                        <Divider sx={{ my: 1 }} />

                        {[
                          { label: "Manage", variant: "h6" },
                          { label: "Posts & Activity", variant: "body2" },
                          { label: "Job Posting Account", variant: "body2" },
                        ].map(({ label, variant }) => (
                          <Box
                            key={label}
                            sx={{
                              py: 0.5,
                              cursor: "pointer",
                              "&:hover": { color: "primary.main" },
                            }}
                          >
                            <Typography variant={variant as any}>
                              {label}
                            </Typography>
                          </Box>
                        ))}

                        <Divider sx={{ my: 1 }} />

                        <Box
                          onClick={handleSignOut}
                          sx={{
                            py: 0.5,
                            cursor: "pointer",
                            "&:hover": { color: "primary.main" },
                          }}
                        >
                          <Typography variant="body2">Sign Out</Typography>
                        </Box>
                      </Box>
                    )}

                    <Divider />
                  </Box>
                </ClickAwayListener>
              </Box>
            ),
            rightArea: (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Try Premium
                </Typography>
              </Box>
            ),
          }}
        />
      }
    >
      <Main isNavHorizontal={settings.navLayout === "horizontal"}>
        {children}
      </Main>
    </LayoutSection>
  );
}
