import "./styles.css"
import recipesIcon from "../../assets/icons/recipes.png"
import InfoCard from "../../components/InfoCard/InfoCard"
import TimerIcon from "../../assets/icons/Timer.svg"
import ForkKnifeIcon from "../../assets/icons/ForkKnife.svg"
import BadgeLogo from "../../assets/icons/Badge.svg"
import PlayLogo from "../../assets/icons/PlayCircle.svg"
import Author1Logo from "../../assets/avatars/Ellipse 2.png"

function Card () {
    return <>
        <div className="container">
            <div className="featured">
                <div className="content_featured">
                    <div className="hot_recipes">
                        <img src={recipesIcon}></img>
                        <span>Hot Recipes</span>
                    </div>
                    <span className="ad_text">Spicy delicious chicken wings</span>
                    <span className="ad_description">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
                    <div className="infocards">
                        <InfoCard text="30 Minutes" icon={TimerIcon}></InfoCard>
                        <InfoCard text="Chicken" icon={ForkKnifeIcon}></InfoCard>
                    </div>
                    <div className="author_menu">
                        <div className="author">
                            <img src={Author1Logo}></img>
                            <div className="author_info">
                                <span className="author_name">John Smith</span>
                                <span className="author_date">15 March 2022</span>
                            </div>
                        </div>
                        <div className="view">
                                <button className="view_button">View Recipes <img src={PlayLogo}></img></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mask">
            </div>
            <div className="badge">
                <img src={BadgeLogo}></img>
            </div>
        </div>
    </>
}

export default Card