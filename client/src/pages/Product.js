import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import showAlert from "../components/alerts/SizeAlert";
import { motion } from "framer-motion";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ width: "100%", height: "50vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  ${mobile({ fontSize: '28px', textAlign: 'center' })}
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin: 20px 0px;
`;

const Desc = styled.h3`
  font-weight: 300;
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  background-color: white;
  font-size: 16px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: black;
    color: white;
    transition: all 0.5s ease;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [colorEn, setColor] = useState();
  const [catalog, setCatalog] = useState();
  const [size, setSize] = useState("");
  const dispath = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setColor(res.data.colorEn[0]);
      } catch {}
    };
    getProduct();
  }, [id]);

  const quantityHandler = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // const chooseColor = (param) => {
  //   setColor(param)
  // }

  const handleClick = () => {
    if (size === '') {
      return showAlert({
        text:'????????????????????, ???????????????? ???????????? ??????????',
        icon:'question',
        confirmButtonText: 'OK'
    })
    } else {
      showAlert({
        title: "??????????????!",
        text:'?????????? ???????????????? ?? ??????????????',
        icon:'success',
        confirmButtonText: 'OK'
    })
      dispath(addProduct({ ...product, quantity, size, colorEn }));
    }
  };


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
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <SubTitle>{product.subTitle}</SubTitle>
          <Desc><span style={{fontWeight: 500}}>??????????????:</span> {product.desc}</Desc>
          <Price>{product.price} ??????.</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>????????:</FilterTitle>
              {product.colorEn?.map((c) => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>????????????</FilterTitle>
              <FilterSize defaultValue='default' onChange={(e) => setSize(e.target.value)}>
              <FilterSizeOption value='default' disabled >??????????????</FilterSizeOption>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => quantityHandler("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => quantityHandler("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>???????????????? ?? ??????????????</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
    </motion.div>
  );
};

export default Product;
