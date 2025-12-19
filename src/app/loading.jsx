import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="absolute top-0 left-0 w-full h-dvh bg-base-100 flex items-center justify-center">
      <div className="w-50">
        <Image
          src={"/loading.gif"}
          unoptimized
          fill
          className="relative!"
          alt=""
        />
      </div>
    </div>
  );
}
