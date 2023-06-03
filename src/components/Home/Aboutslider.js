import React from 'react';
import '../../App.css';
import Carousel from 'react-bootstrap/Carousel';
import Gallery5 from '../../images/Gallery5.JPG';
import Gallery4 from '../../images/Gallery4.JPG';
import Gallery3 from '../../images/Gallery3.JPG';
import Gallery2 from '../../images/Gallery2.JPG';

function AboutSlider() {
  return (
   
  <div className='Slid'>
     <h1 className='EventHead'><strong>Events</strong></h1>
      <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery5} height={500}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery4} 
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery3}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gallery2}
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}
export default AboutSlider;
