import { CardVideoStyled, ImgStyled, H4Styled } from "./CardVideoStyled";

export const CardVideo = (props) => {
  return (
    <CardVideoStyled onClick={props.funcao}>
      <ImgStyled src={props.imagemDoVideo} alt={props.texto} />
      <H4Styled>{props.titulo}</H4Styled>
    </CardVideoStyled>
  );
};
