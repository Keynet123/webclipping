import "./style.css"

interface CategoryInfo {
    icon: string,
    color: string,
    text: string
}

function Category(props: CategoryInfo) {
    return <>
        <div className="category" style={{
            minHeight: "200px",
            minWidth: "180px",
            background: `linear-gradient(to bottom, ${props.color}00 0%, ${props.color}1A 100%)`,
        }}>
            <div className="category_slice">
                <img src={props.icon}></img>
                <span className="category_name">{props.text}</span>
            </div>
        </div>
    </>
}

export default Category