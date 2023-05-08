import React from "react";
import { MenuItem } from "../types";
import Mainview from "./MainView";
type PageProps = {
  item: MenuItem;
};
export default function MenuView({ item }: PageProps) {
  // const { link, target = "_self" } = item;
  const ShowSubmenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.currentTarget.parentElement?.classList.toggle("show");
    if ("onClick" in item && item.onClick) {
      item.onClick(e);
    }
  };
  return (
    <div className="menucontent">
      <a href={"#"} className="menuitem" onClick={ShowSubmenu}>
        {item.icon && (
          <span className="titleicon">
            <>
              {typeof item.icon === "string" ? (
                <i className={item.icon} />
              ) : (
                item.icon
              )}
            </>
          </span>
        )}
        <span className="menutitle">{item.title}</span>
        {"submenus" in item && item.submenus && item.submenus.length > 0 ? (
          <span className="righticon">&#8680;</span>
        ) : (
          <></>
        )}
      </a>
      <div className="submenucontainer">
        {"submenus" in item &&
          item.submenus &&
          item.submenus.length > 0 &&
          item.submenus?.map((subitem: MenuItem, subindex: number) => {
            return <Mainview item={subitem} key={subindex} />;
          })}
      </div>
    </div>
  );
}
