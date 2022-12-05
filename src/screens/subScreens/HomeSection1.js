import React from "react";
import styled from "styled-components";
import { NavBar } from "../../components";
import { Button } from "../../Styled";

const Overlay = styled.div`
  background-image: linear-gradient(to bottom, white 0%, transparent 100%);
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 480px;
  background-image: url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/hero-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 80px;
  @media (max-width: 800px) {
    height: 540px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;

const ContentWrapper = styled.div`
  padding: 0px 75px;
  @media (max-width: 930px) {
    padding: 0px 30px;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Heading = styled.p`
  color: ${({ theme }) => theme.headingColor};
  font-size: 64px;
  font-weight: 500;
  line-height: 75px;
  margin-top: 24px;
  @media (max-width: 1200px) {
    font-size: 50px;
    line-height: 70px;
  }
  @media (max-width: 800px) {
    font-size: 38px;
    line-height: 50px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 32px;
  }
`;

const Br = styled.br`
  @media (max-width: 800px) {
    display: none;
  }
`;

const HomeSection1 = () => {
  return (
    <Container>
      <Overlay>
        <NavBar />
        <ContentWrapper>
          <P>Best Quality Plants</P>
          <Heading>
            Amazing Variety <Br /> Of Plants Starting <Br /> Just $6
          </Heading>
          <div style={{ marginTop: "47px" }}>
            <Button>SHOP NOW</Button>
          </div>
        </ContentWrapper>
      </Overlay>
    </Container>
  );
};

export default HomeSection1;
