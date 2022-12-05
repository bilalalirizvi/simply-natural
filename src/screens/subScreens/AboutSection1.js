import React from "react";
import styled from "styled-components";
import { NavBar } from "../../components";

const Overlay = styled.div`
  background-image: linear-gradient(to bottom, white 0%, transparent 100%);
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 480px;
  background-image: url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/about-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 80px;
  @media (max-width: 800px) {
    height: 320px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
`;

const ContentWrapper = styled.div`
  padding: 0px 75px;
  height: 400px;
  display: flex;
  align-items: center;
  @media (max-width: 930px) {
    padding: 0px 30px;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 200px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
  }
`;

const Heading = styled.p`
  color: ${({ theme }) => theme.headingColor};
  font-size: 64px;
  font-weight: 500;
  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 800px) {
    font-size: 38px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const AboutSection1 = () => {
  return (
    <Container>
      <Overlay>
        <NavBar />
        <ContentWrapper>
          <Heading>About Us</Heading>
        </ContentWrapper>
      </Overlay>
    </Container>
  );
};

export default AboutSection1;
