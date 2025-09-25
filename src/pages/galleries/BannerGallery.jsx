
import Banner from "../../components/banner/Banner"
import bannerColorSchemes from "../../colorSchemes/bannerColorSchemes.js";
import "../Components.css";


export default function BannerGallery() {
    const colors = Object.keys(bannerColorSchemes)
    return (
        <div className="banner-variations">
            <h2>Multi-Line</h2>
            <Banner
                type="success"
                title="Congratulations"
            >
                Your changes have been saved successfully.
            </Banner>
            <Banner
                type="warning"
                title="Attention"
            >
                Your subscription is nearing its limit — take action to prevent interruptions. 
            </Banner>
            <Banner
                type="error"
                title="There is a problem with your application"
            >
                An unexpected error occurred. Please refresh the page and try again.
            </Banner>
            <Banner
                type="neutral"
                title="Update available"
            >
                A new version of the app is ready to install with the latest improvements.
            </Banner>
            <h2>Single-Line</h2>
            <Banner
                type="success"
                title="Congratulations"
            >
            </Banner>
            <Banner
                type="warning"
                title="Attention"
            >
            </Banner>
            <Banner
                type="error"
                title="There is a problem with your application"
            >
            </Banner>
            <Banner
                type="neutral"
                title="Update available"
            >
            </Banner>
        </div>
    )
}