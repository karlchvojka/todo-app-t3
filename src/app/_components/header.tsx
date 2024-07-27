
import NavLink from "~/app/_components/nav-link";

/* TYPES */
interface NavItemsProps {
  label: string,
  href: string
}

export default function Header() {
  const navItems: Array<{
    label: string, href: string
  }> = [
      {
        label: 'Home',
        href: '#' 
      },
      {
        label: 'Todos',
        href: '#' 
      },
      {
        label: 'Profile',
        href: '#' 
      },
      {
        label: 'Login',
        href: '#' 
      },
      {
        label: 'Logout',
        href: '#' 
      },
    ];

  return (
    <div id="headerWrap" className="flex flex-col md:flex-row shadow-lg bg-slate-700">
        <div className="p-4 md:w-1/2">
          <h1 className="text-center">TodoApp</h1>
        </div>
        <div id="navWrap" className="p-4 md:w-3/4">
          <ul className="w-full flex flex-col gap-4 md:flex-row">
            {
              navItems.map((item: NavItemsProps, index) => {
                return (
                  <NavLink 
                    key={item.label + index} 
                    label={item.label} 
                    href={item.href} 
                  />
                )
              })
            }
          </ul>
        </div>
      </div>
  )
}