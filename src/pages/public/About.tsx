const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
        About Digital Wallet
      </h1>

      {/* Intro */}
      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
        Our <span className="font-semibold">Digital Wallet</span> platform
        is designed to make your financial transactions effortless and secure. 
        With roles for <span className="font-semibold">Users, Agents,</span> and 
        <span className="font-semibold"> Admins</span>, we provide a complete solution 
        for online money management.
      </p>

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-3">💳 Store Money Securely</h3>
          <p className="text-gray-600">
            Safely keep your funds with our advanced encryption and authentication system.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-3">⚡ Fast Transactions</h3>
          <p className="text-gray-600">
            Add, withdraw, or send money instantly with our seamless transaction process.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-3">🛡️ Role-Based Access</h3>
          <p className="text-gray-600">
            Different roles for Users, Agents, and Admins ensure smooth and secure operations.
          </p>
        </div>
      </div>

      {/* Closing */}
      <p className="text-base sm:text-lg lg:text-xl text-gray-700 mt-10 text-center max-w-3xl mx-auto">
        We prioritize <span className="font-semibold">security, speed,</span> and 
        <span className="font-semibold"> ease-of-use</span>, ensuring all your transactions are 
        fast, safe, and traceable.
      </p>
    </section>
  );
};

export default About;

