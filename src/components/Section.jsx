
import "./Section.css";
export default function Section({title, description, children}) {
    return (
        <div className="section-container">
            <h1>{title.toUpperCase()}</h1>
            <h2>{description}</h2>
            <div className="variations-container">
                {children}
            </div>
        </div>
    )
}