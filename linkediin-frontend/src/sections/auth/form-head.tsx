import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type FormHeadProps = BoxProps & {
  title: React.ReactNode;
};

export function FormHead({ sx, title, ...other }: FormHeadProps) {
  return (
    <>
      

      <Box
        display="flex"
        flexDirection="column"
        sx={{ textAlign: 'center', whiteSpace: 'pre-line', ...sx }}
        {...other}
      >
        <Typography variant="h3" fontWeight={500}>{title}</Typography>

      </Box>
    </>
  );
}
