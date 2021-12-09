import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Avinash Kushwaha Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
