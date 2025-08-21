// src/pages/public/Home.tsx

import { Button } from "@/components/ui/button"; // Shadcn button
import Card from "@/components/ui/Card";
   // Shadcn card

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

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Features</h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg lg:text-xl">
            Designed to make your digital transactions faster and safer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to start using Digital Wallet?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl">
            Join thousands of users who trust our platform for fast, secure, and easy digital transactions.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg">
            Create Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
