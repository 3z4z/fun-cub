import { fontBn } from "@/app/layout";
import { container } from "@/utils/classNames";
import Image from "next/image";
import heroImg from "../../../public/hero.png";
import Link from "next/link";

export default function BannerComponent() {
  return (
    <section
      className={`${container} grid grid-cols-2 gap-10 items-center pt-16`}
    >
      <main>
        <header className={fontBn.className}>
          <h1 className="text-5xl font-bold">
            খেলায় শেখা, <span className="text-primary">শিখে বেড়ে ওঠা</span>
          </h1>
          <p className="mt-6 text-neutral/70 text-xl leading-8">
            আপনার সন্তানের বয়স অনুযায়ী নিরাপদ ও শিক্ষামূলক খেলনার <br />{" "}
            নির্ভরযোগ্য অনলাইন স্টোর।
          </p>
        </header>
        <Link
          href={"/shop"}
          className="btn btn-primary rounded-full h-auto py-3 px-12 mt-10"
        >
          Shop Now
        </Link>
      </main>
      <div className="w-full min-h-114 flex items-center justify-center">
        <Image
          src={heroImg}
          fill
          alt=""
          className="object-contain relative! drop-shadow-lg drop-shadow-neutral/50"
        />
      </div>
    </section>
  );
}
