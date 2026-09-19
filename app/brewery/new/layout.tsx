import ModalProvider from "@/components/ModalProvider";

export default function BreweryCreatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ModalProvider>{children}</ModalProvider>;
}
