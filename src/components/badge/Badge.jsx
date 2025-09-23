import "./Badge.css"
import { colorSchemes } from "./badgeColorSchemes"
export default function Badge({shape, colorScheme, children}) {
    
    return (
        <div 
            className="badge-container"
            style={{ 
                borderRadius: shape == "square" ? "0px" : "16px",
                backgroundColor: colorSchemes[colorScheme].bgColor,
                color: colorSchemes[colorScheme].textColor

            }}
        >
            {children}
        </div>
    )
}