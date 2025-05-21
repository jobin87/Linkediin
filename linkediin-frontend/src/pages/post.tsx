import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { PostView } from 'src/sections/profile/view/postview';


// ----------------------------------------------------------------------

const metadata = { title: `post | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PostView/>
    </>
  );
}
