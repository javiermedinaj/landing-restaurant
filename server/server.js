const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

let dishes = [];

app.get('/', (req, res) => {
  res.send('Welcome to the Dishes API');
});

app.post('/dishes', upload.single('image'), (req, res) => {
  const dish = {
    id: dishes.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.file.path
  };
  dishes.push(dish);
  res.status(201).send(dish);
});

app.get('/dishes', (req, res) => {
  res.send(dishes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});