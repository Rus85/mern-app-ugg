import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Скидка 30% на новую коллекцию</Container>;
};

export default Announcement;
