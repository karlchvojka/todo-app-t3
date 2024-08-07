interface Props {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: Props) {
  return (
    <li className="w-full">
      <a
        className="inline-block h-14 md:h-auto w-full rounded-md border-0 bg-lime-900 p-3 align-middle text-center text-2xl md:text-xl font-bold uppercase text-white shadow-sm hover:border-slate-900 hover:bg-lime-600 hover:text-black"
        href={href}
      >
        {label}
      </a>
    </li>
  );
}
