import React from "react";
import styled from "styled-components";
import { Button } from "../../Styled";

const Container = styled.div`
  width: 100%;
  padding: 120px 75px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 800px) {
    flex-direction: column;

    padding: 120px 30px;
  }
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 2;
`;
const Heading = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
`;
const Text = styled.p`
  color: rgb(70, 70, 70);
  font-size: 15px;
  margin-bottom: 40px;
`;

const AboutSection2 = () => {
  return (
    <Container>
      <Left>
        <Heading>
          We Work Hard To Provide You The Best Quality Plants And Succulents
        </Heading>
      </Left>
      <Right>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using.
        </Text>
        <Button>READ MORE</Button>
      </Right>
    </Container>
  );
};

export default AboutSection2;
