'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-[#f0f4f8]">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 bg-white rounded-tl-3xl shadow-inner">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
