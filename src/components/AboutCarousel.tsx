import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselTemp } from "react-responsive-carousel";
import { Image } from "@chakra-ui/react";

const AboutCarousel = ({}) => {
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
        <Image
          borderRadius="2xl"
          src={"images/pictures/about_0.jpeg"}
          alt="Me In Winter"
        />
      </div>
      <div>
        <Image
          borderRadius="2xl"
          src={"images/pictures/about_1.jpeg"}
          alt="Me and Jonah"
        />
      </div>
      <div>
        <Image
          borderRadius="2xl"
          src={"images/pictures/about_2.jpeg"}
          alt="Me and Bro in AZ"
        />
      </div>
      <div>
        <Image
          borderRadius="2xl"
          src={"images/pictures/about_3.jpeg"}
          alt="Me Playing Tennis"
        />
      </div>
      <div>
        <Image
          borderRadius="2xl"
          src={"images/pictures/about_4.jpeg"}
          alt="AAIV boys"
        />
      </div>
    </CarouselTemp>
  );
};

export default AboutCarousel;
