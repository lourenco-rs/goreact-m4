import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars1.githubusercontent.com/u/13190960?v=4"
        alt="Avatar"
      />
      Rodrigo Lourenço
    </User>
  </Container>
);

export default Header;
