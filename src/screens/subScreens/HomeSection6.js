import React from "react";
import styled from "styled-components";
import { Button } from "../../Styled";

const Container = styled.div`
  width: 100%;
  height: 750px;
  background-image: url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/CTA-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 120px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 900px) {
    height: 550px;
  }
  @media (max-width: 600px) {
    padding: 120px 30px;
  }
`;

const Heading = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
  text-align: center;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
  text-align: center;
  line-height: 25px;
`;

const Br = styled.br`
  @media (max-width: 900px) {
    display: none;
  }
`;

const HomeSection6 = () => {
  return (
    <Container>
      <Heading>
        Interested? Shop This Plant <Br /> Collection!
      </Heading>
      <Text>
        Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
        consectetur adipisci velit, sed <Br /> quia non numquam eius modi
        tempora incidunt.
      </Text>
      <div>
        <Button>GO TO SHOP</Button>
      </div>
    </Container>
  );
};

export default HomeSection6;
