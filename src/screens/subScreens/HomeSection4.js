import React from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  padding: 120px 75px;
  border-bottom: 1px solid rgb(230,230,230)};
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media (max-width: 800px) {
    padding: 120px 30px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 30%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 60%;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Heading = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.headingColor};
`;
const Text = styled.p`
  color: rgb(70, 70, 70);
  font-size: 15px;
`;
const HelpText = styled.p`
  color: ${({ theme }) => theme.red};
  font-size: 12px;
  font-weight: 500;
  margin-top: 40px;
  cursor: pointer;
  :hover {
    color: black;
  }
  @media (max-width: 800px) {
    margin-top: 25px;
    display: inline-block;
  }
`;

const HomeSection4 = ({ color }) => {
  return (
    <Container style={{ backgroundColor: color }}>
      <Left>
        <Heading>Need help in choosing the right plants?</Heading>
        <HelpText>
          <FaPhone /> ASK FOR HELP
        </HelpText>
      </Left>
      <Right>
        <Text>
          Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
          primis eget maecenas sedurna malesuada consectetuer.
        </Text>
        <Text>
          Ornare integer commodo mauris et ligula purus, praesent cubilia
          laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat
          fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum
          tempor quis, turpis luctus dolor sapien vivamus.
        </Text>
      </Right>
    </Container>
  );
};

export default HomeSection4;
