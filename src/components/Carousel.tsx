import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselTemp } from 'react-responsive-carousel';

const Carousel = () => {
  return (
    <CarouselTemp>

        <div>
            <img src="./images/pictures/avatar.jpeg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="./images/pictures/avatar.jpeg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="./images/pictures/avatar.jpeg" />
            <p className="legend">Legend 3</p>
        </div>
    </CarouselTemp>
  )
}

export default Carousel