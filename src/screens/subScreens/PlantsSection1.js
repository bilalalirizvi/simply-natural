import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  FeaturedPlantsCard,
  FeaturedPlantsCardBig,
  NavBar,
} from "../../components";
import staticData, { categoriesCount } from "../../staticData";
import { Button } from "../../Styled";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BoxWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 60px 25px;
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 600px) {
    padding: 60px 10px;
  }
`;

const Left = styled.div`
  width: 360px;
  @media (max-width: 1024px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const FilterBox = styled.div`
  width: 100%;
  height: 270px;
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.headingColor};
`;

const MinMaxPriceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MinMaxPrice = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.headingColor};
  font-weight: 500;
`;

const ResetBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CategoriesBox = styled.div`
  width: 100%;
  height: 170px;
  background-color: white;
  padding: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.headingColor};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.green};
  }
`;

const HottestDealBox = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 30px;
  padding: 30px;
`;

const HottestDealsCardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Right = styled.div`
  flex: 1;
  background-color: white;
  padding: 85px 100px;
  @media (max-width: 1024px) {
    padding: 30px;
  }
`;

const TextPath = styled.p`
  font-size: 14px;
  color: rgb(100, 100, 100);
`;

const TextRight = styled.p`
  font-size: 15px;
  color: rgb(100, 100, 100);
`;

const HeadingRight = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.headingColor};
  margin-top: 12px;
  margin-bottom: 35px;
`;

const ShowingResultAndSortingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const InputSelect = styled.select`
  font-size: 15px;
  color: rgb(100, 100, 100);
  width: 200px;
  padding: 0px 0px 0px 10px;
  border: none;
  outline: none;
  background-color: white;
`;

const Option = styled.option`
  font-size: 15px;
  color: rgb(100, 100, 100);
`;

const RightCardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

const minDistance = 1;

const PlantsSection1 = () => {
  const [data, setData] = useState([]);
  const [hottestDeal, setHottestDeal] = useState([]);
  const { category } = useParams();
  const [range, setRange] = useState([0, 100]);

  const rangeHandle = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
    }
  };

  useEffect(() => {
    const filterData = staticData?.filter((x) => {
      return x.category.toLowerCase() === category;
    });
    setData(filterData);
    setHottestDeal(
      filterData.filter((x) => {
        return x.sale === true;
      })
    );
    window.scroll(0, 0);
  }, [category]);

  return (
    <Container>
      <NavBar bgcColor={"white"} />
      {data.length > 0 && (
        <BoxWrap>
          <Left>
            <FilterBox>
              <Heading>Filter by price</Heading>
              <Slider value={range} onChange={rangeHandle} disableSwap />
              <MinMaxPriceBox>
                <MinMaxPrice>${(range[0] / 2).toFixed(2)}</MinMaxPrice>
                <MinMaxPrice>${(range[1] / 2).toFixed(2)}</MinMaxPrice>
              </MinMaxPriceBox>
              <ResetBox>
                <Button
                  onClick={() => {
                    setRange([0, 100]);
                  }}
                  style={{
                    opacity: range[0] > 0 || range[1] < 100 ? 1 : 0,
                  }}
                >
                  Reset
                </Button>
              </ResetBox>
            </FilterBox>
            <CategoriesBox>
              <Heading style={{ marginBottom: "0px" }}>Categories</Heading>
              {categoriesCount.map(([c, x], i) => {
                return (
                  <Category key={i}>
                    <NavLink to={`/substore/${c.toLowerCase()}`}>
                      <Text>{c}</Text>
                    </NavLink>
                    <Text>({x})</Text>
                  </Category>
                );
              })}
            </CategoriesBox>
            <HottestDealBox>
              <Heading style={{ marginBottom: "30px" }}>Hottest Deals</Heading>
              <HottestDealsCardBox>
                {hottestDeal.length > 0 && (
                  <>
                    {hottestDeal.map((x, i) => {
                      return <FeaturedPlantsCard data={x} key={i} />;
                    })}
                  </>
                )}
              </HottestDealsCardBox>
            </HottestDealBox>
          </Left>
          <Right>
            <TextPath>Home / {data[0]?.category}</TextPath>
            <HeadingRight>{data[0]?.category}</HeadingRight>
            <ShowingResultAndSortingBox>
              <TextRight>Showing all {data.length} results</TextRight>
              <InputSelect>
                <Option>Default sorting</Option>
                <Option>Sort by popularity</Option>
                <Option>Sort by average rating</Option>
                <Option>Sort by latest</Option>
                <Option>Sort by price: low to high</Option>
                <Option>Sort by price: high to low</Option>
              </InputSelect>
            </ShowingResultAndSortingBox>
            <RightCardBox>
              {data?.map((x, i) => {
                return i % 2 ? null : (
                  <Row>
                    <FeaturedPlantsCardBig data={data[i]} size={true} />
                    {data[i + 1] && (
                      <FeaturedPlantsCardBig data={data[i + 1]} size={true} />
                    )}
                  </Row>
                );
              })}
            </RightCardBox>
          </Right>
        </BoxWrap>
      )}
    </Container>
  );
};

export default PlantsSection1;
