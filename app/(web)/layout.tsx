import NavBar from "@/components/NavBar";
import Footer from "./_components/footer";

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-auto">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
