"use client";

import { LucideXOctagon } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="py-20 text-center">
      <div className="text-error">
        <LucideXOctagon className="size-16 mx-auto" />
        <p className="text-2xl mt-2">500: Something went wrong!</p>
      </div>
      <Link href={"/"} className="btn btn-neutral mt-12">
        Go to Home
      </Link>
    </div>
  );
}
