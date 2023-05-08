import React, { useEffect, useState } from "react";
import "./app.css";
import { Menu, Toggle } from "react-sidemenubar";
import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Menus = [];
export default function App() {
  const [menuToggled, setMenuToggled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    Toggle();
  }, [menuToggled]);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            display: "flex",
          }}
        >
          <button
            style={{
              padding: 5,
              borderRadius: 10,
              backgroundColor: "red",
              color: "white",
            }}
            onClick={(e) => {
              setMenuToggled(!menuToggled);
            }}
          >
            Toggle
          </button>
        </div>
      </div>
      <Menu
        menus={[
          {
            title: "Home",
            section: true,
          },
          {
            icon: <FaHome />,
            title: "Home",
            submenus: [
              {
                title: "Dashboard 1",
                submenus: [
                  { title: "Dashboard 4" },
                  { title: "Dashboard 5" },
                  { title: "Dashboard 6" },
                ],
              },
              {
                title: "Dashboard 2",
                onClick: (e) => {
                  navigate("/home2");
                },
              },
              {
                title: "Dashboard 3",
                onClick: (e) => {
                  navigate("/home3");
                },
              },
            ],
          },
          {
            title: "Auth",
            section: true,
          },
          {
            icon: <FaSignInAlt />,
            title: "Login",
          },
          {
            icon: <FaUserCheck />,
            title: "Register",
          },
          {
            icon: <FaSignOutAlt />,
            title: "Logout",
          },
        ]}
        bg="transparent"
        activeBg="linear-gradient(45deg, #204520, #74b474)"
        color="black"
        activeColor="white"
        menubg="#efefef"
        menuborder={5}
      />
    </>
  );
}
