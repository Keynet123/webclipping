import facebookLogo from "../../assets/icons/001-facebook.svg"
import twitterLogo from "../../assets/icons/003-twitter.svg"
import instagramLogo from "../../assets/icons/004-instagram.svg"
import "./styles.css"

function Header () {
    return <>
        <header>
            <div className="header">
            <div className="logo">
                <span className="logo_text">Foodieland</span>
                <span className="logo_text" style={{color: "red"}}>.</span>
            </div>
            <div className="nav">
                <a href="#">Home</a>
                <a href="#">Recipes</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">About us</a>
            </div>
            <div className="socials">
                <img src={facebookLogo}></img>
                <img src={twitterLogo}></img>
                <img src={instagramLogo}></img>
            </div>
            </div>
        </header>
    </>
}

export default Header