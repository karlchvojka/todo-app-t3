interface Props {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: Props) {
  return (
    <li className="w-full">
      <a
        className="block w-full rounded-md border-0 bg-lime-900 p-2 text-center text-xl font-bold uppercase text-white shadow-sm hover:border-slate-900 hover:bg-lime-600 hover:text-black"
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
