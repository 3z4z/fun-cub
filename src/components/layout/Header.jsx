import Image from "next/image";
import NavbarComponent from "./Navbar";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="px-3 py-4 shadow bg-white flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-4 w-max">
        <figure className="w-13 h-13 relative">
          <Image src={"/logo.png"} alt="logo" fill></Image>
        </figure>
        <div className="flex flex-col">
          <p className="font-bold text-xl">
            <span className="text-primary me-1">Kids</span>
            <span className="text-secondary">Zone</span>
          </p>
          <small className="text-neutral/70">All in shop for kids</small>
        </div>
      </Link>
      <NavbarComponent />
    </header>
  );
}
