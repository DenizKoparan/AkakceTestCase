import { SlArrowRight } from "react-icons/sl";
import {
  ContentWrapper,
  SalesPerson,
  Name,
  Price,
  FollowUp,
  Circle,
  CircleText,
  ImageContainer,
  Container,
} from "./styled";
// import { useState } from "react";

export interface ProductProps {
  item: {
    imageUrl?: string | undefined;
    price?: number | undefined;
    name?: string | undefined;
    followCount?: number | undefined;
    countOfPrices?: number | undefined;
    dropRatio?: number | undefined;
    code?: number;
  };
  display?: string;
  listing?: boolean;
}

const Card = ({ item, display, listing }: ProductProps) => {
  const formatter = new Intl.NumberFormat();
  //   const [posts, setPosts] = useState([]);

  const detailClicked = (code: number) => {
    window.location.href = `/detail-product/${code}`;
  };
  return (
    <Container
      onClick={() => detailClicked(item.code || 0)}
      displaySelect={display}
    >
      {!listing ? (
        <ImageContainer>
          <img src={item.imageUrl} alt="" />
          <Circle />
          <CircleText>{item.dropRatio}%</CircleText>
        </ImageContainer>
      ) : (
        <ImageContainer>
          <Circle />
          <CircleText>{item.dropRatio}%</CircleText>
          <img src={item.imageUrl} alt="" />
        </ImageContainer>
      )}

      <ContentWrapper>
        <Name>{item.name}</Name>
        <Price>{formatter.format(item.price || 0)} TL</Price>
        <SalesPerson>
          {item.countOfPrices} satıcı
          <SlArrowRight size={10} />
        </SalesPerson>
        <FollowUp>{formatter.format(item.followCount || 0)}+ takip</FollowUp>
      </ContentWrapper>
    </Container>
  );
};

export default Card;
