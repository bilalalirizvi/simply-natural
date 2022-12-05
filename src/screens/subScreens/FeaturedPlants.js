import React, { useState } from "react";
import styled from "styled-components";
import { FeaturedPlantsCard } from "../../components";
import staticData from "../../staticData";

const Container = styled.div`
  width: 100%;
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
const Text = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
  margin: 20px 0px 50px 0px;
  @media (max-width: 600px) {
    text-align: center;
    padding: 0px 20px;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const FeaturedPlants = () => {
  const [data, setData] = useState(staticData);
  return (
    <Container>
      <Heading>Featured Plants</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <CardBox>
        {data?.slice(0, 8).map((data, index) => {
          return <FeaturedPlantsCard data={data} key={index} />;
        })}
      </CardBox>
    </Container>
  );
};

export default FeaturedPlants;
