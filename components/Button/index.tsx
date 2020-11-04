import React from "react";
import * as S from "./styles";

export type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  color?: "transparent" | "red";
  icon?: React.ReactNode;
};

const Button = ({
  children,
  color = "transparent",
  icon,
  onClick
}: ButtonProps) => {
  return (
    <S.Wrapper color={color} hasIcon={!!icon} onClick={onClick}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};
export default Button;
