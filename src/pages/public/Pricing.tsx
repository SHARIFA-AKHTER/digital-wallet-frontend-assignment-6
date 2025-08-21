// src/pages/public/Pricing.tsx

import { Button } from "@/components/ui/button";
import Card from "@/components/ui/Card";

const plans = [
  {
    name: "Basic",
    price: "$0",
    features: ["Send & Receive Money", "Basic Wallet", "Transaction History"],
  },
  {
    name: "Pro",
    price: "$9.99/mo",
    features: ["Advanced Wallet", "Priority Support", "Multi-Device Access"],
  },
  {
    name: "Premium",
    price: "$19.99/mo",
    features: ["Unlimited Transactions", "Dedicated Agent Support", "Enhanced Security"],
  },
];

const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Pricing Plans</h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg lg:text-xl">
          Choose the plan that best fits your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {plans.map((plan, idx) => (
          <Card key={idx} className="p-6 sm:p-8 hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-3xl sm:text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="before:content-['✔'] before:text-blue-600 before:mr-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 mt-auto">
              Choose Plan
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
