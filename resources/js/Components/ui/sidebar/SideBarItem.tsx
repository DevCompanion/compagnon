import { type ReactElement } from 'react';

interface SideBarItemProps {
  nameItem: string;
  icon?: ReactElement;
  url?: string;
}

export function emptyIcon(): ReactElement {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"></svg>;
}

export default function SideBarItem({ icon, nameItem, url = '#' }: SideBarItemProps) {
  let DisplayIcon: ReactElement = emptyIcon();
  if (icon) {
    DisplayIcon = icon;
  }

  return (
    <>
      <li>
        <a
          href={url}
          className="flex items-center rounded-lg px-3 py-3 text-slate-800 transition motion-safe:hover hover:font-medium hover:text-brown-300 hover:bg-brown-50 dark:text-white dark:hover:bg-brown-50"
        >
          {DisplayIcon}
          <span className="ml-3 flex-1 whitespace-nowrap">{nameItem}</span>
        </a>
      </li>
    </>
  );
}
