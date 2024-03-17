import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function NFTsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full flex container">
      <Nav />
      <Footer />
      {children}
    </div>
  );
}
