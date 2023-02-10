import './App.css';
import TopNavBarComponent from './components/TopNavBar/TopNav';
import FirstBodyComponent from './components/FirstBodyofHomeComponent/Body';
import SecondBodyComponent from './components/SecondBodyofComponent/body';
import ThirdBodyComponent from './components/ThirdBodyComponent/body3';
import SpiceComponent from './components/SpiceContainerComponent/SpiceBodyComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBarComponent />
      </header>
      <FirstBodyComponent />
      <SecondBodyComponent />
      <ThirdBodyComponent />
      <SpiceComponent />

    </div>
  );
}

export default App;
