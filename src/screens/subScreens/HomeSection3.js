import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0px 75px 75px 75px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  @media (max-width: 1024px) {
    gap: 20px;
    padding: 0px 20px 75px 20px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: rgb(239, 238, 244);
  @media (max-width: 800px) {
    align-items: center;
  }
`;
const Image = styled.div`
  background-color: rgb(239, 238, 244);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 28vw;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media (max-width: 800px) {
    width: 60%;
    height: 55vw;
  }
`;
const Content = styled.div`
  padding: 30px 40px;
  background-color: rgb(239, 238, 244);
  border-bottom-left-radius: 15px;
  border-botto-right-radius: 15px;
  @media (max-width: 1024px) {
    padding: 30px 20px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Heading = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
const Text = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 25px;
`;
const Link = styled.p`
  color: ${({ theme }) => theme.red};
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  :hover {
    color: rgb(80, 80, 80);
  }
`;

const HomeSection3 = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Container>
      <Card>
        <Image
          style={{
            backgroundImage:
              "url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant6-free-img.jpg)",
          }}
        ></Image>
        <Content>
          <Heading>Beautiful Plant Varieties</Heading>
          <Text>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
          <NavLink to={"/substore/plants"}>
            <Link>SEE COLLECTION</Link>
          </NavLink>
        </Content>
      </Card>
      <Card>
        <Image
          style={{
            backgroundImage:
              "url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/cactus2-free-img.jpg)",
          }}
        ></Image>
        <Content>
          <Heading>Trendy Cactus Varieties</Heading>
          <Text>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
          <NavLink to={"/substore/cactus"}>
            <Link>SEE COLLECTION</Link>
          </NavLink>
        </Content>
      </Card>
      <Card>
        <Image
          style={{
            backgroundImage:
              "url(https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/plant4-free-img.jpg)",
          }}
        ></Image>
        <Content>
          <Heading>Gardening Accessories</Heading>
          <Text>Luctus nec ullamcorper mattis, pulvinar dapibus leo.</Text>
          <NavLink to={"/store"}>
            <Link>VISIT THE STORE</Link>
          </NavLink>
        </Content>
      </Card>
    </Container>
  );
};

export default HomeSection3;
