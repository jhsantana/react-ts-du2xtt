import React from "react";
import Button from "../Button";
import * as S from "./styles";
import { FiTrash2 } from "react-icons/fi";

export type PersonagemProps = {
  onClick?: () => void;
  name: string;
  eye_color: string;
};

const Personagem = ({ name, eye_color, onClick }: PersonagemProps) => {
  return (
    <S.Wrapper>
      <S.Name className={`text-${eye_color}`}>{name}</S.Name>
      <Button
        color="transparent"
        icon={<FiTrash2 color="red" size={20} />}
        onClick={onClick}
      />
    </S.Wrapper>
  );
};
export default Personagem;
