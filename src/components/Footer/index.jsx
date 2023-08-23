import React from "react";
import styles from "./footer.scss";
import LogoFooter from "../../assets/images/LogoFooter.svg";

function Index() {
    return (
      <footer>
        <div className={`${styles.footerContainer}`}>
          <img src={LogoFooter} alt="Logo" />
          <span>&copy; Kasa. Tous droits réservés</span>
        </div>
      </footer>
    );
  }
  
  export default Index