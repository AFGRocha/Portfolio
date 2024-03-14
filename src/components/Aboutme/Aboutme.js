import './Aboutme.css';
import image from './assets/DSC_5370.png'
import vue from './assets/vue.png'
import react from './assets/react.png'
import photoshop from "./assets/photoshop.png"
import unity from "./assets/unity.png"
import godot from "./assets/godot.png"

export default function Aboutme() {
    return (
        <div className='Aboutme' id='about_me'>
            <div class="aboutme-flex-container">
                <div class="aboutme-flex-child"><img class="image" src={image}/></div>
                <div class="aboutme-flex-child">
                    <p><h2>About Me </h2></p>
                    <p>Hello there, I'm António Rocha a Frontend Developer with professional experience and aspiring game developer. 
                        I have experience working with multiple programming languages, frameworks and engines having done frontend projects with VUE, React and Angular and games 
                        in Unity and Godot while also having done games with no engine. I have also dabbled a bit with Backend and have some Graphic Design  and video editing experience.</p>
                    <p>On my free time, along with some colleagues, I organize competitive gaming events in my country, I've had the opportunity to work directly with 
                        Nintendo of Portugal to bring competitive brackets to events like Iberanime, Comic Con and Moche XL Games World.  I’m proud to say I have 
                        organized the biggest fighting game only event in Portugal in February 2024 with 130+ attendees and broadcast by RTP Arena.</p>
                </div>
            </div>
            <div class="tech">
            <div><img src={vue}/></div>
            <div><img src={react}/></div>
            <div><img src={photoshop}/></div>
            <div><img src={unity}/></div>
            <div><img src={godot}/></div>
            </div>
        </div>
    )
}