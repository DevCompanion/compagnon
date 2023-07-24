import { type ReactElement } from 'react';

interface SideBarItemProps {
  nameItem: string;
  icon: ReactElement;
}

export default function SideBarItem({ icon, nameItem }: SideBarItemProps) {
  return (
    <>
      <li>
        <a
          href="#"
          className="flex items-center rounded-lg px-3 py-3 text-slate-800 transition motion-safe:hover hover:font-medium hover:text-brown-300 hover:bg-brown-50 dark:text-white dark:hover:bg-brown-50"
        >
          {icon}
          <span className="ml-3 flex-1 whitespace-nowrap">{nameItem}</span>
        </a>
      </li>
    </>
  );
}
