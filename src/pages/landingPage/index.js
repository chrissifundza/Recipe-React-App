import About from "../../components/LandingPage/About";
import Banner from "../../components/LandingPage/Banner";
import Testimonial from "../../components/LandingPage/Testimonial";
import Work from "../../components/LandingPage/Work";
import Contact from "../../components/LandingPage/Contact";
import Footer from "../../components/LandingPage/Footer";
import './index.css';
export default function LandingPage(){
    return(
        <>
        <Banner/>
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
        </>
    )
}