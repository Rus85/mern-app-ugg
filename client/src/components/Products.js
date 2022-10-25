import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethods";


const Container = styled.div`
  /* display: flex;
  padding: 5px;
  flex-wrap: wrap;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  ${mobile({gridTemplateColumns: '1fr'})}
`;


const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);


  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);


  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Container>
        {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item._id} title={item.title} />
            ))
          : products
              .slice(0, 10)
              .map((item) => <Product item={item} key={item._id} title={item.title}/>)}
      </Container>
    </>
  );
};

export default Products;
