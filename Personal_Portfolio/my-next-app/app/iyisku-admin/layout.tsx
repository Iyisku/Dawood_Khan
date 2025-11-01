'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  FiHome,
  FiUser, 
  FiBriefcase, 
  FiFileText, 
  FiAward,
  FiMail,
  FiLogOut
} from 'react-icons/fi';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/iyisku-admin/login');
  };

  const menuItems = [
    { href: '/iyisku-admin', icon: <FiHome size={20} />, label: 'Home' },
    { href: '/iyisku-admin/about', icon: <FiUser size={20} />, label: 'About' },
    { href: '/iyisku-admin/experience', icon: <FiBriefcase size={20} />, label: 'Exp' },
    { href: '/iyisku-admin/projects', icon: <FiFileText size={20} />, label: 'Projects' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-16"> {/* Reduced padding */}
      {/* Main Content */}
      <div className="pb-4">
        {children}
      </div>

      {/* Compact Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-white z-50">
        <div className="flex items-center justify-between px-2 py-2 max-w-md mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 min-w-[50px] ${
                pathname === item.href
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          ))}
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex flex-col items-center p-2 rounded-lg text-gray-400 hover:text-red-400 transition-all duration-200 min-w-[50px]"
            title="Logout"
          >
            <FiLogOut size={20} />
            <span className="text-xs mt-1 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}