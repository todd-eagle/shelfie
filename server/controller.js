module.exports = {
    getProducts: ( req, res) => {
      const dbInstance = req.app.get('db');
    },
  
    getProduct: ( req, res) => {
      const dbInstance = req.app.get('db');
    },
  
    addProduct: ( req, res) => {
      const dbInstance = req.app.get('db');
    },
  
    updateProduct: ( req, res) => {
      const dbInstance = req.app.get('db');
    },

    deleteProduct: ( req, res) => {
      const dbInstance = req.app.get('db');
  }
}