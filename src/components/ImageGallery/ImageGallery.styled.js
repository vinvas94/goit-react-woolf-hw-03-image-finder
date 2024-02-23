import styled from 'styled-components';

const Gallery = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 30px;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
  padding-inline-start: 0;
`;

export { Gallery };
