import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 120px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media (max-width: 800px) {
    padding: 120px 30px;
  }
`;

const Heading = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
  @media (max-width: 600px) {
    font-size: 28px;
  }
`;
const Text = styled.p`
  color: rgb(70, 70, 70);
  font-size: 14px;
  text-align: center;
  line-height: 30px;
`;
const Br = styled.br`
  @media (max-width: 700px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const BottomText = styled.p`
  color: rgb(70, 70, 70);
  font-size: 14px;
  line-height: 30px;
  padding-right: 110px;
  @media (max-width: 1024px) {
    padding-right: 30px;
  }
  @media (max-width: 900px) {
    padding-right: 0px;
  }
`;

const AboutSection3 = () => {
  return (
    <Container>
      <Heading>Our Company</Heading>
      <Text>
        I am text block. Click edit button to change this text. Lorem ipsum
        dolor sit amet, <Br /> consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar <Br /> dapibus leo, when an
        unknown printer took a galley.
      </Text>
      <Image
        src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/bg4-free-img.jpg"
        alt="_Photo"
      />
      <Box>
        <BottomText>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here, content here’, making it
          look like readable English. Many desktop publishing packages and web
          page editors
        </BottomText>
        <BottomText>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn’t anything embarrassing hidden in the middle of text.{" "}
        </BottomText>
      </Box>
    </Container>
  );
};

export default AboutSection3;
