import React from "react";
import "./footer.scss";
import LogoFooter from "../../assets/images/LogoFooter.svg";

function Index() {
    return (
      <footer>
          <img src={LogoFooter} alt="Logo" />
          <span>© 2023 Kasa. All rights reserved</span>
      </footer>
    );
  }
  
  export default Index