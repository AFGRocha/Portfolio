import './MobileNavBar.css';
import aboutme from "./assets/aboutme.png"
import portfolio from "./assets/portfolio.png"
import contact from "./assets/contact.png"

export default function MobileNavbar() {
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