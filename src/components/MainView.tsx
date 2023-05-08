import React from "react";
import { MenuItem } from "../types";
import SectionView from "./SectionView";
import MenuView from "./MenuView";
type PageProps = {
  item: MenuItem;
};

export default function Mainview({ item }: PageProps) {
  return (
    <>
      {"section" in item && item.section ? (
        <SectionView title={item.title} />
      ) : (
        <MenuView item={item}></MenuView>
      )}
    </>
  );
}
