import { type ReactNode } from 'react';

interface SideBarMenuProps {
  children: ReactNode;
}

export default function SideBarList({ children }: SideBarMenuProps) {
  return (
    <>
      <ul className="space-y-2 text-sm">{children}</ul>
    </>
  );
}
