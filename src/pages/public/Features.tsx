
const features = [
  { title: "Fast Transactions", description: "Send and receive money instantly." },
  { title: "Secure Wallet", description: "All your funds are protected with encryption." },
  { title: "Multi-role Access", description: "User, Agent, and Admin dashboards." },
  { title: "Transaction History", description: "Track all transactions easily." },
];

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
