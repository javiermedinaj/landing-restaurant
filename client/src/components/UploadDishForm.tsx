import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Upload } from 'lucide-react';

interface UploadDishFormProps {
  token: string;
  onSuccess?: () => void;
  dish?: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  } | null;
}

const UploadDishForm = ({ token, onSuccess, dish }: UploadDishFormProps) => {
  const [name, setName] = useState(dish?.name || '');
  const [description, setDescription] = useState(dish?.description || '');
  const [price, setPrice] = useState(dish?.price.toString() || '');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(dish ? `http://localhost:3000/uploads/${dish.image}` : '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (dish) {
      setName(dish.name);
      setDescription(dish.description);
      setPrice(dish.price.toString());
      setPreview(`http://localhost:3000/uploads/${dish.image}`);
    }
  }, [dish]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (dish) {
        await axios.put(`http://localhost:3000/api/dishes/${dish.id}`, formData, {
          headers: {
            Authorization: token,
          },
        });
      } else {
        await axios.post('http://localhost:3000/api/dishes', formData, {
          headers: {
            Authorization: token,
          },
        });
      }
      onSuccess?.();
      setLoading(false);
    } catch (error) {
      alert('Failed to upload dish');
      setLoading(false);
    }
  };

  return (
   <div className="pt-4">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{dish ? 'Edit Dish' : 'Add New Dish'}</h2>
        <button
          type="button"
          onClick={() => onSuccess?.()}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            {preview ? (
              <div className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-64 rounded"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setPreview('');
                  }}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-500 hover:text-yellow-600">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        {loading ? 'Uploading...' : dish ? 'Update Dish' : 'Upload Dish'}
      </button>
    </form>
   </div>
  );
};

export default UploadDishForm;