import { TopBar } from "@/components/TopBar/TopBar";

export default function Loading() {
  return (
    <div className="relative">
      <TopBar
        breadcrumbs={[
          { title: "Styles", url: "/styles" },
          { title: "Loading...", url: "#" },
        ]}
      ></TopBar>
      <div className="p-4 grid lg:grid-cols-2">Loading Style...</div>
    </div>
  );
  return <div>Loading style...</div>;
}
