module.exports = {
    addInventory: ( req, res) => {
      const dbInstance = req.app.get('db');
    },
  
    getInventoryItem: ( req, res) => {
      const dbInstance = req.app.get('db');
    },
  
    getInventory: ( req, res) => {
      const dbInstance = req.app.get('db');
    },
  
    updateInventory: ( req, res) => {
      const dbInstance = req.app.get('db');
    },

    deleteInventory: ( req, res) => {
      const dbInstance = req.app.get('db');
  }
}