import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import MobileNavbar from './components/MobileNavBar/MobileNavBar';
import Title from './components/Title/Title';
import Profile from './components/Profile/Profile';
import Aboutme from './components/Aboutme/Aboutme';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Aboutme />
      <Portfolio/>
      <Contact />
      <Footer/>
    </div>
  );
}


function Header() {
  console.log(window.innerWidth)
  if(window.innerWidth <= 1096) {
    return <div><MobileNavbar/></div>
  } else {
    return <div><Title/><Navbar/></div>
  }
}
export default App;
