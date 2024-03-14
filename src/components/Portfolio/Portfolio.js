import './Portfolio.css';
import ti from "./assets/ti.jpg"
import salazar from "./assets/Salazar's_Chair.png"
import gummi from "./assets/gummi.png"
import claustromania from "./assets/claustromania.png"
import exchess from "./assets/exchess.png"
import mari from "./assets/marikyuun.jpg"


export default function Portfolio() {
    return (
        <div className='Portfolio' id='portfolio'>
            <h1 class="portfolio-title ">Portfolio</h1>
            <div class="row">
                <a class="portfolio-image-container" href='https://github.com/AFGRocha/TeamIcarusImageGenerator'>
                    <img src={ti} />
                    <span class="text-wrapper">
                        <b>Team Icarus Image Generator</b>
                        Image generating tool for our events, Developed with Vue and Electron
                    </span>
                </a>
                <a class="portfolio-image-container" href='https://afgrocha.github.io/salazarschair/'>
                    <img src={salazar} />
                    <span class="text-wrapper">
                        <b>Salazar's Chair</b>
                        Parody Stealth Game developed in Unity
                    </span>
                </a>
                <a class="portfolio-image-container" href='https://afgrocha.github.io/Gummi-Mission/'>
                    <img src={gummi} />
                    <span class="text-wrapper">
                        <b>Gummi Mission</b>
                        Browser Space shooter based of Kingdom Hearts developed with Three.js
                    </span>
                </a>

            </div>

            <div class="row">
                <a class="portfolio-image-container" href='https://afgrocha.github.io/EX-Chess/'> 
                    <img src={exchess} />
                    <span class="text-wrapper">
                        <b>EX Chess</b>
                        Browser game developed in TypeScript with online multiplayer
                    </span>
                </a>
                <a class="portfolio-image-container" href='https://daikipt.itch.io/claustromania'>
                    <img src={claustromania} />
                    <span class="text-wrapper">
                        <b>Claustromania</b>
                        Developed for MAD Game Jam 2024 using Godot
                    </span>
                </a>
                <a class="portfolio-image-container" href='https://daikipt.itch.io/marikyuun'>
                    <img src={mari} />
                    <span class="text-wrapper">
                        <b>Marikyuun's Puzzle Quest</b>
                        Puzzle game developed in C++
                    </span>
                </a>

            </div>
        </div>
    )
}