import type { Breakpoint } from '@mui/material/styles';
import type { NavSectionOnboardingProps } from 'src/components/nav-section';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { varAlpha } from 'src/theme/styles';

import { NavSectionHorizontal } from 'src/components/nav-section';
import { NavSectionHorizontalOnboard } from 'src/components/nav-section/horizontal/nav-section-horizontal copy';

// ----------------------------------------------------------------------

export type NavHorizontalProps = NavSectionOnboardingProps & {
  layoutQuery: Breakpoint;
};

export function NavHorizontal({  layoutQuery, sx, ...other }: NavHorizontalProps) {
  return (
    <Box
      sx={{
        width: 1,
        position: 'relative',
        flexDirection: 'column',
        display: { xs: 'none', [layoutQuery]: 'flex' },
        borderBottom: (theme) =>
          `solid 1px ${varAlpha(theme.vars.palette.grey['600Channel'], 0.08)}`,
        ...sx,
      }}
    >
      <Divider
        sx={{
          top: 0,
          left: 0,
          width: 1,
          zIndex: 9,
          position: 'absolute',
          borderStyle: 'solid',
        }}
      />

      <Box
        sx={{
          px: 1.5,
          height: 'var(--layout-nav-horizontal-height)',
          backgroundColor: 'var(--layout-nav-horizontal-bg)',
          backdropFilter: `blur(var(--layout-header-blur))`,
          WebkitBackdropFilter: `blur(var(--layout-header-blur))`,
        }}
      >
        <NavSectionHorizontalOnboard  {...other} />
      </Box>
    </Box>
  );
}
