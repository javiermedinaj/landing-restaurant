import jwt from 'jsonwebtoken';
import { loadData, saveData } from '../utils/fileHandler.js';

const secretKey = 'your_secret_key';
let users = loadData('users.json');

// console.log('Initial users:', users); // Debug

export const login = (req, res) => {
  const { email, password } = req.body;
  // console.log('Login attempt:', { email, password }); // Debug
  // console.log('Available users:', users); // Debug
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    res.send({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
};

export const register = (req, res) => {
  const { email, password } = req.body;
  
  if (users.some(u => u.email === email)) {
    return res.status(400).send('Email already exists');
  }

  const newUser = {
    id: users.length + 1,
    email,
    password
  };

  users.push(newUser);
  saveData('users.json', users);

  const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '1h' });
  res.status(201).send({ token });
};