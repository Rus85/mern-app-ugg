const mongoose = require('mongoose')



const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subTitle: {type: String},
    desc: {type: String},
    img: {type: String, required: true},
    categories: {type: Array},
    catalog: {type: Array},
    size: {type: Array},
    colorRu: {type: Array},
    colorEn: {type: Array},
    height: {type: Array},
    price: {type: Number, required: true},
    inStock: {type: Boolean, default: true}
},
{timestamps: true}
)

module.exports = mongoose.model('Product', ProductSchema)