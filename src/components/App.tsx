import React from "react";
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
  return (
    <>
      <style>{`
        .sidenavmin.menucontainer {
          opacity:1;
          transform-origin: center left;
          animation: slideLeft 300ms 300ms ease-in-out forwards;
        }
        .menucontainer {
          transform-origin: left center;
          animation: slideRight 300ms 300ms ease-in-out forwards;
        }
        .menucontainer {
          position: absolute;
          top: 0;
          left:0;
          right: 0;
          opacity:0;
          height:100vh;
          background:#00000072;          
        }
        
        .menu{
          background : ${menubg};
          overflow-y: scroll;
          scroll-behavior:smooth;
          height:100%;
          width:75%;
          position: absolute;
          top: 0;
          left:0;
          right: 0;
          z-index: 2;
        }
        .menubg{
          height:100%;
          width:100%;
        }
        .menuitem {
          min-height: 40px;
          padding: 5px;
          display:flex;
          align-items:center;
          background:${bg};
          color:${color};
          padding-left: 10px;
          border-radius:${menuborder}px;
        }
        .sectionitem {
          min-height: 25px;
          padding: 5px;
          display:flex;
          align-items:center;
          background:${bg};
          color:${color};
        }
        .menuitem:hover, .menuitem.active, .menuitem:active, .menuitem:focus {
          color:${activeColor};
          background:${activeBg};
        }
        .menutitle {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0px 10px;
        }
        
        .titleicon {
          font-size : 20px;
        }
        .righticon {
          font-size : 20px;
        }
        .sectiontitle {
          width: 100%;
          font-weight:bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .menucontent.show > .menuitem > .righticon {
          transform : rotate(90deg)
        }
        .menucontainer a{
          text-decoration:none;
        }
        .submenucontainer {
          padding-left:10px;
        }
        .submenucontainer > div {
          display:none;
          opacity:0;
        }
        .menucontent.show > .submenucontainer > div {          
          display:block;          
        }
        .menucontent.show .submenucontainer .menucontent {          
          transform-origin: left center;
          animation: slideDown 300ms 300ms ease-in-out forwards;
        }
        
        @media (min-width: 992px) {
          .menucontainer {
            max-width: 25%;
          }
          .menu {
            width: 100%;
          }
        }
        @keyframes slideDown {
          0% { 
            opacity: 0;
            transform: translateY(-60px);
          }
        
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideRight {
          0% { 
            opacity: 0;
            width:0;
            transform: translateX(-25%);
          }
        
          100% {
            opacity: 1;
            width:100%;
            transform: translateX(0);
          }
        }
        @keyframes slideLeft {
          0% { 
            opacity: 1;
            width:100%;
            transform: translateX(0);
          }
        
          100% {
            opacity: 0;
            width:0;
            transform: translateX(-25%);
          }
        }
        .menu::-webkit-scrollbar {
          width: 2px;
        }
        .menu::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        .menu::-webkit-scrollbar-thumb {
          background: #888; 
        }
        .menu::-webkit-scrollbar-thumb:hover {
          background: #555; 
        }
      `}</style>
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
