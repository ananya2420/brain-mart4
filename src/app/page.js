import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SignupSection from "./components/SignUp";
import Footer from "./components/Footer";
import OurProducts from "./components/OurProducts";

export default function Home() {
  return (
    <div>
     <Navbar />
     <Header />
    <OurProducts />
     <SignupSection />
     <Footer />
    </div>
  );
}
