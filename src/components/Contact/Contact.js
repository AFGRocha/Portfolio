import './Contact.css';

export default function Contact() {
    return (
        <div className='Contact' id='contact'>
            <h2 style={{ marginLeft: '200px', marginTop: '0px' }}><b>Contact</b></h2>
            <form
                action="https://formspree.io/f/moqgleed"
                method="POST"
            >
                <label>
                    Your email:
                </label>
                <input type="email" name="email" required />
                <label>
                    Your message:
                </label>
                <textarea cols="40" rows="10" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}