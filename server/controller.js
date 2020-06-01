module.exports = {
    getProducts: (req, res) => {
      const db = req.app.get('db')

      db.get_products()
      .then((products) => res.status(200).send(products))
      .catch(e => res.status(500).send(e))
    },
  
    getProduct: (req, res) => {
      const db = req.app.get('db')
      const {id} = req.params

      db.get_product(id)
      .then((products) => res.status(200).send(products))
      .catch(e => res.status(500).send(e))
    },
  
    addProduct: (req, res) => {
      const db = req.app.get('db')
      const {name, price, img} = req.body

      db.add_product([name, price, img])
      .then(() => res.sendStatus(200))
      .catch(e => res.status(500).send(e))
    },
  
    updateProduct: ( req, res) => {
      const db = req.app.get('db')
      const {id} = req.params
      const {name, price, img} = req.body

      //console.log(req.body)
      db.update_product([id, name, price, img])
      .then(() => res.sendStatus(200))
      .catch(e => res.status(500).send(e))
    },

    deleteProduct: ( req, res) => {
      const db = req.app.get('db')
      const {id} = req.params

      db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(e => res.status(500).send(e))
  }
}