import TestimonialTextOnly from "../../components/testimonial/TestimonialTextOnly";
import TestimonialWithPhoto from "../../components/testimonial/TestimonialWithPhoto";
import "../Components.css"

import PersonPhoto from "../../assets/example_person_pfp.jpg"


export default function TestimonialGallery() {
    return (
        <>
        
        <div className="testimonial-variations">
            <h2> Version A – Testimonial With Photo </h2>
            <TestimonialWithPhoto
                name="May Andersons"
                company="Workcation"
                position="CTO"
                photo={PersonPhoto}
                type="desktop"
            >
                "This platform completely streamlined our workflow. We save hours every week and our team actually enjoys using it. Definitely recommend!"
            </TestimonialWithPhoto>
            <TestimonialWithPhoto
                name="May Andersons"
                company="Workcation"
                position="CTO"
                photo={PersonPhoto}
                type="mobile"
            >
                "This platform completely streamlined our workflow. We save hours every week and our team actually enjoys using it. Definitely recommend!"
            </TestimonialWithPhoto>

            <h2> Version B – Testimonial Without A Photo</h2>
            <TestimonialTextOnly
                name="May Andersons"
                company="Workcation"
                position="CTO"
                type="desktop"
            >
                "This platform completely streamlined our workflow. We save hours every week and our team actually enjoys using it. Definitely recommend!"
            </TestimonialTextOnly>
            <TestimonialTextOnly
                name="May Andersons"
                company="Workcation"
                position="CTO"
                type="mobile"
            >
                "This platform completely streamlined our workflow. We save hours every week and our team actually enjoys using it. Definitely recommend!"
            </TestimonialTextOnly>
        </div>
        </>
    )
}