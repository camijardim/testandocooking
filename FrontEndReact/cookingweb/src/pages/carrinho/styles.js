import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;
  margin: 32px;
  /* background-color: white; */
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  /* border-radius: 8px; */
  border: 1px solid var(--ipt-text);
  background-color: red;
  color: black;
`;

export const ProductImg = styled.img`
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  grid-gap: 12px;
  color: white;
`;
