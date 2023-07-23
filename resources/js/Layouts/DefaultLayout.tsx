import { type PropsWithChildren } from 'react';

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row pt-6 sm:pt-0 bg-white">
      {/* <SideBar /> */}

      <div className="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {/* <TopBar name/desc /> */}
        <div className="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
