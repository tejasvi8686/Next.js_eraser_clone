import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <Footer />
    </div>
  );
}
