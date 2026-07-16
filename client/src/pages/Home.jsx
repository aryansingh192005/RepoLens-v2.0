import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
}