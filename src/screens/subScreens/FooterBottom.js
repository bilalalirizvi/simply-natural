import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100;
  background-color: white;
  padding: 30px 75px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(220, 220, 220);
  @media (max-width: 800px) {
    padding: 30px 30px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 0px;
    gap: 5px;
    height: 80px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: 15px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const FooterBottom = () => {
  return (
    <Container>
      <Text>Copyright © 2022 Simply Natural</Text>
      <Text>Powered by Simply Natural</Text>
    </Container>
  );
};

export default FooterBottom;
