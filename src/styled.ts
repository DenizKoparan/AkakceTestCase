import styled from "styled-components";
export const Container = styled.div<{ displaySelect?: string }>`
  display: ${({ displaySelect }) =>
    displaySelect ? `${displaySelect}` : "flex"};
  justify-content: center;
  padding: 10px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  .swiper-pagination {
    top: 0px;
    height: min-content;
    background: #863339;
    opacity: 0.4 !important;
  }
  .swiper-pagination-bullet {
    width: 30%; // I need to fix this to adapt with every possible number of bullets
    color: gray;
    opacity: 0.2;
    height: 5px;
    border-radius: 0px;
  }
`;
export const BannerWrapper = styled.div`
  width: auto;
  max-width: 500px;
  height: auto;
  padding-top: 100px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 200px;
  position: relative;
  padding: 20px;
`;
export const Name = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  color: #778899;
`;
export const Detail = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 600;
  color: #555555;
`;
export const Badge = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: #fafad2;
  width: fit-content;
  padding: 2px;
  font-size: 12px;
  font-weight: 600;
  color: #555555;
`;
export const OptionsText = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #778899;
`;
export const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;
export const Option = styled.button`
  background-color: transparent;
  width: 100px;
  height: 40px;
  border-radius: 4px;
`;
export const ContentWrapper = styled.div`
  margin-top: 20px;
  text-align: justify;
  margin-left: 10px;
`;
export const Price = styled.div`
  margin-top: 20px;
`;
export const SalesPerson = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: grey;
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const FollowUp = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: grey;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 20px;
`;
export const Circle = styled.div`
  height: 35px;
  width: 35px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
`;
export const CircleText = styled.span`
  font-size: 12px;
  margin-left: -37px;
  height: 35px;
  align-items: center;
  display: flex;
  color: white;
  font-weight: 700px;
`;
export const ImageContainer = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  gap: 6px;
`;
export const ListingWrapper = styled.div`
  background-color: #f8f8ff;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
  justify-content: center;
  padding: 40px;
  width: fit-content;
`;
export const CardWrapper = styled.div`
  background-color: white;
  width: 400px;
  border-radius: 8px;
`;
export const ListingContainer = styled.div`
  width: fit-content;
`;
export const DetailWrapper = styled.div`
  padding: 20px;
  width: 400px;
`;
export const Seperate = styled.hr`
  height: 1px;
  border-width: 0;
  background-color: #dcdcdc;
  margin-top: 20px;
`;
export const FreeShipping = styled.div`
  color: #228b22;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 5px;
`;
export const Update = styled.div`
  color: #778899;
  font-weight: 600;
  font-size: 10px;
`;
export const PriceDetail = styled.div`
  color: #1b1b1b;
  font-weight: 700;
  font-size: 20px;
`;
export const CountPrice = styled.div`
  color: #1b1b1b;
  font-weight: 700;
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const TitleText = styled.div``;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
