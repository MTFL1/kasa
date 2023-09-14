import React from "react";
import "./footer.scss";
import LogoFooter from "../../assets/images/LogoFooter.svg";

// Composant Footer pour afficher le pied de page
function Footer() {
  return (
    <footer className="footer">
      <img src={LogoFooter} alt="Logo" />
      <span>© 2023 Kasa. Tous droits réservés</span>
    </footer>
  );
}

export default Footer;
