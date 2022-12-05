import React, { useState, useEffect } from "react";
import { FeaturedPlantsCard, NavBar, ReviewForm } from "../../components";
import styled, { keyframes } from "styled-components";
import { Button } from "../../Styled";
import { BsCheckCircleFill } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import staticData from "../../staticData";

const Box = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ContainerOne = styled.div`
  width: 100%;
  padding: 75px;
  border-top: 1px solid rgb(220, 220, 220);
  @media (max-width: 1150px) {
    padding: 30px;
  }
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const ContainerTwo = styled.div`
  width: 100%;
  padding: 100px 100px 120px 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1150px) {
    padding: 30px;
  }
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Alert = styled.div`
  width: 100%;
  padding: 20px 20px;
  border-top: 3px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f6f7;
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Message = styled.p`
  font-size: 14px;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const ImageBox = styled.div`
  flex: 1;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.5);
  }
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 0px 0px 50px;
  @media (max-width: 950px) {
    padding: 0px 0px 0px 0px;
  }
`;
const CategName = styled.p`
  font-size: 14px;
`;
const Name = styled.p`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
    font-weight: 500;
  }
`;
const Price = styled.p`
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
const Description = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
  line-height: 30px;
`;
const Quantity = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 15px 0px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;
const Input = styled.input`
  width: 60px;
  height: 45px;
  padding: 0px 10px;
  font-size: 15px;
  border: 1px solid rgb(220, 220, 220);
  outline: none;
  ::-webkit-inner-spin-button {
    opacity: 1;
    width: 14px;
    height: 30px;
  }
  ::-webkit-outer-spin-button {
    opacity: 1;
  }
`;
const Category = styled.p`
  font-size: 15px;
`;

const DescriptionAndReview = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid rgb(220, 220, 220);
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const LinkButton = styled.button`
  height: 100%;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const DescriptionBox = styled.div`
  width: 100%;
`;

const DescriptionText = styled.p`
  font-size: 15px;
  line-height: 30px;
  color: ${({ theme }) => theme.grey};
`;

const RelatedProducts = styled.div`
  margin-top: 30px;
`;
const RelatedProductsHeading = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`;
const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Free = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgb(150, 150, 150);
  display: inline;
`;

const SpinnerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Span = styled.span`
  animation: ${rotate} 2s linear infinite;
`;

const CardDetailSection1 = () => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [switchSubPage, setSwitchSubPage] = useState(false);
  const [item, setItem] = useState();
  const [relatedItem, setRelatedItem] = useState([]);

  const { itemid } = useParams();
  useEffect(() => {
    const data = staticData.filter((x) => {
      return x.itemId === itemid;
    });
    setItem({ ...data[0] });
    const relatedData = staticData.filter((x) => {
      return x.category === data[0].category && x.itemId !== itemid;
    });
    setRelatedItem(relatedData.slice(0, 2));
    window.scroll(0, 0);
  }, [itemid]);

  const addToCart = (item) => {
    setMessage(`"${item.name}" has been added to your cart.`);
  };
  return (
    <Container>
      <NavBar bgcColor={"white"} />
      <ContainerOne>
        {item ? (
          <ContainerTwo>
            {message && (
              <Alert>
                <Box>
                  <BsCheckCircleFill
                    style={{
                      fontSize: "18px !important",
                      color: "black",
                      marginRight: "10px",
                    }}
                  />
                  <Message>{message}</Message>
                </Box>
                <Box>
                  <NavLink to={"/cart"}>
                    <Button>VIEW CART</Button>
                  </NavLink>
                </Box>
              </Alert>
            )}
            <Detail>
              <ImageBox>
                <Image src={item?.photoUrl} />
              </ImageBox>
              <Content>
                <CategName>{item?.category}</CategName>
                <Name>{item?.name}</Name>
                <Price>
                  {`$${item?.price?.toFixed(2)}`}
                  {item?.shipping && <Free> + Free Shipping</Free>}
                </Price>
                <Description>{item?.description}</Description>
                <Quantity>
                  <Input
                    type="number"
                    value={quantity}
                    readonly
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    max="10"
                  />
                  <Button onClick={() => addToCart(item)}>ADD TO CART</Button>
                </Quantity>
                <Category>Category: {item?.category}</Category>
              </Content>
            </Detail>
            <DescriptionAndReview>
              <LinkButton
                onClick={() => setSwitchSubPage(false)}
                style={{
                  borderTop: !switchSubPage && "2px solid black",
                }}
              >
                Description
              </LinkButton>
              <LinkButton
                onClick={() => setSwitchSubPage(true)}
                style={{
                  borderTop: switchSubPage && "2px solid black",
                }}
              >
                Reviews (0)
              </LinkButton>
            </DescriptionAndReview>
            {switchSubPage ? (
              <ReviewForm name={item?.name} />
            ) : (
              <DescriptionBox>
                <DescriptionText>{item?.description}</DescriptionText>
              </DescriptionBox>
            )}
            <RelatedProducts>
              <RelatedProductsHeading>Related Products</RelatedProductsHeading>
              <CardBox>
                {relatedItem &&
                  relatedItem.map((x, i) => {
                    return <FeaturedPlantsCard data={x} key={i} />;
                  })}
              </CardBox>
            </RelatedProducts>
          </ContainerTwo>
        ) : (
          <ContainerTwo>
            <SpinnerBox>
              <Span>
                <TbFidgetSpinner style={{ fontSize: "30px" }} />
              </Span>
            </SpinnerBox>
          </ContainerTwo>
        )}
      </ContainerOne>
    </Container>
  );
};

export default CardDetailSection1;
