const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    cart: [
        {
            date: {
                type: String,
                required: true
            },
            items: [{
                id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                img: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                qty: {
                    type: Number,
                    required: true
                }
            }],
            status: {
                type:String,
                default: "Preparing Order",
                enum: ["Preparing Order", "On the way", "Delivered"]
            },
            payment: {
                type:String,
                default: "Not Paid",
                enum: ["Not Paid", "Paid"]
            }
        }
    ],

});

module.exports = mongoose.model('Orderitem', orderSchema);