import React from "react";
import styled from "styled-components";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineGooglePlus, AiOutlineInstagram } from "react-icons/ai";

const Container = styled.div`
  width: 100%;
  padding: 120px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media (max-width: 800px) {
    padding: 120px 30px;
  }
`;

const Heading = styled.p`
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
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

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  @media (max-width: 800px) {
    gap: 20px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Card = styled.div`
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    padding: 0px 0px;
  }
`;

const Name = styled.p`
  font-size: clamp(16px, 2.2vw, 24px);
  color: #2b2f38;
  font-weight: 500;
`;

const Occupation = styled.p`
  font-size: 15px;
  color: #5d6167;
`;

const Line = styled.hr`
  width: 30px;
  border: 1px solid ${({ theme }) => theme.red};
  margin: 25px 0px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #2b2f38;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.red};
  }
`;

const AboutSection4 = () => {
  return (
    <Container>
      <Heading>Our Team</Heading>
      <Text>
        I am text block. Click edit button to change this text. Lorem ipsum
        dolor sit amet, <Br /> consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar <Br /> dapibus leo, when an
        unknown printer took a galley.
      </Text>
      <Box>
        <Card>
          <Image
            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/01/teammate-1.png"
            alt="Co-Founder"
          />
          <Name>Jessica Gordon</Name>
          <Occupation>Co-Founder</Occupation>
          <Line />
          <IconBox>
            <Icon>
              <TiSocialFacebook style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <TiSocialTwitter style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <AiOutlineGooglePlus style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <AiOutlineInstagram style={{ fontSize: "18px" }} />
            </Icon>
          </IconBox>
        </Card>
        <Card>
          <Image
            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/01/teammate-2.png"
            alt="Co-Founder"
          />
          <Name>Bryan Joes</Name>
          <Occupation>Co-Founder</Occupation>
          <Line />
          <IconBox>
            <Icon>
              <TiSocialFacebook style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <TiSocialTwitter style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <AiOutlineGooglePlus style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <AiOutlineInstagram style={{ fontSize: "18px" }} />
            </Icon>
          </IconBox>
        </Card>
        <Card>
          <Image
            src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/01/teammate-3-1.png"
            alt="Co-Founder"
          />
          <Name>Angella Mike</Name>
          <Occupation>Co-Founder</Occupation>
          <Line />
          <IconBox>
            <Icon>
              <TiSocialFacebook style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <TiSocialTwitter style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <AiOutlineGooglePlus style={{ fontSize: "20px" }} />
            </Icon>
            <Icon>
              <AiOutlineInstagram style={{ fontSize: "18px" }} />
            </Icon>
          </IconBox>
        </Card>
      </Box>
    </Container>
  );
};

export default AboutSection4;
