import React from "react";
import styled from "styled-components";
import { TestimonialsCard } from "../../components";

const Container = styled.div`
  width: 100%;
  padding: 120px 75px;
  display: flex;
  flex-direction: row;
  gap: 60px;
  @media (max-width: 1024px) {
    gap: 20px;
    padding: 120px 30px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 900px) {
    gap: 20px;
  }
  @media (max-width: 600px) {
    gap: 50px;
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

const Text = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.grey};
  margin: 20px 0px 70px 0px;
  @media (max-width: 600px) {
    margin: 20px 0px 40px 0px;
  }
`;

const data = [
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user1-free-img.jpg",
    text: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. ",
    name: "Sarah Jones",
    occupation: "Interior Designer",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-13/wp-content/uploads/sites/410/2020/01/testimonial-2.jpg",
    text: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. ",
    name: "Jessica Foxx",
    occupation: "Student",
  },
  {
    photoUrl:
      "https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2019/01/user3-free-img.jpg",
    text: "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. ",
    name: "Briana Luke",
    occupation: "Student",
  },
];

const Testimonials = () => {
  return (
    <Container>
      <Left>
        <Heading>Testimonials</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <TestimonialsCard data={data[0]} />
      </Left>
      <Right>
        <TestimonialsCard data={data[1]} />
        <TestimonialsCard data={data[2]} />
      </Right>
    </Container>
  );
};

export default Testimonials;
