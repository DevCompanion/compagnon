import { type ReactNode } from 'react';

interface SideBarGroupProps {
  children: ReactNode;
  title: string;
}

export default function SideBarGroup({ children, title }: SideBarGroupProps) {
  return (
    <>
      <div className="flex flex-col justify-center mb-2">
        <h2 className="font-roboto font-medium mb-2">{title}</h2>
        {children}
      </div>
    </>
  );
}
