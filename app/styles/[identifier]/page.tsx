import { getStyle, getStyles } from "../queries";
import { notFound } from "next/navigation";
import { StyleDisplay } from "../_components/StyleDisplay";
import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/ui/button";
interface StylePageProps {
  params: Promise<{
    identifier: string;
  }>;
}
export async function generateStaticParams() {
  return (await getStyles()).map(({ identifier }) => ({ identifier }));
}

export async function generateMetadata({ params }: StylePageProps) {
  const { identifier } = await params;
  return {
    title: `LNK Style: ${identifier}`,
  };
}

export default async function StylePage({ params }: StylePageProps) {
  const { identifier } = await params;
  const style = await getStyle(identifier);
  if (!style) return notFound();
  return (
    <div className="relative">
      <TopBar
        breadcrumbs={[
          { title: "Styles", url: "/styles" },
          {
            title: `${style.identifier} - ${style.name}`,
            url: `/styles/${style.identifier}`,
          },
        ]}
      >
        <Button>Edit</Button>
      </TopBar>
      <StyleDisplay className="w-full" style={style} />;
    </div>
  );
}
