import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';
import Aboutme from './components/Aboutme/Aboutme';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title/>
      <Navbar/>
      <Profile/>
      <Aboutme />

      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
