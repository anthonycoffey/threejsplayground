import { MainMenu } from "@/components/MainMenu";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto">
        <div className="flex align-center items-center justify-between p-4">
          <h1 className="text-green-400">Hello, World!</h1>
          <MainMenu />
        </div>
        <div className="flex align-center justify-center border-2 border-green-400 px-4 py-6 my-4">
          Welcome! My name is Anthony Coffey, and I am a full stack software
          engineer in Austin, Texas
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </main>
  );
}
