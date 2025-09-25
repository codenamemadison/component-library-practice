import Banner from "../components/banner/Banner";
import Section from "../components/Section";
import BadgeGallery from "./galleries/BadgeGallery"
import BannerGallery from "./galleries/BannerGallery"
import CardGallery from "./galleries/CardGallery"
import TestimonialGallery from "./galleries/TestimonialGallery";

export default function Components() {
    return (
        <>
            <Section
                title="Badge"
                description="Variations of Badge component"
            >

                <BadgeGallery/>
            </Section>

            <Section
                title="Banners"
                description="Variations of Banner component (Success, Warning, Error, Neutral)"
            >

                <BannerGallery/>
            </Section>

            <Section
                title="Cards"
                description="Example use of using card UI to display a collection of info"
            >
                <CardGallery/>
            </Section>

            <Section
                title="Testimonial"
                description="Testimonial UI (desktop and mobile) – Two Versions"
            >   
                <TestimonialGallery/>
            </Section>
        </>
    )
}