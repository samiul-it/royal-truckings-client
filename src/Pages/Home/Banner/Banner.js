import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import banner1 from '../../../Resources/BannerImages/banner1.png';
import banner2 from '../../../Resources/BannerImages/banner2.png';
import banner3 from '../../../Resources/BannerImages/banner3.png';
import banner4 from '../../../Resources/BannerImages/banner4.png';

const Banner = () => {
    return (
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="First slide" />
            <Carousel.Caption>
              <h3>Volvo EX-2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner4} alt="First slide" />
            <Carousel.Caption>
              <h3>Hino Special</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Hino AK</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Isuzu LT</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;