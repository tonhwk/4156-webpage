import React from "react";
import ProfilePicture from "../../Assets/4156400x400.png";

import { Card, Image, H1, Container } from "./Header.styles";

function Header() {
  return (
    <Container>
      <Card>
        <H1>4152</H1>
        <Image src={ProfilePicture}></Image>
      </Card>
    </Container>
  );
}

export default Header;
