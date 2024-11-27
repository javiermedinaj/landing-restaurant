import React, { useState } from 'react';
import axios from 'axios';

const UploadDishForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.post('http://localhost:3000/dishes', formData);
            alert('Dish uploaded successfully');
        } catch (error) {
            alert('Failed to upload dish');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            />
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadDishForm;