import styled from "styled-components";
import {Link} from 'react-router-dom'
import {
  Instagram,
  Telegram,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import { mobile } from "../responsive";
import logo from '../assets/logo/ugg-logo.jpg'


const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: 'column'})}
  background-color: #000;
  color: gray;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  width: 100px;
`;

const Desc = styled.p`
  font-size: 14px;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: 'block'})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: '#000'})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: gray;
  text-decoration-line: none;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.5s;
  }
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo} alt='интернет магазин обуви и аксессуаров UGG'/>
        <Desc>
        Интернет магазин обуви и аксессуаров UGG.<br/>
        Курьерская доставка по России и странам СНГ 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Полезные ссылки</Title>
        <List>
         <ListItem>
          <StyledLink to='/products/women'>
          Женщинам
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/'>
          Главная
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/products/man'>
          Мужчинам
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/cart'>
          Корзина
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/products/kids'>
          Детям
          </StyledLink>
        </ListItem>
      </List>
      </Center>
      <Right>
        <Title>Контакты</Title>
        <ContactItem>
          <Room style={{marginRight: '10px'}}/>
          Москва, Зубовский проезд 3
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: '10px'}}/>
          +7 495 000 00 00
        </ContactItem>
        <ContactItem>
         <MailOutline style={{marginRight: '10px'}}/>
          info@uggiboots.ru
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
