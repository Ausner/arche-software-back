const mongoose = require("mongoose");

const promotionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("promotionModel", promotionSchema);