import { useEffect, useState } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';

const FeaturedDish = () => {
  const [dishes, setDishes] = useState<{ id: number; name: string; description: string; image: string; price: number }[]>([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await axios.get('http://localhost:3000/api/dishes');
      setDishes(response.data);
    };
    fetchDishes();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div 
              key={dish.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
                <img
                  src={`http://localhost:3000/uploads/${dish.image}`}
                  alt={dish.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => console.error('Error loading image:', e)}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-yellow-500">
                    ${dish.price}
                  </div>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm">
                    Order Now
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Available
                  </div>
                  <div>•</div>
                  <div>Free Delivery</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;