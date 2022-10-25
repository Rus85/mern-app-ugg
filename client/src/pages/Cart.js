import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../requestMethods";
import { useState } from "react";
import { clearCartState, deleteProduct } from "../redux/cartRedux";
import { Link, useNavigate } from "react-router-dom";
import showAlert from "../components/alerts/SizeAlert";
import { motion } from "framer-motion";

const Container = styled.div``;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 100px;
  padding: 20px;
  ${mobile({ padding: "10px", alignItems: 'center' })}
`;

const Title = styled.h1`
font-size: 30px;
  font-weight: 300;
  text-align: center;
  ${mobile({fontSize: '26px', marginTop: '10px'})}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ margin: "0px 10px" })}
`;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  ${mobile({display: 'flex', flexDirection: 'column'})}
`;

const Image = styled.img`
  width: 300px;
  ${mobile({ width: "100%" })}
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;

const ProductName = styled.span`
  ${mobile({marginBottom: '10px'})}
`;
const ProductId = styled.span`
  ${mobile({marginBottom: '10px'})}
`;

const ProductColor = styled.span`
   ${mobile({marginBottom: '10px'})}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "30px" })}
`;

const FormBlock = styled.div`
  flex: 1.5;
  margin-right: 10px;
 ${mobile({ marginRight: "0", marginBottom: "20px", marginTop: "40px"})}
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-weight: 300;
  font-size: 22px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3f7640;
  border-color: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    transition: 0.5s;
    opacity: 0.8;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-bottom: 20px;
  ${mobile({ height: '35vh'})}
`;

const FormTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: black;
  font-weight: 300;
  font-size: 22px;
`;

const Labels = styled.label`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0px;
`;

const InputsBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Inputs = styled.input`
  width: 100%;
  line-height: 35px;
  padding: 5px 10px;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  font-size: 18px;
  margin: 20px 0px;
`;

const FormHeader = styled.h3`
  display: none;

  ${mobile({
    display: 'block',
    marginTop: '40px',
    textAlign: 'center',
    fontWeight: '300'
    })}
`

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [order, setOrder] = useState();
  const [inputs, setInputs] = useState({ name: "", phone: "", adress: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const allSizes = cart.products.map((product) => {
    return product.size;
  });

  const userData = {
    ...inputs,
    allSizes,
    products: cart.products,
    // sizes: allSizes,
    quantity: cart.quantity,
    amount: cart.total,
  };

  const handleClick = () => {
    const sendOrder = async () => {
      try {
        const res = await userRequest.post("/orders", userData);
        setOrder(res.data);
      } catch {}
    };
    sendOrder();
  };

  function multiple() {
    if (!inputs.name && !inputs.phone && !inputs.adress) {
      return showAlert({
        text: "Для оформления заказа введите личные данные",
        icon: "question",
        confirmButtonText: "OK",
      });
    } else {
      setInputs({ name: "", phone: "", adress: "" });
      dispatch(clearCartState());
      handleClick();
      navigate("/success");
    }
  }


  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.5 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
          <Title>КОРЗИНА</Title>
          <Top>
            <Link to="/">
              <TopButton>Продолжить покупки</TopButton>
            </Link>
            {/* <TopTexts>
            <TopText>В корзине (2)</TopText>
            <TopText>Отложить (0)</TopText>
          </TopTexts> */}
            {/* <TopButton type="filled">Оформить заказ</TopButton> */}
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product, key) => (
                <Product key={key}>
                  <ProductDetails>
                    <Link to={`/product/${product._id}`}>
                      <Image src={product.img} />
                    </Link>
                    <Details>
                      <ProductName>
                        <b>Товар:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>Артикул:</b> {product.desc}
                      </ProductId>
                      <ProductColor color={product.color}>
                        <b>Цвет:</b> {product.colorRu[0]}
                      </ProductColor>
                      <ProductSize>
                        <b>Размер:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetails>
                  {/* <button onClick={() => dispatch(deleteProduct(product._id))} >Удалить</button> */}
                  <PriceDetail>
                    <ProductAmountContainer>
                      {/* <Add />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove /> */}
                    </ProductAmountContainer>
                    <ProductPrice>
                      {`${product.price * product.quantity} руб.`}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
            </Info>
            <FormHeader>
              Для оформления заказа пожалуйста, заполните форму
            </FormHeader>
            <FormBlock>
              <FormWrapper>
                <FormTitle>Личные данные</FormTitle>
                {/* <Labels htmlFor="name">Имя</Labels> */}
                <InputsBlock>
                  <Inputs
                    name="name"
                    type="text"
                    placeholder="Имя"
                    onChange={handleChange}
                    value={inputs.name}
                  />
                </InputsBlock>
                {/* <Labels htmlFor="phone">Телефон</Labels> */}
                <InputsBlock>
                  <Inputs
                    name="phone"
                    type="text"
                    placeholder="Телефон"
                    onChange={handleChange}
                    value={inputs.phone}
                  />
                </InputsBlock>
                {/* <Labels htmlFor="Адрес">Адрес</Labels> */}
                <InputsBlock>
                  <Inputs
                    name="adress"
                    type="text"
                    placeholder="Адрес"
                    onChange={handleChange}
                    value={inputs.adress}
                  />
                </InputsBlock>
              </FormWrapper>
            </FormBlock>
            <Summary>
              <SummaryTitle>Итого</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Сумма всех товаров</SummaryItemText>
                <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Доставка</SummaryItemText>
                <SummaryItemPrice>500 руб.</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Скидка на доставку 500 руб.</SummaryItemText>
                <SummaryItemPrice>500 руб.</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>К оплате</SummaryItemText>
                <SummaryItemPrice>{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick={multiple}>Оформить заказ</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </motion.div>
  );
};

export default Cart;
