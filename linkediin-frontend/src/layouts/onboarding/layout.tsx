import type { NavSectionProps } from "src/components/nav-section";
import type { Theme, SxProps, Breakpoint } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import { iconButtonClasses } from "@mui/material/IconButton";

import { useBoolean } from "src/hooks/use-boolean";

// import { allLangs } from 'src/locales';
// import { _contacts, _notifications } from 'src/_mock';

import { Logo } from "src/components/logo";
import { SettingsDrawer, useSettingsContext } from "src/components/settings";

import { Main } from "./main";
import { NavMobile } from "./nav-mobile";
import { layoutClasses } from "../classes";
import { NavVertical } from "./nav-vertical";
// import { NavHorizontal } from './nav-horizontal';
import { _account } from "../config-nav-account";
import { Searchbar } from "../components/searchbar";
import { _workspaces } from "../config-nav-workspace";
import { MenuButton } from "../components/menu-button";
import { LayoutSection } from "../core/layout-section";
import { StyledDivider, useNavColorVars } from "../dashboard/styles";
import { AccountDrawer } from "../components/account-drawer";
// import { LanguagePopover } from '../components/language-popover';
// import { ContactsPopover } from '../components/contacts-popover';
// import { WorkspacesPopover } from '../components/workspaces-popover';
import { navData as dashboardNavData } from "../config-nav-dashboard";
import { NavHorizontal } from "./nav-horizontal";
import { Settings } from "@mui/icons-material";
import { SettingsButton } from "../components/settings-button";
import { HeaderSection } from "./core/header-section";
import { Button, Divider, Typography, useMediaQuery } from "@mui/material";
// import { NotificationsDrawer } from '../components/notifications-drawer';

// ----------------------------------------------------------------------

export type OnboardingLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function OnboardingLayout({
  sx,
  children,
  header,
}: OnboardingLayoutProps) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const navColorVars = useNavColorVars(theme, settings);

  const layoutQuery: Breakpoint = "lg";

  const isNavMini = settings.navLayout === "mini";
  const isNavHorizontal = settings.navLayout === "horizontal";
  const isNavVertical = isNavMini || settings.navLayout === "vertical";

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery="lg"
          slotProps={{
            toolbar: {
              sx: {
                [theme.breakpoints.up("lg")]: {
                  height: "var(--layout-nav-horizontal-height)",
                },
              },
            },
            container: {
              maxWidth: false,
            },
          }}
          sx={header?.sx}
          slots={{
            leftArea: (
              <>
                {/* Conditionally render images based on screen size */}
                <Box
                  component="img"
                  src={
                    isLargeScreen ? "/images/linkeddiin.png" : "/images/iin.png"
                  }
                  alt="LinkedIn Logo"
                  sx={{
                    height: 32,
                    width: "auto",
                    mr: 2,
                  }}
                />
              </>
            ),

            centerArea: (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/article.png"
                    alt="Article Icon"
                    sx={{
                      height: 29,
                      width: "auto",
                      mr: 2,
                      ml: 2,
                    }}
                  />
                  <Typography variant="caption">Article</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/people.png"
                    alt="People Icon"
                    sx={{
                      height: 29,
                      width: "auto",
                      mr: 2,
                      ml: 2,
                    }}
                  />
                  <Typography variant="caption">People</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/learning.png"
                    alt="Learning Icon"
                    sx={{
                      height: 27,
                      width: "auto",
                      mr: 2,
                      ml: 2,
                    }}
                  />
                  <Typography variant="caption">Learning</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/job.png"
                    alt="Job Icon"
                    sx={{
                      height: 27,
                      width: "auto",
                      mr: 2,
                      mt: 1,
                      ml: 2,
                    }}
                  />
                  <Typography variant="caption">Job</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/rubik.png"
                    alt="Rubik Icon"
                    sx={{
                      height: 27,
                      width: "auto",
                      mt: 1,
                      ml: .3,
                    }}
                  />
                  <Typography variant="caption">Games</Typography>
                </Box>
              </>
            ),
            rightArea: (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {/* Divider before the Get The App section */}
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                {/* Get The App section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/images/cloud.png"
                    alt="Learning Icon"
                    sx={{
                      height: 27,
                      width: "auto",
                      mt: 1,
                    }}
                  />

                  <Typography variant="caption" sx={{ whiteSpace: "nowrap" }}>
                    Get The App
                  </Typography>
                </Box>

                {/* Divider after the Get The App section */}
                <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                {/* Join Now Section */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>Join Now</Typography>
                </Box>

                {/* Sign In Button */}
                <Button variant="contained">Sign In</Button>
              </Box>
            ),
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        ...navColorVars.layout,
        "--layout-transition-easing": "linear",
        "--layout-transition-duration": "120ms",
        "--layout-nav-mini-width": "88px",
        "--layout-nav-vertical-width": "300px",
        "--layout-nav-horizontal-height": "64px",
        "--layout-dashboard-content-pt": theme.spacing(1),
        "--layout-dashboard-content-pb": theme.spacing(8),
        "--layout-dashboard-content-px": theme.spacing(5),
      }}
      sx={{
        [`& .${layoutClasses.hasSidebar}`]: {
          [theme.breakpoints.up(layoutQuery)]: {
            transition: theme.transitions.create(["padding-left"], {
              easing: "var(--layout-transition-easing)",
              duration: "var(--layout-transition-duration)",
            }),
            pl: isNavMini
              ? "var(--layout-nav-mini-width)"
              : "var(--layout-nav-vertical-width)",
          },
        },
        ...sx,
      }}
    >
      <Main isNavHorizontal={isNavHorizontal}>{children}</Main>
    </LayoutSection>
  );
}
