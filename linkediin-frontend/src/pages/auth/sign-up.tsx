import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { CenteredSignUpView } from 'src/sections/auth/view';


// ----------------------------------------------------------------------

const metadata = { title: `Sign up | ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <CenteredSignUpView/>

    </>
  );
}
