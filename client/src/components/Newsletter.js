import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
  ${mobile({textAlign: 'center', fontSize: '22px'})}
`;
const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign: 'center', fontSize: '18px'})}
`;
const InputContainer = styled.div`
  width: 30%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width: '80%'})}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>ПОДПИСАТЬСЯ НА РАССЫЛКУ</Title>
      <Desc>Обновление каталога товаров. Акции и спецпредложения</Desc>
      <InputContainer>
        <Input placeholder="EMAIL" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
