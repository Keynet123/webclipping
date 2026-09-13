import "./styles.css"
import Recipe from "../Recipe/Recipe"

import BurgerImg from "../../assets/recipes/Burger.png"
import FishImg from "../../assets/recipes/Fish.png"
import PancakesImg from "../../assets/recipes/Pancakes.png"
import SaladImg from "../../assets/recipes/Salad.png"
import MeatballsImg from "../../assets/recipes/Meatballs.png"
import Pancakes2Img from "../../assets/recipes/Pancakes2.png"
import RoflaniImg from "../../assets/recipes/roflani.png"
import PastaImg from "../../assets/recipes/Pasta.png"

import AdImg from "../../assets/recipes/Ads.png"

function Recipes () {
    return <>
        <div className="recipes">
            <span className="recipes_main">Simple and tasty recipes</span>
            <span className="recipes_desc">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>

            <div className="recipes_list">
                <Recipe name="Big and Juicy Wagyu Beef Cheeseburger" logo={BurgerImg} time="30 Minutes" category="Snack" />
                <Recipe name="Fresh Lime Roasted Salmon with Ginger Sauce" logo={FishImg} time="30 Minutes" category="Fish"/>
                <Recipe name="Strawberry Oatmeal Pancake with Honey Syrup" logo={PancakesImg} time="30 Minutes" category="Breakfast" />
                <Recipe name="Fresh and Healthy Mixed Mayonnaise Salad" logo={SaladImg} time="30 Minutes" category="Healthy" />
                <Recipe name="Chicken Meatballs with Cream Cheese" logo={MeatballsImg} time="30 Minutes" category="Meat" />
                <img src={AdImg} alt="ad"></img>
                <Recipe name="Fruity Pancake with Orange & Blueberry" logo={Pancakes2Img} time="30 Minutes" category="Sweet" />
                <Recipe name="The Best Easy One Pot Chicken and Rice" logo={RoflaniImg} time="30 Minutes" category="Snack" />
                <Recipe name="The Creamiest Creamy Chicken and Bacon Pasta" logo={PastaImg} time="30 Minutes" category="Noodles" />
            </div>
        </div>
    </>
}

export default Recipes