import styled from 'styled-components';

export const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 'auto';
  grid-gap: 2rem;
`;

export const RecipesItem = styled.div`
  display: flex;
  justify-content: center;
`;
