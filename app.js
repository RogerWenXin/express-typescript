const express = require('express')
const gardenRoute = require('./src/routes/garden.route');
const app = express()
const port = 8200

gardenRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})