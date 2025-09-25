import "./Badge.css"
import badgeColorSchemes from "../../colorSchemes/badgeColorSchemes"
export default function Badge({shape, colorScheme, children}) {
    
    return (
        <div 
            className="badge-ui"
            style={{ 
                borderRadius: shape == "square" ? "0px" : "16px",
                backgroundColor: badgeColorSchemes[colorScheme].bgColor,
                color: badgeColorSchemes[colorScheme].textColor

            }}
        >
            {children}
        </div>
    )
}