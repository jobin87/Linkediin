import { Box } from '@mui/material';
import { FormHead } from '../form-head';
import { SignUpTerms } from '../sign-up-terms';
import { SignInWelcomeBox } from '../sign-up-form';

// ----------------------------------------------------------------------

export function SignUpView() {
  return (
    <>
      
      <Box
        gap={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        minWidth={{ md: 600 }}
        maxWidth={600}
      >
        <SignInWelcomeBox /> {/* <--- insert the new welcome box */}
      </Box>

    </>
  );
}
