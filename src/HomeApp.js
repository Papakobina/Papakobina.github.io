import FirstBodyComponent from './components/HomePageComponents/FirstBodyofHomeComponent/FirstBodyComponent/Body'
import SecondBodyComponent from './components/HomePageComponents/FirstBodyofHomeComponent/SecondBodyofComponent/body';
import ThirdBodyComponent from './components/HomePageComponents/FirstBodyofHomeComponent/ThirdBodyComponent/body3';
import SpiceComponent from './components/HomePageComponents/FirstBodyofHomeComponent/SpiceContainerComponent/SpiceBodyComponent';


function HomeApp() {
  return (
    <div className="HomeApp">
      <FirstBodyComponent />
      <SecondBodyComponent />
      <ThirdBodyComponent />
      <SpiceComponent />
    </div>
  );
}

export default HomeApp;
