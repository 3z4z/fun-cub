"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ to, active, children, className }) {
  const pathName = usePathname();
  return (
    <Link
      href={to}
      className={`transition-all ${className && className.trim()} ${
        pathName.startsWith(to) && active && active.trim()
      }`}
    >
      {children}
    </Link>
  );
}
