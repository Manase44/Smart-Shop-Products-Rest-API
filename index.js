import express from 'express'
import productsRoute from './routes/products.routes.js'

const app = express()



app.use("/products", productsRoute)

app.listen(3000, () => {
    console.log("server running successfully")
})