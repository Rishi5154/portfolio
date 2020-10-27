import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide1 from '../../assets/img/carousal/background1.jpg'
import Slide2 from '../../assets/img/carousal/background2.jpg'
import Slide3 from '../../assets/img/carousal/background3.jpg'
import ScrollDown from '../scoll/scroll'
import "./carousal.css"



const Carousal = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide1} alt="First slide"/>
                    <Carousel.Caption>
                    <p>Passionate & Dedicated.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide2} alt="Second slide"/>
                 </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default Carousal


