import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-6">Stay updated with our latest dishes and special offers</p>
          <form className="flex gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
            />
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 font-medium">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Great Taste</h3>
            <p className="text-gray-400 leading-relaxed">
              Bringing the best flavors to your table since 2010. Experience fine dining at its best.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

    
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <FaMapMarkerAlt className="text-yellow-500 group-hover:scale-110 transition-transform" size={16} />
                <span className="group-hover:text-yellow-500 transition-colors">123 Restaurant St. City, State 12345</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <FaPhone className="text-yellow-500 group-hover:scale-110 transition-transform" size={16} />
                <span className="group-hover:text-yellow-500 transition-colors">(555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <FaEnvelope className="text-yellow-500 group-hover:scale-110 transition-transform" size={16} />
                <span className="group-hover:text-yellow-500 transition-colors">info@greattaste.com</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Awards & Recognition</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <FaAward className="text-yellow-500 group-hover:scale-110 transition-transform" size={16} />
                <span className="group-hover:text-yellow-500 transition-colors">Michelin Star 2023</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <FaAward className="text-yellow-500 group-hover:scale-110 transition-transform" size={16} />
                <span className="group-hover:text-yellow-500 transition-colors">Best Fine Dining 2022</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <FaAward className="text-yellow-500 group-hover:scale-110 transition-transform" size={16} />
                <span className="group-hover:text-yellow-500 transition-colors">Chef of the Year 2021</span>
              </li>
            </ul>
          </div>
        </div>

  
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Great Taste. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;