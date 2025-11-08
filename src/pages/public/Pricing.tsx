
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/Card";

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
}

const Pricing = () => {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await axios.get("https://digital-wallet-api-backend.vercel.app/api/v1/pricing");
        setPlans(res.data.data);
      } catch (err) {
        console.error("Failed to fetch pricing plans:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPricing();
  }, []);

  const handleChoosePlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  const confirmPlan = () => {
    toast.success(`🎉 You have chosen the ${selectedPlan?.name} plan!`);
    setOpen(false);
  };

  if (loading) return <p className="text-center py-10">Loading pricing plans...</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Toaster */}
      <Toaster position="top-right" />

      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Pricing Plans
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <Card key={i} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4 text-center">{plan.name}</h2>
              <p className="text-4xl font-bold text-indigo-600 mb-6 text-center">
                ${plan.price}/mo
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => handleChoosePlan(plan)}
              >
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Your Choice</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">
            Are you sure you want to select the{" "}
            <span className="font-semibold">{selectedPlan?.name}</span> plan?
          </p>
          <DialogFooter className="flex gap-2 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmPlan}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Pricing;
