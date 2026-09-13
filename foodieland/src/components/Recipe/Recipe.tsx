import "./styles.css"
import InfoCard from "../InfoCard/InfoCard"

import TimerIcon from "../../assets/icons/Timer.svg"
import ForkKnifeIcon from "../../assets/icons/ForkKnife.svg"

interface RecipeInfo {
    name: string,
    logo: string,
    time: string,
    category: string
}

function Recipe(props: RecipeInfo) {
    return <>
        <div className="recipe_card">
            <img src={props.logo} className="recipe_logo"></img>
            <span className="recipe_name">{props.name}</span>
            <div className="recipe_info">
                <InfoCard icon={TimerIcon} text={props.time}/>
                <InfoCard icon={ForkKnifeIcon} text={props.category}/>
            </div>
        </div>
    </>
}

export default Recipe