import NavLink from "~/app/_components/nav-link";
import "~/styles/globalicons.css";

/* TYPES */
interface NavItemsProps {
  label: string;
  href: string;
}

export default function Header() {
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
      className="flex flex-col justify-between bg-slate-700 p-4 shadow-lg md:flex-row"
    >
      <span className="material-symbols-outlined self-center !text-6xl">
        check_box
      </span>
      <div className="self-center">
        <p id="appTitle" className="text-center">
          TodoApp
        </p>
      </div>
      <div id="navWrap" className="flex flex-row p-4">
        <span className="material-symbols-outlined !text-6xl">menu</span>

        <ul className="flex w-full flex-col gap-4 md:flex-row">
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
