import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote: "The best dining experience I've had in years. The attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Food Blogger",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "Every dish tells a story. The flavors are absolutely incredible.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      quote: "Great Taste has become our family's favorite restaurant.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;