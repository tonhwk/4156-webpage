import React from "react";

import { Container, Image } from "./Gallery.styles";

import Items from "./Items";
import "./Items.css";

function Gallery() {
  return (
    <Container>
      {Items.map(({ name, format, id }) => (
        <Image src={`./Assets/Gallery/${name}.${format}`} className={id} />
      ))}
    </Container>
  );
}

export default Gallery;
