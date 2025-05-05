import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { ProfileView } from 'src/sections/profile/view';


// ----------------------------------------------------------------------

const metadata = { title: `Home | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <ProfileView/>
    </>
  );
}
