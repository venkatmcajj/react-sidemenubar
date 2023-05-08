import React from "react";
type PageProps = {
  title: string;
};
export default function SectionView({ title }: PageProps) {
  return (
    <div className="sectionitem">
      <label className="sectiontitle">{title}</label>
    </div>
  );
}
