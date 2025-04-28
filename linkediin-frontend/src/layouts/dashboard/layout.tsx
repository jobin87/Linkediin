import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import { Typography, useMediaQuery, Box, Avatar, IconButton, Badge } from '@mui/material';
import type { NavSectionProps } from 'src/components/nav-section';
import type { Theme, SxProps } from '@mui/material/styles';

import { useSettingsContext } from 'src/components/settings';
import { LayoutSection } from '../core/layout-section';
import { Main } from './main';
import { HeaderSection } from './core/header-section';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
  data?: {
    nav?: NavSectionProps['data'];
  };
};

export function DashboardLayout({ sx, children, header, data }: DashboardLayoutProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const settings = useSettingsContext();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: 'Home', icon: '/images/components/home.svg', path: paths.dashboard.root },
    { label: 'My Network', icon: '/images/components/mynetwork.svg', path: paths.dashboard.network.root },
    { label: 'Jobs', icon: '/images/components/job.svg', path: '/jobs' },
    { label: 'Messages', icon: '/images/components/message.svg', path: '/messages' },
    { label: 'Notifications', icon: '/images/components/notification.svg', path: '/notifications' },
  ];

  const handleItemClick = (index: number, path: string) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <LayoutSection
      headerSection={
        <HeaderSection
          layoutQuery="lg"
          slotProps={{
            toolbar: {
              sx: {
                [theme.breakpoints.up('lg')]: {
                  height: '56px',
                },
              },
            },
            container: { maxWidth: false },
          }}
          sx={header?.sx}
          slots={{
            leftArea: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml:7 }}>
                <Box
                  component="img"
                  src="/images/iin.png"
                  alt="LinkedIn Logo"
                  sx={{ height: 32, width: 'auto' }}
                />
                <Box
                  component="input"
                  type="text"
                  placeholder="Search"
                  sx={{
                    height: 36,
                    width: 280,
                    px: 2,
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'grey.300',
                    fontSize: 14,
                    outline: 'none',
                    '&:focus': {
                      borderColor: 'primary.main',
                      boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.light}`,
                    },
                  }}
                />
              </Box>
            ),
            centerArea: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.6, position: 'relative' }}>
                {navItems.map((item, index) => (
                  <Box
                    key={item.label}
                    onClick={() => handleItemClick(index, item.path)}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      cursor: 'pointer',
                      position: 'relative',
                      px: 1.2,
                      color: activeIndex === index ? 'black' : 'text.disabled',
                      '&:hover': {
                        color: 'black',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      alt={item.label}
                      sx={{
                        height: 24,
                        width: 'auto',
                        filter: activeIndex === index
                          ? 'brightness(0) saturate(100%)'
                          : 'brightness(0) saturate(0%) opacity(0.6)',
                        transition: 'filter 0.3s',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: activeIndex === index ? 500 : 300,
                        mt: 0.5,
                      }}
                    >
                      {item.label}
                    </Typography>

                    {/* Bottom Line */}
                    {activeIndex === index && (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: -2,
                          height: 2,
                          width: 64,
                          bgcolor: 'black',
                          borderRadius: 1,
                          transition: 'all 0.3s ease',
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            ),
            rightArea: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Badge badgeContent={3} color="error">
                  <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
                </Badge>
                <IconButton>
                  <Box
                    component="img"
                    src="/images/components/grid_icon.svg"
                    alt="Work"
                    sx={{ height: 24, width: 24 }}
                  />
                </IconButton>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Try Premium
                </Typography>
              </Box>
            ),
          }}
        />
      }
    >
      <Main isNavHorizontal={settings.navLayout === 'horizontal'}>
        {children}
      </Main>
    </LayoutSection>
  );
}
