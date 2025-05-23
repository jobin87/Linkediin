import type { NavSectionOnboardingProps, NavSectionProps } from 'src/components/nav-section';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer, { drawerClasses } from '@mui/material/Drawer';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';
import { NavSectionVertical } from 'src/components/nav-section';
import { Scrollbar } from 'src/components/scrollbar';
import { NavSectionVerticalOnboard } from 'src/components/nav-section/vertical/nav-section-vertical copy';

// ----------------------------------------------------------------------

type NavMobileProps = NavSectionOnboardingProps & {
  open: boolean;
  onClose: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavMobile({  open, onClose, slots, sx, ...other }: NavMobileProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          overflow: 'unset',
          bgcolor: 'var(--layout-nav-bg)',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <Box sx={{ pl: 3.5, pt: 2.5, pb: 1 }}>
          <Logo isSingle={false} />
        </Box>
      )}

      <Scrollbar fillContent>
        <NavSectionVerticalOnboard sx={{ px: 2, flex: '1 1 auto' }} {...other} />
        {/* <NavUpgrade /> */}
      </Scrollbar>

      {slots?.bottomArea}
    </Drawer>
  );
}
