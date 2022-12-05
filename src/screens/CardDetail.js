import React, { useEffect } from "react";
import { CardDetailSection1, Footer, FooterBottom } from "./subScreens";

const CardDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CardDetailSection1 />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default CardDetail;
