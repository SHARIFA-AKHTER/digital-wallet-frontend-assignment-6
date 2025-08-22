
const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-red-100">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 text-center">
        Access Denied
      </h1>
      <p className="text-gray-700 text-center mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-md">
        You do not have permission to view this page. Please contact the administrator if you think this is a mistake.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default Unauthorized;
