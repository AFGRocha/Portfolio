import './MobileNavBar.css';
import aboutme from "./assets/aboutme.png"
import portfolio from "./assets/portfolio.png"
import contact from "./assets/contact.png"
import bars from "./assets/bars.png"
import { useRef } from 'react';

export default function MobileNavbar() {
    const burgerMenu = useRef(null);
    const open = () => {
        console.log(burgerMenu)
        if (burgerMenu.current.style.display === "block") {
            burgerMenu.current.style.display = "none";
        } else {
            burgerMenu.current.style.display = "block";
        }
    }

    if (window.innerWidth <= 980) {
        return (
            <div className="MobileNavbar">
                <ul>
                    <li><a href="#"><h1>ANTÓNIO ROCHA</h1></a></li>
                    <li class="links"><a><img class="bars" src={bars} onClick={open} /></a></li>
                </ul>
                <div className='burger-menu' ref={burgerMenu}>
                    <a href="#about_me"><img src={aboutme} /></a>
                    <a href="#portfolio"><img src={portfolio} /></a>
                    <a href="#contact"><img src={contact} /></a>
                </div>
            </div>)
    } else {
        return (
            <div className="MovileNavbar">
                <ul>
                    <li><a href="#"><h1>ANTÓNIO ROCHA</h1></a></li>

                    <li class="links"><a href="#contact"><img src={contact} /></a></li>
                    <li class="links"><a href="#portfolio"><img src={portfolio} /></a></li>
                    <li class="links" ><a href="#about_me"><img src={aboutme} /></a></li>
                </ul>
            </div>
        )
    }
}