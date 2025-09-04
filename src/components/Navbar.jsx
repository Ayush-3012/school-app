"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", icon: <FaHome className="text-2xl"/> },
    { name: "Add School", href: "/addSchool", icon: <FaSchoolCircleCheck className="text-2xl"/> },
  ];

  return (
    <nav className="bg-gradient-to-br from-blue-200 via-purple-300 to-sky-400 text-slate-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          SchoolApp
        </Link>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "text-slate-950 font-semibold border-b-2 border-slate-900"
                  : " hover:scale-110"
              } transition`}
            >
              <span className="max-md:hidden">{link.name}</span>
              <spna className="hidden max-md:block">{link.icon}</spna>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
