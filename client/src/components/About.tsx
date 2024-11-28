
const About = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Great Taste has been serving exceptional cuisine for over a decade. 
              Our passion for food and commitment to quality has made us a favorite destination for food lovers.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-500">12+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-500">50k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-3xl font-bold text-yellow-500">100+</div>
                <div className="text-sm text-gray-600">Unique Dishes</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf" 
              alt="Restaurant interior" 
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
              alt="Our kitchen" 
              className="rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;