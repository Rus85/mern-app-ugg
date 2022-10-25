import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.heckhaus.biz/wp-content/uploads/2016/12/Bestof182d-1200x835.jpg")
      center/cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 16px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Создать аккаунт</Title>
        <Form>
          <Input placeholder="имя" />
          <Input placeholder="фамилия" />
          <Input placeholder="ник" />
          <Input placeholder="email" />
          <Input placeholder="пароль" />
          <Input placeholder="подтвердить пароль" />
          <Agreement>
            Заполнив форму Вы даёте согласие на обработку персональных данных
          </Agreement>
          <Button>Создать</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
