import Category from "../Category/Category";
import "./style.css"

import BreakfastIcon from "../../assets/categories/breakfast.png"
import LunchIcon from "../../assets/categories/lunch.png"
import VeganIcon from "../../assets/categories/vegan.png"
import MeatIcon from "../../assets/categories/meat.png"
import ChocolateIcon from "../../assets/categories/chocolate.png"
import DessertIcon from "../../assets/categories/dessert.png"

function Categories () {
    return <>
        <div className="categories">
            <div className="category_menu">
                <span className="catetor">Categories</span>
                <button className="view_category">View All Categories</button>
            </div>
            <div className="category_list">
                <Category icon={BreakfastIcon} color="#708246" text="Breakfast"></Category>
                <Category icon={VeganIcon} color="#6CC63F" text="Vegan"></Category>
                <Category icon={MeatIcon} color="#CC261B" text="Meat"></Category>
                <Category icon={DessertIcon} color="#F09E00" text="Dessert"></Category>
                <Category icon={LunchIcon} color="#000000" text="Lunch"></Category>
                <Category icon={ChocolateIcon} color="#000000" text="Chocolate"></Category>
            </div>
        </div>
    </>
}

export default Categories