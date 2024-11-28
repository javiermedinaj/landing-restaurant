import { loadData, saveData } from '../utils/fileHandler.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let dishes = loadData('dishes.json');

export const getDishes = (req, res) => {
  dishes = loadData('dishes.json');
  res.send(dishes);
};

export const createDish = (req, res) => {
  const dish = {
    id: dishes.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.file.filename
  };
  dishes.push(dish);
  saveData('dishes.json', dishes);
  res.status(201).send(dish);
};

export const updateDish = async (req, res) => {
  const id = parseInt(req.params.id);
  const index = dishes.findIndex(dish => dish.id === id);
  
  if (index === -1) {
    return res.status(404).send('Dish not found');
  }

  const oldDish = dishes[index];
  const updatedDish = {
    ...oldDish,
    name: req.body.name || oldDish.name,
    description: req.body.description || oldDish.description,
    price: req.body.price || oldDish.price,
  };

  if (req.file) {
    if (fs.existsSync(join(__dirname, '..', 'uploads', oldDish.image))) {
      fs.unlinkSync(join(__dirname, '..', 'uploads', oldDish.image));
    }
    updatedDish.image = req.file.filename; 
  }

  dishes[index] = updatedDish;
  saveData('dishes.json', dishes);
  res.send(updatedDish);
};

export const deleteDish = async (req, res) => {
  const id = parseInt(req.params.id);
  const index = dishes.findIndex(dish => dish.id === id);
  
  if (index === -1) {
    return res.status(404).send('Dish not found');
  }

  const dish = dishes[index];
  
  if (fs.existsSync(join(__dirname, '..', 'uploads', dish.image))) {
    fs.unlinkSync(join(__dirname, '..', 'uploads', dish.image));
  }

  dishes.splice(index, 1);
  saveData('dishes.json', dishes);
  res.status(200).send({ message: 'Dish deleted successfully' });
};