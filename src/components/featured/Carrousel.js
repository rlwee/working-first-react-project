import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/bbbthebeach.jpg';
import slide_two from '../../resources/images/babycute2.jpeg';
import slide_three from '../../resources/images/babycute4.jpeg';
import slide_four from '../../resources/images/bbhappy.jpg';
import slide_five from '../../resources/images/bbsnow.jpg';
import slide_six from '../../resources/images/bbsnowemo.jpg';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className = "carrousel_wrapper"
            style = {{
                overflow: 'hidden',
                height: `${window.innerHeight}px`
            }}
         >

             <Slider {...settings}>
                 <div>
                     <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`
                        }}
                      >
                        
                     </div>
                 </div>

                 <div>
                 <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`
                        }}
                      >
                        
                     </div>
                 </div>

                 <div>
                 <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`
                        }}
                      >
                        
                     </div>
                 </div>

                 <div>
                 <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_four})`,
                            height: `${window.innerHeight}px`
                        }}
                      >
                        
                     </div>
                 </div>

                 <div>
                 <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_five})`,
                            height: `${window.innerHeight}px`
                        }}
                      >
                        
                     </div>
                 </div>

                 <div>
                 <div
                        className="carrousel_image"
                        style={{
                            background: `url(${slide_six})`,
                            height: `${window.innerHeight}px`
                        }}
                      >
                        
                     </div>
                 </div>

             </Slider>
            
        </div>
    );
};

export default Carrousel;