import './App.css';
import TopNavBarComponent from './components/TopNavBar/TopNav';
import FirstBodyComponent from './components/FirstBodyofHomeComponent/Body';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBarComponent />
      </header>
      <FirstBodyComponent />
    </div>
  );
}

export default App;
