import React from "react";
import { MainStyled } from "./MainStyled";
import { Nav } from "../Nav/Nav";
import { Section } from "../Section/Section";

export const Main = () => {
  return (
    <MainStyled>
      <Nav />
      <Section></Section>
    </MainStyled>
  );
};
