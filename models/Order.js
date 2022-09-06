const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type:String,
        require:true,
    },
    products:[
        {
            productId:{
                type:String,
            },
            quantity:{
                type: Number,
                default:1,
            }
        }
    ],
    ammount: {
        type: Number,
        required: true,
    },
    addrees:{
        type: Object,
        required:true,
    },
    status:{
        type: String,
        default:"Pending"
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Order",OrderSchema);