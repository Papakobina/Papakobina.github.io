import './App.css';
import TopNavBarComponent from './components/TopNavBar/TopNav';
import FirstBodyComponent from './components/FirstBodyofHomeComponent/Body';
import SecondBodyComponent from './components/SecondBodyofComponent/body';
import FlippableCard from './components/ThirdBodyComponent/body3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBarComponent />
      </header>
      <FirstBodyComponent />
      <SecondBodyComponent />

    </div>
  );
}

export default App;
