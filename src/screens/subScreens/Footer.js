import React from "react";
import styled from "styled-components";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineGooglePlus, AiOutlineInstagram } from "react-icons/ai";
import logo from "../../assets/images/logo.png";

const Container = styled.div`
  width: 100%;
  padding: 75px 75px;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
  @media (max-width: 750px) {
    padding: 75px 30px;
  }
`;

const Column = styled.div`
  flex-basis: 270px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 650px) {
    flex-basis: 100%;
  }
`;
const ColumnLogo = styled.div`
  flex-basis: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 1047px) {
    align-items: flex-start;
  }
  @media (max-width: 650px) {
    flex-basis: 100%;
  }
`;

const Heading = styled.p`
  font-size: 22px;
  margin-bottom: 20px;
`;
const Link = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.grey};
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.green};
  }
`;
const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.grey};
  line-height: 30px;
`;
const Image = styled.img`
  width: 100px;
  height: auto;
`;
const LogoName = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #4e5768;
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
  background-color: #4e5768;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.green};
  }
`;

const Footer = () => {
  return (
    <Container>
      <ColumnLogo>
        <Image src={logo} alt="Logo" />
        <LogoName>Simply Natural</LogoName>
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
      </ColumnLogo>
      <Column>
        <Heading>Quick Links</Heading>
        <Link href="/">Introduction</Link>
        <Link href="/">know more About Us</Link>
        <Link href="/">Visit Store</Link>
        <Link href="/">Let’s Connect</Link>
      </Column>
      <Column>
        <Heading>Important Links</Heading>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Shipping Details</Link>
        <Link href="/">Terms & Conditions</Link>
        <Link href="/">Media Kit</Link>
      </Column>
      <Column>
        <Heading>
          Get In Touch With Us For The Best Quality Plants & Succulents
        </Heading>
        <Text>
          Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed
          quia non numquam eius modi tempora incidunt lores ta porro ame.
        </Text>
      </Column>
    </Container>
  );
};

export default Footer;
