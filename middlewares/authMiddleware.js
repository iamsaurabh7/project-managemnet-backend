const { auth } = require('../config/config');

// Middleware to protect routes by verifying Firebase token
const authMiddleware = async (req, res, next) => {
    
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken; 
    // console.log(req.user);
    
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
