require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(e => console.log(e))


app.use(express.json());

app.get('/api/inventory', ctrl.getProducts)
app.get('/api/product/:id', ctrl.getProduct)
app.post('/api/product',  ctrl.addProduct)
app.put('/api/product/:id',  ctrl.updateProduct)
app.delete('/api/product/:id',  ctrl.deleteProduct)

app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))