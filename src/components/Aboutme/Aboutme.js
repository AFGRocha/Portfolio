import './Aboutme.css';
import image from './assets/DSC_5370.png'

export default function Aboutme() {
    return (
        <div className='Aboutme'>
            <div class="aboutme-flex-container">
                <div class="aboutme-flex-child"><img class="image" src={image}/></div>
                <div class="aboutme-flex-child">
                    <p><h2>About Me </h2></p>
                    <p>Teste sobre eu a dizer cenas</p>
                </div>
            </div>
            <div class="tech">
            <div>imagem1</div>
            <div>iamgem2</div>
            </div>
        </div>
    )
}