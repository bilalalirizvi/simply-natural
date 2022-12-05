import React, { useState } from "react";
import { NavBar } from "../../components";
import styled from "styled-components";
import { Button } from "../../Styled";
import { MdError } from "react-icons/md";
import { TbShoppingCartX } from "react-icons/tb";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ContainerOne = styled.div`
  width: 100%;
  padding: 75px;
  border-top: 1px solid rgb(220, 220, 220);
  @media (max-width: 800px) {
    padding: 30px;
  }
  @media (max-width: 600px) {
    padding: 30px 10px;
  }
`;
const ContainerTwo = styled.div`
  width: 100%;
  padding: 100px 100px 120px 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 800px) {
    padding: 30px;
    padding-bottom: 50px;
  }
  @media (max-width: 600px) {
    padding: 20px;
    padding-bottom: 40px;
    gap: 10px;
  }
`;

const Heading = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.headingColor};
  font-weight: 400;
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

const ErrorAlert = styled.div`
  width: 100%;
  padding: 20px 20px;
  border-top: 3px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f7f6f7;
`;
const Error = styled.p`
  font-size: 14px;
`;

const CartSection1 = () => {
  const [errorMessage, setErrorMessage] = useState(
    "Your cart is currently empty."
  );

  return (
    <Container>
      <NavBar bgcColor={"white"} />
      <ContainerOne>
        <ContainerTwo>
          <Heading>Cart</Heading>
          {errorMessage && (
            <ErrorAlert>
              <TbShoppingCartX
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginRight: "10px",
                }}
              />
              <Error>{errorMessage}</Error>
            </ErrorAlert>
          )}
          <div style={{ marginTop: "10px" }}>
            <Button>RETURN TO SHOP</Button>
          </div>
        </ContainerTwo>
      </ContainerOne>
    </Container>
  );
};

export default CartSection1;
