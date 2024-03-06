import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Title/>
      <Navbar/>
      <Profile/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website under construction
        </p>
      </header>
    </div>
  );
}

export default App;
