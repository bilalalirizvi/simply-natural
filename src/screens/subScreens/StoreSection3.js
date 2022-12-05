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
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const WrapperUpto600 = styled.div`
  width: 100%;
  @media (max-width: 600px) {
    display: none;
  }
`;

const WrapperMax600 = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    display: none;
  }
`;

const sortingData = () => {
  let newData = [...staticData];
  let sorted = newData.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  return sorted;
};

const StoreSection3 = () => {
  const [data, setData] = useState(sortingData());
  return (
    <Container>
      <Heading>Our Plants Collection</Heading>
      <WrapperUpto600>
        <CardBox>
          {data?.slice(0, 3).map((x, i) => {
            return <FeaturedPlantsCardBig data={x} key={i} />;
          })}
        </CardBox>
        <CardBox>
          {data?.slice(3, 6).map((x, i) => {
            return <FeaturedPlantsCardBig data={x} key={i} />;
          })}
        </CardBox>
        <CardBox>
          {data?.slice(6, 9).map((x, i) => {
            return <FeaturedPlantsCardBig data={x} key={i} />;
          })}
        </CardBox>
        <CardBox>
          {data?.slice(9, 12).map((x, i) => {
            return <FeaturedPlantsCardBig data={x} key={i} />;
          })}
        </CardBox>
      </WrapperUpto600>
      <WrapperMax600>
        <CardBox>
          {data?.map((x, i) => {
            return <FeaturedPlantsCardBig data={x} key={i} />;
          })}
        </CardBox>
      </WrapperMax600>
    </Container>
  );
};

export default StoreSection3;
