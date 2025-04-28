import { Helmet } from 'react-helmet-async';
import { CONFIG } from 'src/config-global';
import OnBoardingView from 'src/sections/onboarding/view/onboarding-status-view';

// ----------------------------------------------------------------
const metadata = { title: `Linkediin Onboarding | Status - ${CONFIG.appName}` };

export default function SellerOnboardingStatus() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <OnBoardingView/>
    </>
  );
}
