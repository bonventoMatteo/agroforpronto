// app/produtos/calculo/page.tsx
import GardenCalculator from "@/components/pages/gardencalculator";
import Header from "@/components/pages/Header";
import Footer from "@/components/pages/Footer";

export default function Page() {
  return (
    <>
      <main className="pt-20">
        <GardenCalculator />
      </main>
    </>
  );
}