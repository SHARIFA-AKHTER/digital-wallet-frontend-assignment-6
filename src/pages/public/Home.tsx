
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://i.ibb.co.com/TxJFFjsC/degital-1.jpg')]"></div>

        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow">
            Welcome to <span className="text-yellow-300">Digital Wallet</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto text-gray-100">
            Securely store, send, and receive money anytime, anywhere.  
            Fast, reliable, and designed for <span className="font-semibold">Users</span>, 
            <span className="font-semibold"> Agents</span>, and <span className="font-semibold">Admins</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button asChild className="bg-yellow-400 text-indigo-900 font-semibold hover:bg-yellow-300 transition">
              <Link to="/register">Get Started</Link>
            </Button>

            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transition">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Features />
      <Pricing />
      <Contact />
      <FAQ />
    </div>
  );
};

export default Home;
