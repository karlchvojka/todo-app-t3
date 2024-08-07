"use client"
import { useState, useEffect, useRef } from "react";

import NavLink from "~/app/_components/nav-link";
import "~/styles/globalicons.css";

/* TYPES */
interface NavItemsProps {
  label: string;
  href: string;
}

export default function Header() {
  // State
  const [menuDisplay, setMenuDisplay] = useState(false);

  // Onload variables
  const initialRef: any = null;
  const ref = useRef(initialRef);
  
  // sets menuDisplay to opposite
  const operateMenu = () => {    
    if(!menuDisplay) {
      setMenuDisplay(true)
    } else {
      setMenuDisplay(false)
    }
  }

  // UseEffect that tracks mouseDown (clicks)
  useEffect(() => {

    // outside click handler
    const handleOutSideClick = (event: { target: any; }) => {
      // if click not on child of ref, & menuDisplay = true
      // Run operateMenu function
      if (!ref.current?.contains(event.target) && menuDisplay) {
        operateMenu()
      }
    };

    // Adds event listner runs handleOutsideClick on click
    window.addEventListener("mousedown", handleOutSideClick);

    // UseEffect Cleanup
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, menuDisplay]);

  const navItems: Array<{
    label: string;
    href: string;
  }> = [
    {
      label: "Todos",
      href: "#",
    },
    {
      label: "Profile",
      href: "#",
    },
    {
      label: "Login",
      href: "#",
    },
    {
      label: "Logout",
      href: "#",
    },
  ];

  return (
    <div
      id="headerWrap"
      className="flex flex-row justify-between bg-black p-2 md:p-4 shadow-lg"
    >
      <div id="marketingWrap" className="flex flex-row w-5/6">
        <span className="w-1/6 material-symbols-outlined self-center !text-5xl text-lime-500 hover:cursor-pointer hover:text-white">
          check_box
        </span>
        <div className="w-5/6 self-center">
          <p id="appTitle" className="text-center text-lime-500 text-3xl">
            TodoApp
          </p>
        </div>
      </div>
      <div id="navWrap" className="w-1/6" ref={ref}>
        <button id="menuButton" className="w-full h-full text-end" onClick={() => operateMenu()}>
          <span id="menuButtSpan" className="!block my-auto mx-0 material-symbols-outlined !text-5xl text-lime-500 hover:cursor-pointer hover:text-white">
            menu
          </span>
        </button>

        <ul id="navList" className={`${menuDisplay ? 'flex' : 'hidden'} bg-black absolute p-2 left-0 md:flex w-full flex-col gap-4 md:flex-row`}>
          {navItems.map((item: NavItemsProps, index) => {
            return (
              <NavLink
                key={item.label + index}
                label={item.label}
                href={item.href}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
