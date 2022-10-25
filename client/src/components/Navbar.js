import { Search, ShoppingCartOutlined, Phone } from "@mui/icons-material";
import {Badge} from '@mui/material';
import styled from "styled-components";
import {mobile} from '../responsive'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../assets/logo/ugg-logo.jpg'

const Container = styled.div`
height: 60px;
  ${mobile({heigth: '50px'})}
  background-color: black;
`;

const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: '5px 0px'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({display: 'none'})}
`;

const PhoneContainer = styled.div`
  margin-left: 10px;
`

const Logo = styled.div`
  /* font-weight: bold;
  ${mobile({fontSize: '24px'})} */
`;

const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flex: 1, justifyContent: 'center'})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: '14px', 
  marginLeft: '10px'})}
`;

const MenuItemLinks = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({display: 'none'})}
`

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
 
  return (
    <Container>
      <Wrapper>
        <Left>
         <Phone style={{ color: '#fff'}} />
          <PhoneContainer>
            <a style={{textDecoration: 'none', color: '#fff'}} href='tel: +7 495 000 00 00'>+7 495 000 00 00</a>
          </PhoneContainer>
        </Left>
        <Center>
          <Link to='/'>
          <Logo><img style={{width: '90px'}} src={logo} alt="" /></Logo>
          </Link>
        </Center>
        <Right>
          <Link to='/cart'>
          <MenuItem>
          <Badge style={{ color: '#fff'}} badgeContent={quantity} overlap="rectangular">
            <ShoppingCartOutlined style={{fontSize: 35}} />
          </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
