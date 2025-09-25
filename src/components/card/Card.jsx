
import "./Card.css"

export default function Card({key, title, description, icon}) {

    return (
        <div className="card-ui" key={key}>
            <div className="card-icon-area">
                <img src={icon} color="white"/>
            </div>
            <div className="card-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}