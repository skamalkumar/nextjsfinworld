export default function HeroSection() {
    return (
      <section className="flex justify-between items-center bg-blue-800 text-white py-16 px-8 rounded-md mx-4 my-2">
        <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-4">The future of wealth management</h1>
        <p className="mb-6">Access expert financial advice and investment solutions, powered by cutting-edge technology, at a fraction of the cost.</p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-400">
            Find Out More
          </button>
        </div>
        <div className="w-1/2">
          <img src="/" alt="Wealth management dashboard" className="rounded-lg shadow-lg" />
        </div>
      </section>
    );
  }
  