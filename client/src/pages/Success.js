import Announcement from "../components/Announcement";
import styled from "styled-components";
import SuccessBanner from "../assets/banners/success-banner.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


const SuccessBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({margin: '10px'})}
`;

const SuccessImg = styled.img`
  width: 600px;
  ${mobile({width: '100%'})}
`;

const SuccessHeader = styled.h1`
  font-size: 30px;
  font-weight: 500;
  ${mobile({textAlign: 'center', fontSize: '22px'})}
`;

const SuccessDescr = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  ${mobile({textAlign: 'center', fontSize: '18px'})}
`;

const SuccessBtn = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  /* display: inline-block; */
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  margin-top: 50px;
  margin-bottom: 100px;
  &:disabled {
    pointer-events: none;
  }
  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

const Success = () => {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, scaleX: 0.5 }}
    animate={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 0.5 }}
  >
      <Announcement />
      <Navbar />
      <SuccessBlock>
        <SuccessImg src={SuccessBanner} />
        <SuccessHeader>Ваш заказ успешно оформлен!</SuccessHeader>
        <SuccessDescr>
          В ближайшее время с Вами свяжется отдел продаж
        </SuccessDescr>
        <Link to="/">
          <SuccessBtn>На главную</SuccessBtn>
        </Link>
      </SuccessBlock>
      <Footer/>
      </motion.div>
    </>
  );
};

export default Success;
