import './Navbar.css';
import aboutme from "./assets/aboutme.png"
import portfolio from "./assets/portfolio.png"
import contact from "./assets/contact.png"

export default function Navbar() {
    return (
        <div className="Navbar">
            <div class="container">
            <a class="link-wrapper" href="#about_me">
                <span class="fallback">Index</span>
                <div class="img-wrapper">
                    <img class="normal" src={aboutme} />
                    <img class="active" src={aboutme} />
                </div>
                <div class="shape-wrapper">
                    <div class="shape red-fill jelly"><svg x="0px" y="0px"
                        viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon fill="#FF5E00" points="29.5,8.5 150.7,0 108.1,32.7 3.1,47 " />
                    </svg></div>
                    <div class="shape cyan-fill jelly"><svg x="0px" y="0px"
                        viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon fill="#00FFFF" points="0.3,17 125.1,0 68.8,45.6 24.3,39 " />
                    </svg></div>
                </div>
            </a>
            <a class="link-wrapper" href="#portfolio">
                <span class="fallback">Index</span>
                <div class="img-wrapper">
                    <img class="normal" src={portfolio} />
                    <img class="active" src={portfolio} />
                </div>
                <div class="shape-wrapper">
                    <div class="shape red-fill jelly"><svg x="0px" y="0px"
                        viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon fill="#FF5E00" points="0,7.1 127.3,0 32.3,64 4.8,58.2" />
                    </svg></div>
                    <div class="shape cyan-fill jelly"><svg x="0px" y="0px"
                        viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon fill="#00FFFF" points="14,0.5 127.4,0 77.4,164 2.3,61.1 " />
                    </svg></div>
                </div>
            </a>
            <a class="link-wrapper" href="#contact">
                <span class="fallback">Index</span>
                <div class="img-wrapper">
                    <img class="normal" src={contact} />
                    <img class="active" src={contact} />
                </div>
                <div class="shape-wrapper">
                    <div class="shape red-fill jelly"><svg x="0px" y="0px"
                        viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon fill="#FF5E00" points="15.5,0 70.7,0 118.1,32.7 43.1,47 " />
                    </svg></div>
                    <div class="shape cyan-fill jelly"><svg x="0px" y="0px"
                        viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon fill="#00FFFF" points="17.3,0 105.1,0 68.8,45.6 24.3,39 " />
                    </svg></div>
                </div>
            </a>
            </div>
        </div>
    )
}
