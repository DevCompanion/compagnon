import { type PropsWithChildren } from 'react';
import SideBarApp from '@/Components/app/SideBarApp';
import TopBarApp from '@/Components/app/TopBarApp';

export default function DefaultLayout({
  children,
  showSidebar = true,
  name,
}: PropsWithChildren<{ showSidebar?: boolean; name?: string }>) {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row h-screen w-screen bg-white dark:bg-slate-900">
      <SideBarApp showSidebar={showSidebar} />
      <div className="min-h-screen w-full bg-white">
        <TopBarApp name={name} showSidebar={showSidebar} />
        {children}
      </div>
    </div>
  );
}
