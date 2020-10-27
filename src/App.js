import React from 'react';
import './App.css';
import {NavBar} from "./components/navbar/navbar"
import Carousal from "./components/carousal/carousal";
import TitleMessage from './components/title/title';
import { AboutMe } from './pages/aboutMe/aboutMe';
import { Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade'
import { Skills } from './pages/skills/skills';
import { Experience } from './pages/experience/experience';
import { TimeLine } from './components/timeline/timeline';
import { Contact } from './pages/contact-form/contact';
import { Footer } from './components/footer/footer';


const App = () => {
  return (
    <div className="App" style={{position: "relative"}}>
      <NavBar> 
      </NavBar>
      <Carousal/>
      <TitleMessage/>
      <div>
        <Parallax  
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt=""
          strength={-200}
          > 
            <div>
              <Container className="container-box rounded">
                <Fade left big duration={1000}>
                  <AboutMe/>
                </Fade>
              </Container>
            </div>
        </Parallax>
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade left big duration={1000}>
              <Skills/>
            </Fade>
          </Container>
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade left big duration={1000}>
              <Experience/>
            </Fade>
          </Container>
      </div>
      <div>
          <Container className="container-box rounded">
            <Fade left big duration={1000}>
              <TimeLine/>
            </Fade>
          </Container>
      </div>
      <hr color="primary"/>
      <div>
          <Container className="container-box rounded">
            <Fade left big duration={1000}>
              <Contact/>
            </Fade>
          </Container>
      </div>
      <hr/>
      <Footer/>
   </div>
  );
}

export default App;
