import styled from "styled-components";
import { categoryDataSet } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

function Categories() {
  return (
    <Container>
      {categoryDataSet.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default Categories;
