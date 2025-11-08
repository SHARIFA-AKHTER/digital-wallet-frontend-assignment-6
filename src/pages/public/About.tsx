import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/Card";

interface IFeature {
  _id: string;
  title: string;
  description: string;
}

interface ITeamMember {
  _id: string;
  name: string;
  role: string;
  photo: string;
}

interface IAboutData {
  _id: string;
  title: string;
  features: IFeature[];
  team: ITeamMember[];
}

const About = () => {
  const [data, setData] = useState<IAboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get("https://digital-wallet-api-backend.vercel.app/api/v1/about");
        setData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) return <p className="text-center py-6">Loading...</p>;

  if (!data) return <p className="text-center py-6">No data available.</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
        {data.title}
      </h1>

      {/* Features */}
      {data.features && data.features.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature) => (
            <Card key={feature._id}>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-4">No features available.</p>
      )}

      {/* Team */}
      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">Our Team</h2>
      {data.team && data.team.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.team.map((member) => (
            <Card key={member._id} className="flex items-center space-x-4 p-4">
              <img
                src={member.photo}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-4">
          No team members available.
        </p>
      )}
    </section>
  );
};

export default About;
