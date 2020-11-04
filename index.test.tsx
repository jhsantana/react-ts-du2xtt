import React from "react";
import { render, screen } from "@testing-library/react";

import Personagem from "./components/Personagem";

import dummyData from "./components/Personagem/mock";

describe("<Personagem />", () => {
  it("should render the name of personagem", () => {
    dummyData.map((data, index) => {
      render(<Personagem {...data} key={index} />);

      expect(
        screen.getByRole("heading", { name: data.name })
      ).toBeInTheDocument();
    });
  });
});
