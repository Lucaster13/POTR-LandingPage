import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full flex container overflow-x-visible">
      <Nav />
      <Footer />
      {children}
    </div>
  );
}
