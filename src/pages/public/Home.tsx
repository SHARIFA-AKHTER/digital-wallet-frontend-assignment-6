// src/pages/public/Home.tsx

import { Button } from "@/components/ui/button"; // Shadcn button
import { Card } from "@/components/ui/Card";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";



const features = [
  { title: "Fast Transactions", description: "Send and receive money instantly." },
  { title: "Secure Wallet", description: "All your funds are protected with encryption." },
  { title: "Multi-role Access", description: "User, Agent, and Admin dashboards." },
  { title: "Transaction History", description: "Track all transactions easily." },
];

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Welcome to Digital Wallet
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Securely store, send, and receive money anytime, anywhere. Fast, reliable, and easy to use for users, agents, and admins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Get Started</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <About></About>
      <Features></Features>
      <Pricing></Pricing>

    </div>
  );
};

export default Home;
