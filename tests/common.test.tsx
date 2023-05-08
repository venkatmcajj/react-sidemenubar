import * as React from "react";
import { render } from "@testing-library/react";

import "jest-canvas-mock";

import { Menu } from "../src";

describe("Common render", () => {
  it("renders without crashing", () => {
    render(
      <Menu
        menus={[{ title: "Home" }]}
        bg="gray"
        menubg="#000"
        menuborder={5}
        activeBg="#fff"
        activeColor="#000"
        color="#fff"
      />
    );
  });
});
