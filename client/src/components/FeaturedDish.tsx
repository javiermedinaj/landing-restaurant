import React from 'react';

const FeaturedDish = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Dish of the week</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Featured dish"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Steak with vegetables</h3>
            <p className="text-gray-600 mb-6">
              Our prime cut steak is carefully selected and cooked to perfection, 
              served with seasonal vegetables and our signature herb butter.
            </p>
            <div className="text-2xl font-bold text-yellow-500">$34.70</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;