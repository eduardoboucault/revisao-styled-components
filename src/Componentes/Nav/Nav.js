import React from "react";
import { NavStyled, LiStyled } from "./NavStyled";

export const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <LiStyled>Início</LiStyled>
        <LiStyled>Em alta</LiStyled>
        <LiStyled>Inscrições</LiStyled>
        <hr />
        <LiStyled>Originais</LiStyled>
        <LiStyled>Histórico</LiStyled>
      </ul>
    </NavStyled>
  );
};
