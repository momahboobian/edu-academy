import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Brand from "../Brand/Brand";

interface CarouselProps {
  data: {
    useFor: string;
    info: string[];
    settings: { text: string };
  }[];
}

export default function Carousel({ data }: CarouselProps) {
  const { useFor, info, settings } = data;
  if (useFor === "testimonial") {
    return (
      <Slider {...settings}>
        {info.map((element, index) => (
          <Singletestimonia element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "brand") {
    return (
      <Slider {...settings}>
        {info.map((element, index) => (
          <Brand key={index} brandLogo={element.imgLink} />
        ))}
      </Slider>
    );
  }
}
