const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});


module.exports = mongoose.model("reviewModel", reviewSchema);