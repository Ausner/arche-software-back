const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("reviewModel", reviewSchema);