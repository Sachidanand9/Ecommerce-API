const mongoose = required('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true,
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
        requiredd: true,
    },
    addrees:{
        type: Object,
        requiredd:true,
    },
    status:{
        type: String,
        default:"Pending"
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Order",OrderSchema);