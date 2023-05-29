import React, { useEffect } from "react";
import Mainview from "./MainView";
import { MenuItem, Menus } from "../types";
import { Toggle } from "../utils";

const Menu = ({
  menus,
  activeColor,
  bg,
  activeBg,
  color,
  menubg,
  menuborder,
}: Menus) => {
  const ele = document.documentElement;
  useEffect(() => {
    ele.style.setProperty('--activeColor', activeColor);
  }, [activeColor])
  useEffect(() => {
    ele.style.setProperty('--bg', bg);
  }, [bg])
  useEffect(() => {
    ele.style.setProperty('--activeBg', activeBg);
  }, [activeBg])
  useEffect(() => {
    ele.style.setProperty('--color', color);
  }, [color])
  useEffect(() => {
    ele.style.setProperty('--menubg', menubg);
  }, [menubg])
  useEffect(() => {
    ele.style.setProperty('--menuborder', `${menuborder}px`);
  }, [menuborder]);
  return (
    <>
      <div id="reactmenucontainer" className={`menucontainer`}>
        <div
          className="menubg"
          onClick={() => {
            Toggle();
          }}
        ></div>
        <div className="menu">
          {menus.map((item: MenuItem, index: number) => {
            return <Mainview item={item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
