import Carousel, { SwiperSlide } from "./Carousel";
import { BannerWrapper, ImageWrapper } from "./styled";
import Card from "./Card";

export interface BannerProps {
  items: Array<{
    imageUrl?: string;
    price?: number;
    name?: string;
    followCount?: number;
    countOfPrices?: number;
    dropRatio?: number;
  }>;
}

const Banner = ({ items }: BannerProps) => {
  return (
    <BannerWrapper>
      <Carousel>
        {items &&
          items.map((item) =>
            item.imageUrl ? (
              <SwiperSlide>
                <ImageWrapper>
                  <Card listing={false} display={"flex"} item={item} />
                </ImageWrapper>
              </SwiperSlide>
            ) : null
          )}
      </Carousel>
    </BannerWrapper>
  );
};

export default Banner;
