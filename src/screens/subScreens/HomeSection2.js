import React from "react";
import styled from "styled-components";
import { FaSpa, FaBox, FaSyncAlt } from "react-icons/fa";

const Container = styled.div`
  padding: 75px 75px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 900px) {
    padding: 75px 30px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;
const Left = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  width: 100%;
`;
const Heading = styled.p`
  color: ${({ theme }) => theme.headingColor};
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 5px;
`;
const Text = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
`;
const Span = styled.span`
  font-size: 28px;
  color: ${({ theme }) => theme.green};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    margin-bottom: 10px;
  }
`;

const HomeSection2 = () => {
  return (
    <Container>
      <Card>
        <Left>
          <Span>
            <FaSpa />
          </Span>
        </Left>
        <Right>
          <Heading>Plants Collection</Heading>
          <Text>Any plants for your space</Text>
        </Right>
      </Card>
      <Card>
        <Left>
          <Span>
            <FaBox style={{ fontSize: "22px" }} />
          </Span>
        </Left>
        <Right>
          <Heading>Free Shipping</Heading>
          <Text>Free shipping on order</Text>
        </Right>
      </Card>
      <Card>
        <Left>
          <Span>
            <FaSyncAlt style={{ fontSize: "25px" }} />
          </Span>
        </Left>
        <Right>
          <Heading>100% Money Back</Heading>
          <Text>If the item didn't suit you</Text>
        </Right>
      </Card>
    </Container>
  );
};

export default HomeSection2;
