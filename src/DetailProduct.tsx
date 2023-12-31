import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import {
  Detail,
  Name,
  Badge,
  Options,
  Option,
  OptionsText,
  ImageContainer,
  DetailWrapper,
  Seperate,
  PriceDetail,
  Update,
  FreeShipping,
  CountPrice,
  TitleText,
  HeaderContainer,
} from "./styled";
export interface ObjectProps {
  result: ResultProps;
}
export interface ResultProps {
  badge: string;
  countOfPrices: number;
  freeShipping: boolean;
  imageUrl: string;
  lastUpdate: string;
  mkName: string;
  price: number;
  productName: string;
  rating: number;
  storageOptions: [];
}
const DetailProduct = () => {
  const [posts, setPosts] = useState<ObjectProps>();
  const { code } = useParams();

  useEffect(() => {
    fetch(
      `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${code}`
    )
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  const [active, setActive] = useState(0);
  const changeButtonColor = (selected: number) => {
    setActive(selected);
  };
  const formatter = new Intl.NumberFormat();
  return (
    <DetailWrapper>
      <HeaderContainer>
        <TitleText>
          <Name>{posts?.result.mkName}</Name>
          <Detail>{posts?.result.productName}</Detail>
          <Badge>{posts?.result.badge}</Badge>
        </TitleText>
        <Rating
          initialValue={posts?.result.rating}
          readonly
          size={25}
          allowFraction={true}
        />
      </HeaderContainer>
      <ImageContainer>
        <img src={posts?.result.imageUrl} alt="" />
      </ImageContainer>
      <Seperate />
      <OptionsText>Kapasite seçenekleri:</OptionsText>
      <br />
      <Options>
        {posts?.result.storageOptions.map((i, key) => (
          <Option
            onClick={() => changeButtonColor(key)}
            style={{
              border:
                active === key ? "1px solid #555555" : "1px solid #dcdcdc",
            }}
          >
            {i}
          </Option>
        ))}
      </Options>
      <CountPrice>
        {posts?.result.countOfPrices} satıcı içinde kargo dahil en ucuz fiyat
        seçeneği
      </CountPrice>
      <PriceDetail>{formatter.format(posts?.result.price || 0)} TL</PriceDetail>
      {posts?.result.freeShipping ? (
        <FreeShipping>Ücretsiz kargo</FreeShipping>
      ) : null}
      <Update>Son güncelleme: {posts?.result.lastUpdate}</Update>
    </DetailWrapper>
  );
};

export default DetailProduct;
