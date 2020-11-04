import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 0.1rem black;
  padding: 0.4rem;

  // parametro medium = '768px'
  ${media.lessThan("medium")`
    justify-content: start;
  `}
`;

export const Name = styled.h1`
  font-size: 1.2rem;
`;

export const Remove = styled.button`
  ${css`
    border: 0;
    border-radius: 50%;
    color: red;
    font-size: 1rem;
    cursor: pointer;

    margin-left: 0.4rem;
  `}
`;
