import React from "react";
import { HeaderStyled } from "./HeaderStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>Oi eu moro no header!!!</h1>
      <input type="text" placeholder="Oi meu nome é busca!" id="campoDeBusca" />
    </HeaderStyled>
  );
};
