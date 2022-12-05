import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
`;
const Cart = styled.div`
  width: 480px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 100%;
  padding: 18px 25px;
  border-bottom: 1px solid rgb(220, 220, 220);
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.p`
  font-weight: 500;
`;
const ItemBox = styled.div`
  padding: 0px 25px;
  flex: 1;
`;
const Text = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.grey};
`;
const ButtonBox = styled.div`
  width: 100%;
  padding: 20px 25px;
`;
const Button = styled.button`
  width: 100%;
  outline: none;
  border: 1px solid ${(props) => props.theme.red};
  color: ${(props) => props.theme.red};
  background-color: transparent;
  height: 50px;
  border-radius: 30px;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    border: 1px solid ${(props) => props.theme.green};
    color: ${(props) => props.theme.green};
  }
`;

const NoItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShoppingCart = ({ shoppingCart }) => {
  const [items, setItems] = useState([]);
  return (
    <Container>
      <Cart>
        <Header>
          <Heading>Shopping cart</Heading>
          <MdClose
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={shoppingCart}
          />
        </Header>
        <ItemBox>
          {items.length !== 0 ? (
            ""
          ) : (
            <NoItem>
              <Text>No products in the cart.</Text>
            </NoItem>
          )}
        </ItemBox>
        <ButtonBox>
          <Button>CONTINUE SHOPPING</Button>
        </ButtonBox>
      </Cart>
    </Container>
  );
};

export default ShoppingCart;
