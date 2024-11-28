import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key';

export const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).send('Invalid token');
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } else {
    res.status(401).send('No token provided');
  }
};