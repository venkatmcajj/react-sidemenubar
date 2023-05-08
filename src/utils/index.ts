export const Toggle = () => {
  const element = document.getElementById("reactmenucontainer");
  const valitem = element?.classList.contains("sidenavmin");
  valitem
    ? element?.classList.remove("sidenavmin")
    : element?.classList.add("sidenavmin");
  return !valitem;
};
