import { TopBar } from "@/components/TopBar/TopBar";
//import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <TopBar breadcrumbs={[{ title: "Home" }]}></TopBar>

      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h4>McBeer</h4>
        </main>
      </div>
    </div>
  );
}
