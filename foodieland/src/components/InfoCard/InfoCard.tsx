import "./styles.css"

function InfoCard(props) {
    return <>
        <div className="card">
            <img src={props.icon}></img>
            <span>{props.text}</span>
        </div>
    </>
}

export default InfoCard