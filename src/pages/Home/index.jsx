import Banner from "../../components/Banner"
import imageWelcome from "../../assets/images/imageWelcome.png"
import GalleryCard from "../../components/GalleryCard"
import styles from "../Home/home.scss"



function Home(){
    return(
      <>
        <div className={`${styles.container} px-20 b1`}>
          <Banner image={imageWelcome} text={'Chez vous, partout et ailleurs'} />
          <GalleryCard />
         </div>
       </>
    )
}
  export default Home
