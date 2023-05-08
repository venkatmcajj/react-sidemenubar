import { ReactElement } from "react";

export interface Common {
  title: string;
  icon?: HTMLElement | string | Element | ReactElement;
}

export interface Section extends Common {
  section: boolean;
}
export interface HLink extends Common {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface SubMenu extends Common {
  submenus: Array<MenuItem>;
}

export type MenuItem = Section | HLink | SubMenu | Common;
export type Menus = {
  menus: Array<MenuItem>;
  activeColor: string;
  activeBg: string;
  bg: string;
  color: string;
  menubg: string;
  menuborder: number;
};
