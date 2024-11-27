import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The best food & drinks
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Prepared by world-famous chefs
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-md text-lg hover:bg-yellow-600 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;