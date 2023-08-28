import styles from "../Banner/banner.scss"


function Banner(props){
  const {image, text} = props;
  
  
   return (
       <div className={`${styles.banner} b3`}>
           <img className={`${styles.imgBanner} b4`} src={image} alt=""/>
           <span className={`${styles.textBanner}  b2 font-weight-600`}>{text}</span>
       </div>
   )
  }
export default Banner