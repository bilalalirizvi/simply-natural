import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 230px;
  height: auto;
  @media (max-width: 1200px) {
    width: 200px;
  }
  @media (max-width: 1100px) {
    width: 180px;
  }
  @media (max-width: 1024px) {
    width: 160px;
  }
  @media (max-width: 900px) {
    width: 230px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const RightSide = styled.div`
  flex: 1;
`;
const Text = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
  padding-right: 20px;
  line-height: 25px;
  @media (max-width: 1024px) {
    padding-right: 0px;
  }
`;
const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0px;
`;
const Occupation = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.grey};
`;
const TestimonialsCard = ({ data: { photoUrl, text, name, occupation } }) => {
  return (
    <Card>
      <LeftSide>
        <Image src={photoUrl} alt="_Photo" />
      </LeftSide>
      <RightSide>
        <Text>{text}</Text>
        <Name>{name}</Name>
        <Occupation>{occupation}</Occupation>
      </RightSide>
    </Card>
  );
};

export default TestimonialsCard;
