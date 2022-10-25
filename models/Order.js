const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    //     userId: {type: String, required: true},
    //     products: [
    //         {
    //             productId: {
    //                 type: String,
    //             },
    //             quantity: {
    //                 type: Number,
    //                 default: 1
    //             }
    //         }
    //     ],
    //     amount: {type: Number, required: true},
    //     address: {type: Object, required: true},
    //     status: {type: String, default: 'pending'}
    // }, { timestamps: true });
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    adress: { type: String, required: true },
    amount: { type: Number, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        }
    },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
