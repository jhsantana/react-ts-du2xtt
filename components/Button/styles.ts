import styled, { css } from "styled-components";

import ButtonProps from ".";

export type WrapperProps = {
  hasIcon: boolean;
  color: "transparent" | "red";
};

const wrapperModifiers = {
  transparent: () => css`
    background-color: transparent;
  `,
  red: () => css`
    background-color: red;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: 0.2rem;
      }
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ color, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    height: 1.5rem;
    ${!!color && wrapperModifiers[color]};
    ${!!hasIcon && wrapperModifiers.withIcon()};
  `}
`;
