const authMiddleware = (req, res, next) => {
    // Middleware d'authentification fictif
    const auth = req.headers.authorization;
    if (auth && auth === 'secret-token') {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  
  module.exports = authMiddleware;
  