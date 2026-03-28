import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import BrandStory from "./components/BrandStory/BrandStory";
import BambooBenefits from "./components/BambooBenefits/BambooBenefits";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import Signup from "./components/Signup/Signup";
import Footer from "./components/Footer/Footer";
import BrandStory from "./components/BrandStory/BrandStory";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Founders from "./components/Founders/Founders";

function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (
        <div>

            <Navbar />
            <Hero />
            <About/>
            <Timeline/>
            <BambooBenefits />
            <BrandStory />
            <Lifestyle />
            <Signup />
            <Founders/>
            <Footer />

        </div>
    );
}

export default App;