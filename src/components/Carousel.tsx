import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselTemp } from 'react-responsive-carousel';
import About1 from "../images/pictures/about1.jpeg"
import About2 from "../images/pictures/about2.jpeg"
import About3 from "../images/pictures/about3.jpeg"
import About4 from "../images/pictures/about4.jpeg"

const Carousel = () => {
  return (
    <CarouselTemp 
      infiniteLoop 
      useKeyboardArrows 
      autoPlay 
      transitionTime={250} 
      stopOnHover 
      showStatus={false} 
      showThumbs={false}
      
      
    >
        <div>
            <img src={About1} />
        </div>
        <div>
            <img src={About2} />
        </div>
        <div>
            <img src={About3} />
        </div>
        <div>
            <img src={About4} />
        </div>
    </CarouselTemp>
  )
}

export default Carousel