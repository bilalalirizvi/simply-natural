import React from "react";
import styled from "styled-components";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = styled.div`
  width: 20vw;
  position: relative;
  @media (max-width: 900px) {
    width: 26vw !important;
  }
  @media (max-width: 600px) {
    width: 40vw !important;
  }
`;
const ImageWrap = styled.div`
  width: 100%;
  height: 20vw;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 900px) {
    height: 26vw !important;
  }
  @media (max-width: 600px) {
    height: 40vw !important;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  padding: 10px 0px;
`;
const Category = styled.p`
  font-size: 12px;
  color: rgb(150, 150, 150);
`;
const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.headingColor};
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const Rating = styled.p``;
const Price = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
const Sale = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: #eb5d5e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  position: absolute;
  top: -7px;
  right: -7px;
`;

const Span = styled.s`
  color: rgb(150, 150, 150);
`;

const FeaturedPlantsCard = ({
  data: { photoUrl, category, name, price, oldPrice, sale, itemId },
}) => {
  return (
    <Card>
      {sale && <Sale>Sale!</Sale>}
      <Link to={`/carddetail/${itemId}`}>
        <ImageWrap>
          <Image src={photoUrl} alt="_Photo" />
        </ImageWrap>
      </Link>
      <Content>
        <Category>{category}</Category>
        <Link to={`/carddetail/${itemId}`}>
          <Name>{name}</Name>
        </Link>
        <Rating>
          <BsStar style={{ fontSize: "13px", color: "rgb(80,80,80)" }} />
          <BsStar style={{ fontSize: "13px", color: "rgb(80,80,80)" }} />
          <BsStar style={{ fontSize: "13px", color: "rgb(80,80,80)" }} />
          <BsStar style={{ fontSize: "13px", color: "rgb(80,80,80)" }} />
          <BsStar style={{ fontSize: "13px", color: "rgb(80,80,80)" }} />
        </Rating>
        <Price>
          <Span>{oldPrice !== 0 && `$${oldPrice.toFixed(2)}`}</Span>{" "}
          {`$${price.toFixed(2)}`}
        </Price>
      </Content>
    </Card>
  );
};

export default FeaturedPlantsCard;
