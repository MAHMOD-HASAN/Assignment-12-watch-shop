import React from 'react';
import { Carousel} from 'react-bootstrap';
import image1 from '../../../images/carouseWatch1.png';
import image2 from '../../../images/carouseWatch2.png';
import image3 from '../../../images/carouseWatch3.png';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel style={{backgroundColor : 'rgb(0, 0, 37)'}}>
      
        
            <Carousel.Item>
             <div className='caroucel'>

                 <div>
                     <h1>We Provide Origianl &nbsp;
                     <span className='text-danger'>&</span>&nbsp;
                     branded watch</h1>
                     <p>You can buy any type of hand watch<br/> from our online niche shop.</p>
                 </div>

                 <div>
                     <img src={image1} alt="" />
                 </div>

             </div>
             </Carousel.Item>


            <Carousel.Item>
             <div className='caroucel'>

                 <div>
                    <h1>We Provide Origianl &nbsp;
                    <span className='text-danger'>&</span>&nbsp;
                    branded watch</h1>
                     <p>You can buy any type of hand watch<br/> from our online niche shop. </p>
                 </div>

                 <div>
                     <img src={image2} alt="" />
                 </div>
             </div>
             </Carousel.Item>


            <Carousel.Item>
             <div className='caroucel'>

                 <div>
                 <h1>We Provide Origianl &nbsp;
                     <span className='text-danger'>&</span>&nbsp;
                     branded watch</h1>                     
                     <p>You can buy any type of hand watch<br/> from our online niche shop. </p>
                 </div>

                 <div>
                     <img src={image3} alt="" />
                 </div>
             </div>
             </Carousel.Item>

        </Carousel>
    );
};

export default Banner;