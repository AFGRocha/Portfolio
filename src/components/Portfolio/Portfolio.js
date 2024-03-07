import './Portfolio.css';
import claustromania from "./assets/claustromania.png"
import salazar from "./assets/Salazar's_Chair.png"

export default function Portfolio() {
    return (
        <div className='Portfolio'>
            <h1 class="portfolio-title ">Portfolio</h1>
            <div class="row">
                <a class="portfolio-image-container">
                    <img src={claustromania} />
                    <span class="text-wrapper">
                        coisas
                    </span>
                </a>
                <a class="portfolio-image-container">
                    <img src={claustromania} />
                    <span class="text-wrapper">
                        coisas
                    </span>
                </a>
                <a class="portfolio-image-container">
                    <img src={claustromania} />
                    <span class="text-wrapper">
                        coisas
                    </span>
                </a>

            </div>

            <div class="row">
                <a class="portfolio-image-container">
                    <img src={salazar} />
                    <span class="text-wrapper">
                        coisas
                    </span>
                </a>
                <a class="portfolio-image-container">
                    <img src={salazar} />
                    <span class="text-wrapper">
                        coisas
                    </span>
                </a>
                <a class="portfolio-image-container">
                    <img src={salazar} />
                    <span class="text-wrapper">
                        coisas
                    </span>
                </a>

            </div>
        </div>
    )
}