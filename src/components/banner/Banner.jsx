import "./Banner.css"
import bannerColorSchemes from "../../colorSchemes/bannerColorSchemes"

import SuccessIcon from "../../assets/banners/success_icon.svg"
import WarningIcon from "../../assets/banners/warning_icon.svg"
import ErrorIcon from "../../assets/banners/error_icon.svg";
import NeutralIcon from "../../assets/banners/neutral_icon.svg"

const bannerIcons = {
    "success": SuccessIcon,
    "warning": WarningIcon,
    "error": ErrorIcon,
    "neutral": NeutralIcon
}

export default function Banner({type, title, children}){

    const IconSrc = bannerIcons[type]

    if (!IconSrc) {
        console.warn(`No icon found for banner type: ${type}`);
    }
    
    return (
        <div
            className="banner-ui"
            style={{
                backgroundColor: bannerColorSchemes[type].bgColor,
            }}
        >
            <img 
                src={IconSrc} 
                alt={`${type}icon`}
            />
            <div className="banner-text-container">
                <h1 style={{ color: bannerColorSchemes[type].titleColor}}>
                    {title}
                </h1>
                <p style={{ color: bannerColorSchemes[type].descColor}}>
                    {children}
                </p>
            </div>
        </div>
    )
}