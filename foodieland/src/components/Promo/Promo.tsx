import "./styles.css"
import ChefImg from "../../assets/promo/portrait-happy-male-chef-dressed-uniform 1.png"

function Promo() {
    return <>
        <div className="promotion">
            <div style={{"display": "grid", "rowGap": "150px"}}>
                <div className="info">
                    <div className="promo">
                        <span className="promo_label">Everyone can be a</span>
                        <span className="promo_label">chef in their own kitchen</span>
                    </div>
                    <span className="promo_desc">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </span>
                </div>
                <button className="promo_learn">Learn More</button>
            </div>
            <div className="img">
                <img src={ChefImg} className="chief_img"></img>
            </div>
        </div>
    </>
}

export default Promo