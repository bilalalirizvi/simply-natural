import React from "react";
import {
  StoreSection1,
  StoreSection2,
  StoreSection3,
  HomeSection4,
  Footer,
  FooterBottom,
} from "./subScreens";

const Store = () => {
  return (
    <>
      <StoreSection1 />
      <StoreSection2 />
      <StoreSection3 />
      <HomeSection4 color={"white"} />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Store;
