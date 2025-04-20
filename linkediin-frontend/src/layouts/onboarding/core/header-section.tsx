import type { Breakpoint } from "@mui/material/styles";
import type { AppBarProps } from "@mui/material/AppBar";
import type { ToolbarProps } from "@mui/material/Toolbar";
import type { ContainerProps } from "@mui/material/Container";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";

import { useScrollOffSetTop } from "src/hooks/use-scroll-offset-top";

import { bgBlur, varAlpha } from "src/theme/styles";

import { layoutClasses } from "../../classes";
import React from "react";

// ----------------------------------------------------------------------

const StyledElevation = styled("span")(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  m: "auto",
  height: 24,
  zIndex: -1,
  opacity: 0.48,
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export type HeaderSectionProps = AppBarProps & {
  layoutQuery: Breakpoint;
  disableOffset?: boolean;
  disableElevation?: boolean;
  slots?: {
    leftArea?: React.ReactNode;
    rightArea?: React.ReactNode;
    centerArea?: React.ReactNode;
  };
  slotProps?: {
    toolbar?: ToolbarProps;
    container?: ContainerProps;
  };
};

export function HeaderSection({
  sx,
  slots,
  slotProps,
  disableOffset,
  disableElevation,
  layoutQuery = "md",
  ...other
}: HeaderSectionProps) {
  const theme = useTheme();

  const { offsetTop } = useScrollOffSetTop();

  const toolbarStyles = {
    default: {
      minHeight: "auto",
      height: "var(--layout-header-mobile-height)",
      transition: theme.transitions.create(["height", "background-color"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
      }),
      [theme.breakpoints.up("sm")]: {
        minHeight: "auto",
      },
      [theme.breakpoints.up(layoutQuery)]: {
        height: "var(--layout-header-desktop-height)",
      },
    },
    offset: {
      ...bgBlur({
        color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
      }),
    },
  };

  return (
    <AppBar
      position="relative"
      className={layoutClasses.header}
      sx={{
        zIndex: "var(--layout-header-zIndex)",
        ...sx,
      }}
      {...other}
    >
      <Toolbar
        disableGutters
        {...slotProps?.toolbar}
        sx={{
          ...toolbarStyles.default,
          ...(!disableOffset && offsetTop && toolbarStyles.offset),
          ...slotProps?.toolbar?.sx,
          gap: 1,
        }}
      >
        <Container
          {...slotProps?.container}
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Ensure space between items
            ...slotProps?.container?.sx,
            ml:5
          }}
        >
          {/* Left Area */}
          <Box
            sx={{
              flex: { xs: "none", lg: 1 },
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start", // Align to the start on all screen sizes
            }}
          >
            {slots?.leftArea}
          </Box>

          {/* Center Area */}
          <Box
            sx={{
              flex: { xs: "none", lg: 1 },
              display: "flex",
              justifyContent: "center", // Center-align for all screen sizes
              alignItems: "center",
              gap: 2,
            }}
          >
            {slots?.centerArea}
          </Box>

          {/* Right Area */}
          <Box
            sx={{
              flex: { xs: "none", lg: 1 },
              display: "flex",
              justifyContent: "flex-start", // Align right area after center
              alignItems: "center",
              gap: 2,
            }}
          >
            {slots?.rightArea}
          </Box>
        </Container>
      </Toolbar>

      {!disableElevation && offsetTop && <StyledElevation />}
    </AppBar>
  );
}
