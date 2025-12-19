"use client";

import { LucideShoppingCart } from "lucide-react";
import NavLink from "../shared/NavLink";
export default function NavbarComponent() {
  const navLinks = [
    { path: "/shop", title: "Shop" },
    { path: "/blogs", title: "Blogs" },
    { path: "/about", title: "About us" },
    { path: "/contact", title: "Contact" },
  ];
  return (
    <div className="flex gap-12 items-center">
      <nav className="flex gap-8">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            active={"text-primary font-semibold"}
            to={link.path}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
      <div className="flex gap-2">
        <button className="btn px-2.5 rounded-lg btn-secondary btn-soft">
          <LucideShoppingCart className="w-5 h-5" />
        </button>
        <button className="btn btn-outline btn-primary">Login</button>
        <button className="btn btn-primary">Register</button>
      </div>
    </div>
  );
}
