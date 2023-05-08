export const Toggle = () => {
  const element = document.getElementById("reactmenucontainer");
  let val = element?.classList.contains("sidenavmin");
  val
    ? element?.classList.remove("sidenavmin")
    : element?.classList.add("sidenavmin");
  return !val;
};
