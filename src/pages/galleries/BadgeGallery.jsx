
import Badge from "../../components/badge/Badge"
import badgeColorSchemes from "../../colorSchemes/badgeColorSchemes";
import "../Components.css";

export default function BadgeGallery() {
    const colors = Object.keys(badgeColorSchemes)

    return (
        <div className="badges-variations">
            {colors.map((color, index) => {
                    return (
                        index < 4 && 
                        (<Badge
                            shape="square"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}
                {colors.map((color, index) => {
                    return (
                        index < 4 && 
                        (<Badge
                            shape="pilled"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}
                {colors.map((color, index) => {
                    return (
                        index >= 4 && 
                        (<Badge
                            shape="square"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}
                {colors.map((color, index) => {
                    return (
                        index >= 4 && 
                        (<Badge
                            shape="pilled"
                            colorScheme={color}
                        >
                            Badge
                        </Badge>)
                    )
                })}
        </div>
    )
}
                