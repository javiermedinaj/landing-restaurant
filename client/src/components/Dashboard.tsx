import { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Edit, Plus } from 'lucide-react';
import UploadDishForm from './UploadDishForm';
import Modal from './Modal';

const Dashboard = ({ token }: { token: string }) => {
  interface Dish {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }

  const [dishes, setDishes] = useState<Dish[]>([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingDish, setEditingDish] = useState<Dish | null>(null);

  useEffect(() => {
    fetchDishes();
  }, [token]);

  const fetchDishes = async () => {
    const response = await axios.get('http://localhost:3000/api/dishes', {
      headers: { Authorization: token },
    });
    setDishes(response.data);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this dish?')) {
      try {
        await axios.delete(`http://localhost:3000/api/dishes/${id}`, {
          headers: { Authorization: token },
        });
        await fetchDishes();
      } catch (error) {
        alert('Failed to delete dish');
      }
    }
  };

  const handleEdit = (dish: Dish) => {
    setEditingDish(dish);
    setShowUploadForm(true);
  };

  const handleCloseModal = () => {
    setShowUploadForm(false);
    setEditingDish(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button
          onClick={() => {
            setEditingDish(null);
            setShowUploadForm(true);
          }}
          className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
        >
          <Plus size={20} />
          Add New Dish
        </button>
      </div>
      <Modal 
        isOpen={showUploadForm} 
        onClose={handleCloseModal}
        title={editingDish ? "Edit Dish" : "Add New Dish"}
      >
        <UploadDishForm 
          token={token} 
          dish={editingDish}
          onSuccess={() => {
            handleCloseModal();
            fetchDishes();
          }}
        />
      </Modal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img 
                src={`http://localhost:3000/uploads/${dish.image}`} 
                alt={dish.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleDelete(dish.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={() => handleEdit(dish)}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Edit size={16} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
              <p className="text-gray-600 mb-4">{dish.description}</p>
              <div className="text-2xl font-bold text-yellow-500">${dish.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;