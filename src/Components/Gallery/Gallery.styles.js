import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(9, 5vw);
  grid-gap: 0.3rem;

  background-color: black;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
