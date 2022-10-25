import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { categories } from "../data";
import { motion } from "framer-motion";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 30px;
  font-weight: 500;
  ${mobile({fontSize: '25px'})}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const catTitles = categories.map((item, id) => {
    return item.title
  });

  const catTitle = catTitles.map((catName) => {
    return catName
  })


  return (
    <motion.div
    initial={{ opacity: 0, scaleX: 0.5 }}
    animate={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 0.5 }}
  >
   <Container>
      <Announcement />
      <Navbar />
           {/* <Title>{catTitle}</Title>  */}
           {
            cat === 'women' ? <Title>{catTitle[0]}</Title> : 
            cat === 'man' ? <Title>{catTitle[1]}</Title> : 
            cat === 'kids' ? <Title>{catTitle[2]}</Title> : cat
            }
      <FilterContainer>
        <Filter>
          <FilterText>Фильтры</FilterText>
          <Select name="colorRu" onChange={handleFilters}>
            <Option disabled>Цвет</Option>
            <Option>все цвета</Option>
            {/* <Option>песочный</Option> */}
            <Option>чёрный</Option>
            <Option>серый</Option>
            <Option>синий</Option>
            <Option>ореховый</Option>
            <Option>жёлтый</Option>
            <Option>белый</Option>
            <Option>шоколадный</Option>
          </Select>
          <Select name="height" onChange={handleFilters}>
            <Option disabled>Высота</Option>
            <Option>все модели</Option>
            <Option>тапочки</Option>
            <Option>мокасины</Option>
            <Option>мини</Option>
            <Option>средние</Option>
            <Option>высокие</Option>
            <Option>ботинки</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Сортировка</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            {/* <Option value='newest'>Новинки</Option> */}
            <Option disabled>Цена</Option>
            <Option value="asc">Сначала дешёвые</Option>
            <Option value="desc">Сначала дорогие</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
    </motion.div>
  );
};

export default ProductList;
