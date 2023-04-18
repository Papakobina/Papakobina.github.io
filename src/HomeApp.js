import FirstBodyComponent from './components/HomePageComponents/FirstBodyofHomeComponent/FirstBodyComponent/Body'
import SecondBodyComponent from './components/HomePageComponents/FirstBodyofHomeComponent/SecondBodyofComponent/body';
import ThirdBodyComponent from './components/HomePageComponents/FirstBodyofHomeComponent/ThirdBodyComponent/body3';
import SpiceComponent from './components/HomePageComponents/FirstBodyofHomeComponent/SpiceContainerComponent/SpiceBodyComponent';
import CountUpNumbers from "./components/HomePageComponents/FirstBodyofHomeComponent/StatsComponent/StatsComponent.js";
import PartnerSectionComponent from "./components/HomePageComponents/FirstBodyofHomeComponent/PaternersSectionComponent/PartnerComponent.js";


function HomeApp() {
  return (
    <div className="HomeApp">
      <FirstBodyComponent />
      <SecondBodyComponent />
      <CountUpNumbers />
      {/* <PartnerSectionComponent /> */}
      <ThirdBodyComponent />
      <SpiceComponent />
    </div>
  );
}

export default HomeApp;
