interface Props {
  href: string,
  label: string
}

export default function NavLink({href, label}: Props) {
  return (
    <li className="w-full" >
      <a 
        className="
        bg-slate-600
        block
        border-slate-600
        border-2
        font-bold
        font
        rounded-md
        p-4
        shadow-sm
        text-center
        text
        text-2xl
        uppercase
        w-full
        hover:bg-slate-900
        hover:text-white
        hover:border-slate-900" 
        
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
