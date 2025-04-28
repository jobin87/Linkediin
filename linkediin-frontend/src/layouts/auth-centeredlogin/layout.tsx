import type { Breakpoint, SxProps, Theme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
// import { stylesMode } from 'src/theme/styles';

import { Logo } from 'src/components/logo';

import { usePathname } from 'src/routes/hooks';
import { SettingsButton } from '../components/settings-button';
import { SignOutButton } from '../components/sign-out-button';
import { HeaderSection } from '../core/header-section';
import { LayoutSection } from '../core/layout-section';
import { Main } from './main';
import { stylesMode } from 'src/theme/styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";


// ----------------------------------------------------------------------

export type AuthCenteredLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function AuthCenteredLayout({ sx, children, header }: AuthCenteredLayoutProps) {
  const pathname = usePathname();

  const layoutQuery: Breakpoint = 'md';
    const theme = useTheme();
  
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));


  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          disableElevation
          layoutQuery={layoutQuery}
          slotProps={{ container: { maxWidth: false } }}
          sx={{ position: { [layoutQuery]: 'relative' }, ...header?.sx }}
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
                      height: 42,
                      width: "auto",
                      ml:5,
                    }}
                  />
                </>
                          ),
           
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={
        <Box
          component="footer"
          sx={{
            width: '100%',
            py: 2,
            px: 3,
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
            fontSize: 13,
            mt: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box>LinkedIn© {new Date().getFullYear()}</Box>
      
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
            }}
          >
            <Link component={RouterLink} href="#" color="inherit" underline="hover">
              User Agreement
            </Link>
            <Link component={RouterLink} href="#" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Link component={RouterLink} href="#" color="inherit" underline="hover">
              Community Guidelines
            </Link>
            <Link component={RouterLink} href="#" color="inherit" underline="hover">
              Cookie Policy
            </Link>
            <Link component={RouterLink} href="#" color="inherit" underline="hover">
              Copyright Policy
            </Link>
            <Link component={RouterLink} href="#" color="inherit" underline="hover">
              Send Feedback
            </Link>
            <Link component={RouterLink} href="#" color="inherit" underline="hover">
              Language
            </Link>
          </Box>
        </Box>
      }
      
      /** **************************************
       * Style
       *************************************** */
      cssVars={{ '--layout-auth-content-width': '420px' }}
      sx={{
        '&::before': {
          width: 1,
          height: 1,
          zIndex: -1,
          content: "''",
          opacity: 0.24,
          position: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          [stylesMode.dark]: { opacity: 0.08 },
          bgcolor:"#E0D9C9",
        },
        ...sx,
      }}
    >
<Main layoutQuery={layoutQuery} sx={{ mb: 2, pb: 0 }}>
  {children}
</Main>
    </LayoutSection>
  );
}
