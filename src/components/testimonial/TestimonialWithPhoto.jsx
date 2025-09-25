import styles from "./TestimonialWithPhoto.module.css"
import QuotationMark from "../../assets/testimonial/quotation_mark_icon.svg"

export default function TestimonialWithPhoto({name, company, position, photo, type, children}) {
    console.log(type)
    return (
        <div className={`${styles.testimonialPhotoUI} ${styles[type]}`}>
            <div className={`${styles.pfpPhotoContainer} ${type == "desktop" ? styles.pfpPhotoContainerDesktop : styles.pfpPhotoContainerMobile}`}>
                <img src={photo} alt="pfp-photo"/>
            </div>
            <div className={
                `${styles.textSection}
                ${type == "desktop" ? styles.textSectionDesktop : styles.textSectionMobile}`
            }>
                
                <img src={QuotationMark} alt={"quotation marks"}/>
                <p className={`${styles.quoteText}`}>{children}</p>
                <p className={`${styles.nameText}`}>{name}</p>
                <p className={`${styles.companyPosText}`}>
                    {company}, {position}
                </p>
            </div>
        </div>
    )
}