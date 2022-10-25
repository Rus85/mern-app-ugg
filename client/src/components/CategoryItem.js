import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({width: '100%', height: '40vh'})}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 500;
`;
const Button = styled.button`
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  color: grey;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  ${mobile({fontSize: 16})}
  &:hover {
    background-color: black;
    color: white;
    transition: 0.5s;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>ПОДРОБНЕЕ</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
