"use client";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import { Wrapper } from "./styled";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

// install Swiper modules

export interface Props {
  slider?: boolean;
}
const Carousel = ({ slider, ...props }: Props & SwiperProps) => {
  return (
    <Wrapper>
      <Swiper
        pagination={slider ? { clickable: true } : false}
        navigation={slider ? true : false}
        grabCursor={true}
        {...props}
        loop={true}
      />
    </Wrapper>
  );
};
export { SwiperSlide };
export default Carousel;
