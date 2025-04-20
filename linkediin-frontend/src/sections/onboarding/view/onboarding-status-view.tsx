
import { OnboardingLayout } from "src/layouts/onboarding/layout";
import OnBoardingLoginSection from "../login";
import { ExplorePage } from "../explore";
import { RightJobOrIntershipPage } from "../rightjoborinternship";
import { PostJobPage } from "../postjob";
import { DiscoverPage } from "../discover";



export default function OnBoardingView() {



  return (
   <OnboardingLayout>

    <OnBoardingLoginSection/>
    <ExplorePage/>
    <RightJobOrIntershipPage/>
    <PostJobPage/>
    <DiscoverPage/>
    
  
   </OnboardingLayout>
  );
}
