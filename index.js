const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const cors = require("cors");
const path = require('path')


dotenv.config()

mongoose
.connect(process.env.MONGO_URL)
.then(console.log('DB is running'))
.catch((err) => (console.log(err)))

app.use(cors());
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)


// if (process.env.MONGO_URL === 'production') {
//     app.use(express.static('online-store-app/build'))

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '/online-store-app', 'build', 'index.html'))
//     })
// }

// if (process.env.MONGO_URL === 'production') {
//     app.use(express.static('online-store-app/build'))

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'online-store-app', 'build', 'index.html'))
//     })
// }


app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running')
})