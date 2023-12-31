import React, { useEffect, useState } from "react";
import "./App.css";
import { CardWrapper, ListingContainer, ListingWrapper } from "./styled";
import Banner from "./Banner";
import Card from "./Card";
export interface ObjectProps {
  result: ResultProps;
}
export interface ResultProps {
  nextUrl: string;
  horizontalProducts: [];
  products: [];
}
function ListingProduct() {
  const [posts, setPosts] = useState<ObjectProps>();

  useEffect(() => {
    fetch("https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  console.log(posts?.result.products.map((item) => item));
  return (
    <ListingContainer>
      <Banner items={posts?.result.horizontalProducts || []} />
      <ListingWrapper>
        {posts?.result.products.map((item) => (
          <CardWrapper>
            <Card display={"grid"} item={item} />
          </CardWrapper>
        ))}
      </ListingWrapper>
    </ListingContainer>
  );
}

export default ListingProduct;
