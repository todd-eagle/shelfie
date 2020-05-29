require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(e => console.log(e))

app.get('/api/inventory', ctrl.getInventory)
app.get('/api/inventory/:id', ctrl.getInventoryItem)
app.post('api/inventory',  ctrl.addInventory)
app.put('api/inventory/:id',  ctrl.updateInventory)
app.delete('api/inventory/:id',  ctrl.deleteInventory)

app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))