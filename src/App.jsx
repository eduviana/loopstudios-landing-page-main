import { useState } from "react";
import "./App.scss";
import logo from "./assets/images/logo.svg";
import hamburguer from "./assets/images/icon-hamburger.svg";
import close from "./assets/images/icon-close.svg";
import interactive from "./assets/images/mobile/image-interactive.jpg";

import mobileDeepEarth from "./assets/images/mobile/image-deep-earth.jpg";
import mobileNightArcade from "./assets/images/mobile/image-night-arcade.jpg";
import mobileSoccerTeamVr from "./assets/images/mobile/image-soccer-team.jpg";
import mobileTheGrid from "./assets/images/mobile/image-grid.jpg";
import mobileFromUpAboveVr from "./assets/images/mobile/image-from-above.jpg";
import mobilePocketBorealis from "./assets/images/mobile/image-pocket-borealis.jpg";
import mobileTheCuriosity from "./assets/images/mobile/image-curiosity.jpg";
import mobileMakeItFisheye from "./assets/images/mobile/image-fisheye.jpg";

import desktopDeepEarth from "./assets/images/desktop/image-deep-earth.jpg";
import desktopNightArcade from "./assets/images/desktop/image-night-arcade.jpg";
import desktopSoccerTeamVr from "./assets/images/desktop/image-soccer-team.jpg";
import desktopTheGrid from "./assets/images/desktop/image-grid.jpg";
import desktopFromUpAboveVr from "./assets/images/desktop/image-from-above.jpg";
import desktopPocketBorealis from "./assets/images/desktop/image-pocket-borealis.jpg";
import desktopTheCuriosity from "./assets/images/desktop/image-curiosity.jpg";
import desktopMakeItFisheye from "./assets/images/desktop/image-fisheye.jpg";

import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";
import { useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="grid">
        <section className="hero">
          <nav className="navbar">
            <div className="logo">
              <img src={logo} alt="website logo" />
            </div>
            {screenWidth >= 1440 ? (
              <div className="links">
                <a href="#">About</a>
                <a href="#">Carrers</a>
                <a href="#">Events</a>
                <a href="#">Products</a>
                <a href="#">Support</a>
              </div>
            ) : (
              <div className="hamburger">
                <img src={hamburguer} alt="menu icon" onClick={toggleMenu} />
              </div>
            )}
            {isMenuOpen && (
              <div className="menu">
                <div className="logo">
                  <img src={logo} alt="website logo" />
                  <img src={close} alt="close" onClick={toggleMenu} />
                </div>
                <div className="mobileLinks">
                  <a href="#">About</a>
                  <a href="#">Carrers</a>
                  <a href="#">Events</a>
                  <a href="#">Products</a>
                  <a href="#">Support</a>
                </div>
              </div>
            )}
          </nav>
          <div className="title">
            <h1>Immersive experiences that deliver</h1>
          </div>
        </section>

        <section className="main">
          <div className="image">
            <img src={interactive} alt="interactive" />
          </div>
          <div className="info">
            <h2 className="title">The leader in interactive VR</h2>
            <p className="paragraph">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        <section className="creations">
          <h3 className="title">Our creations</h3>
          <article className="item item-1">
            <picture>
              <source media="(min-width: 1440px)" srcSet={desktopDeepEarth} />
              <img src={mobileDeepEarth} alt="deepEarth" />
            </picture>
            <h4>
              DEEP <br /> EARTH
            </h4>
          </article>
          <article className="item item-2">
            <picture>
              <source media="(min-width: 1440px)" srcSet={desktopNightArcade} />
              <img src={mobileNightArcade} alt="nightArcade" />
            </picture>
            <h4>NIGHT <br /> ARCADE</h4>
          </article>
          <article className="item item-3">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={desktopSoccerTeamVr}
              />
              <img src={mobileSoccerTeamVr} alt="soccerTeamVr" />
            </picture>
            <h4>SOCCER <br /> TEAM VR</h4>
          </article>
          <article className="item item-4">
            <picture>
              <source media="(min-width: 1440px)" srcSet={desktopTheGrid} />
              <img src={mobileTheGrid} alt="theGrid" />
            </picture>
            <h4>
              THE <br /> GRID
            </h4>
          </article>
          <article className="item item-5">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={desktopFromUpAboveVr}
              />
              <img src={mobileFromUpAboveVr} alt="fromUpAboveVr" />
            </picture>
            <h4>FROM UP <br /> ABOVE VR</h4>
          </article>
          <article className="item item-6">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={desktopPocketBorealis}
              />
              <img src={mobilePocketBorealis} alt="pocketBorealis" />
            </picture>
            <h4>POCKET <br /> BOREALIS</h4>
          </article>
          <article className="item item-7">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={desktopTheCuriosity}
              />
              <img src={mobileTheCuriosity} alt="theCuriosity" />
            </picture>
            <h4>THE <br /> CURIOSITY</h4>
          </article>
          <article className="item item-8">
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={desktopMakeItFisheye}
              />
              <img src={mobileMakeItFisheye} alt="makeItFisheye" />
            </picture>
            <h4>MAKE IT <br /> FISHEYE</h4>
          </article>
          <button className="button">SEE ALL</button>
        </section>

        <footer className="footer">
          <div className="top">
            <div className="logo">
              <img src={logo} alt="website logo" />
            </div>

            <div className="links">
              <a href="#">About</a>
              <a href="#">Carrers</a>
              <a href="#">Events</a>
              <a href="#">Products</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className="bottom">
            <div className="social">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={pinterest} alt="pinterest" />
              <img src={instagram} alt="instagram" />
            </div>

            <p className="copyright">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
