import "./styles.css"

interface InfoCardData {
    icon: string,
    text: string
}

function InfoCard(props: InfoCardData) {
    return <>
        <div className="card">
            <img src={props.icon}></img>
            <span>{props.text}</span>
        </div>
    </>
}

export default InfoCard