import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
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
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
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
  margin-bottom: 10px;
  &:disabled {
    color: black;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {username, password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>Войти в личный кабинет</Title>
        <Form>
          <Input placeholder="ник" onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="пароль" onChange={(e) => setPassword(e.target.value)}/>
          <Button disabled={isFetching} onClick={handleClick}>Войти</Button>
          {error && <Error>Что-то пошло не так...</Error>}
          <Link>Не помните пароль?</Link>
          <Link>Создать аккаунт</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
