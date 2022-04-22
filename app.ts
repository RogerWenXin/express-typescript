import express from 'express'
import MongoDB from './src/common/db'
import gardenRoute from './src/routes/garden.route'
const app = express()
const port = 8200
app.use(express.json())

gardenRoute(app)

MongoDB.getConnection().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}).catch(e => console.error(e))
