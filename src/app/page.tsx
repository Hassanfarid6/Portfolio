import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      {/* <h1 className="text-white">Portfolio website</h1> */}
      <Hero />
    </div>
  );
}
