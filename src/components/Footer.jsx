import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>M.Farouq Abdillah ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
