import React, { useState } from "react";
import styled from "styled-components";
import { FeaturedPlantsCardBig } from "../../components";
import staticData from "../../staticData";

const Container = styled.div`
  width: 100%;
  padding: 120px 75px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: white;
  @media (max-width: 900px) {
    padding: 120px 30px;
  }
`;

const Heading = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const StoreSection2 = () => {
  const [data, setData] = useState(staticData);
  return (
    <Container>
      <Heading>Featured Plants</Heading>
      <CardBox>
        {data?.slice(0, 3).map((x, i) => {
          return <FeaturedPlantsCardBig data={x} key={i} />;
        })}
      </CardBox>
    </Container>
  );
};

export default StoreSection2;
