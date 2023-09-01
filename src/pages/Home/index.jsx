import Banner from "../../components/Banner"
import imageWelcome from "../../assets/images/imageWelcome.png"
import GalleryCard from "../../components/GalleryCard"
import "./home.scss"



function Home(){
    return(
      <div className="containerHome">
        <Banner image={imageWelcome} text={'Chez vous, partout et ailleurs'} />
            <GalleryCard />
          </div>
    )
}
  export default Home
