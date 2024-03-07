import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';
import Aboutme from './components/Aboutme/Aboutme';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Title/>
      <Navbar/>
      <Profile/>
      <Aboutme />
      
      <Contact />
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
