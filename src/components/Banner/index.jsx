import styles from "../Banner/banner.scss";


function Banner(props){
  const {image, text} = props;
  
  
   return (
       <div className={`${styles.banner}`}>
           <img className={`${styles.imgBanner}`} src={image} alt=""/>
           <span className={`${styles.textBanner} text-white font-weight-600`}>{text}</span>
       </div>
   )
  }
export default Banner