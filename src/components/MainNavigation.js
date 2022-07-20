import React from "react";
import logo from "../svg/logo.svg";
import bars from "../svg/bars.svg";
import discordLogo from "../svg/discord-logo.svg";
import "../stylesheets/MainNavigation.css";

export default function MainNavigation() {
  return (
    <>
    <nav class="main-site-nav">
      <div class="border-box-left">
        <img class="navigation-logo" src={logo} alt="10 Controls Logo" />
      </div>
      <div class="main-navigation-content">
        <div class="main-navigation-link hvr-underline-from-center">Rocket League</div>
        <div class="main-navigation-link">F1 22</div>
      </div>
      <div class="border-box-right"><img class="menu-icon" src={bars} alt="Menu Icon" /></div>
      </nav>
      <nav class="left-site-nav">
      <img class="discord-logo" src={discordLogo} alt="Discord Logo" />
      </nav>
      <nav class="right-site-nav">
      nav
      </nav>
      </>
  );
}
