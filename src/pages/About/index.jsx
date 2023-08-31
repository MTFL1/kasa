import AboutList from "../../components/AboutList"
import mountainPicture from "../../assets/images/aboutBanner.png"
import Banner from "../../components/Banner"

function About() {
    return (
        <main>
          <Banner image={mountainPicture} alt={"A view over a mountain landscape"}/>
            <AboutList/>
        </main>

    )
}

export default About