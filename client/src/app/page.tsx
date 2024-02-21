import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-around p-24">
      <div className=" text-neutral-300 flex flex-col">
        <h1 className="text-8xl font-light">BarCart</h1>
        <h2 className="font-extralight w-full text-2xl text-center">
          Home bar inventory assistance
        </h2>
      </div>
    </main>
  );
}
