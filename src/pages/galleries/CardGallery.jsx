import Card from "../../components/card/Card";
import "../Components.css"
import cardGalleryData from "../data/cardData"

import DeployIcon from "../../assets/cards/deployment_icon.png"
import InfrastructureIcon from "../../assets/cards/infrastructure_icon.png"
import SecurityIcon from "../../assets/cards/security_icon.png"
import CustomUIIcon from "../../assets/cards/custom_ui_icon.png"
import InsightsIcon from "../../assets/cards/insights_icon.png"
import SupportIcon from "../../assets/cards/support_icon.png"

const IconImgs = [
    DeployIcon, 
    InfrastructureIcon,
        SecurityIcon,
    CustomUIIcon,
    InsightsIcon,
    SupportIcon
]
export default function CardGallery() {
    return (
        <div className="card-variations">
            {cardGalleryData.map((card, index) => (
                <Card
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    icon={IconImgs[index]}
                />
            ))}
        </div>
    )
}