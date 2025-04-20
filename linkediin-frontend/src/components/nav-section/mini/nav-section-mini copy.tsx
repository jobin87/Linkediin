import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { NavList } from './nav-list';
import { NavUl, NavLi } from '../styles';
import { navSectionClasses } from '../classes';
import { navSectionCssVars } from '../css-vars';

import type { NavGroupProps, NavSectionOnboardingProps, NavSectionProps } from '../types';

// ----------------------------------------------------------------------

export function NavSectionMinicopy({
  sx,
  cssVars: overridesVars,
}: NavSectionOnboardingProps) {
  const theme = useTheme();

  const cssVars = {
    ...navSectionCssVars.mini(theme),
    ...overridesVars,
  };

  return (
    <Stack component="nav" className={navSectionClasses.mini.root} sx={{ ...cssVars, ...sx }}>
      
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Group({ items, render, slotProps, enabledRootRedirect, cssVars }: NavGroupProps) {
  return (
    <NavLi>
      <NavUl sx={{ gap: 'var(--nav-item-gap)' }}>
        {items.map((list) => (
          <NavList
            key={list.title}
            depth={1}
            data={list}
            render={render}
            cssVars={cssVars}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </NavLi>
  );
}
