import './Profile.css';
import me from "./assets/me.jpg"
export default function Profile() {
    return (
        <div className='Profile'>
            <div class="flex-container">
                <div class="flex-child"><b>Frontend Developer </b><p>and aspiring <b>Game Developer</b></p></div>
                <div class="flex-child"><img class="profile-img" src={me}/></div>
            </div>
        </div>
    )
}