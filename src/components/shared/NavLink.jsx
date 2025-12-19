"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  to = "",
  active = "",
  children,
  className = "",
}) {
  const pathName = usePathname();

  const isActive = pathName ? pathName.startsWith(to) : false;

  return (
    <Link
      href={to}
      className={`transition-all ${className?.trim() || ""} ${
        isActive ? active?.trim() : ""
      }`}
    >
      {children}
    </Link>
  );
}
