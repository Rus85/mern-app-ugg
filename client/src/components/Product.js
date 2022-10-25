import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  cursor: pointer;
  ${mobile({display: 'none'})}
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f5fbfd; */
  position: relative;
 &:hover ${Info} {
    opacity: 1;
  }
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const GoodsInfo = styled.div`
display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  z-index: 2;
`;

const GoodsTitle = styled.span`
display: inline-block;
  font-size: 18px;
  font-weight: 400;
`

const GoodsPrice = styled.span`
display: inline-block;
margin-top: 15px;
  font-size: 18px;
  font-weight: 300;
 `

const Image = styled.img`
  width: 75%;
  /* z-index: 2; */
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Link style={{textDecoration: 'none', color: 'black'}} to={`/product/${item._id}`}>
      <GoodsInfo>
        <Image src={item.img} />
        <GoodsTitle>{item.title}</GoodsTitle>
        <GoodsPrice>{item.price} руб.</GoodsPrice>
      </GoodsInfo>
      </Link>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
