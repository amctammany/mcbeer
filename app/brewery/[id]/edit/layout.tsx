import ModalProvider from "@/components/ModalProvider";

export default function BreweryEditorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ModalProvider>{children}</ModalProvider>;
}
