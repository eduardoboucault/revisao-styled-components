import React from "react";
import { GlobalStyled } from "./Componentes/GlobalStyled/GlobalStyled";
import { TelaInteira } from "./Componentes/TelaInteira/TelaInteira";
import { Header } from "./Componentes/Header/Header";
import { Footer } from "./Componentes/Footer/Footer";
import { Main } from "./Componentes/Main/Main";
import { CardVideo } from "./Componentes/CardVideo/CardVideo";

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
      <GlobalStyled />
      <TelaInteira>
        <Header />
        <Main>
          <CardVideo
            titulo={card1.titulo}
            imagemDoVideo={card1.imagemDoVideo}
            texto={card1.textoAlternativo}
            funcao={reproduzVideo}
          />
        </Main>
        <Footer />
      </TelaInteira>
    </div>
  );
}
