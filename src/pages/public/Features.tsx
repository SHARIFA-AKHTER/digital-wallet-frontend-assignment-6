
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/Card";


interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await axios.get("https://digital-wallet-api-backend.vercel.app/v1/about");
        setFeatures(res.data.data.features || []);
      } catch (err) {
        console.error("Failed to fetch features:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return <div className="text-center py-6 text-gray-600">Loading features...</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Features of Digital Wallet
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <Card key={i} className="p-6 shadow-md rounded-2xl hover:shadow-lg transition">
            <CardContent>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
