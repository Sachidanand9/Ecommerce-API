const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:{
        type:Number,
        
    },
    name: {
        type:String,
        required:true,
        unique:true
    },
    quantity:{
        type:Number,
        required:true,
    },
}, {timestamps: true}
);

module.exports = mongoose.model("Product",ProductSchema);