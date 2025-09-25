import styles from "./TestimonialTextOnly.module.css"
import BlueSlash from "../../assets/testimonial/slash_blue.svg"
import WorkcationLogo from "../../assets/testimonial/workcation_logo.svg"
import DotPattern from "../../assets/testimonial/dot_pattern.svg"

export default function TestimonialTextOnly({name, company, position, type, children}) {
    console.log(type)
    return (
        <div className={`${styles.testimonialUI} ${styles[type]}`}>
            <img src={WorkcationLogo} alt="workcation logo" className={`${styles.workcationLogo}`}/>
            <p className={`${styles.quoteText} ${type == "desktop" ? styles.quoteTextDesktop : styles.quoteTextMobile}`}>{children}</p>
            <p className={`${styles.infoLine} ${type == "desktop" ? styles.infoLineDesktop : styles.infoLineMobile}`}>
                <div className={`${styles.nameText}`}>
                    {name}
                </div>
                {type == "desktop" && <img src={BlueSlash} alt="blue slash"/> }
                <div className={`${styles.companyPosText}`}>
                    {company}, {position}
                </div>
            </p>
            <img src={DotPattern} alt="dot pattern" className={`${styles.dotPattern} ${type == "desktop" ? styles.dotPatternDesktop : styles.dotPatternMobile}`}/>
        </div>
    )
}