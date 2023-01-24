const express = require ("express");
const reviewModel = require("../models/reviews");
require("dotenv").config();


const router = express.Router();


router.post('/', (req, res) => {
    const {apikey} = req.headers;

    if (apikey === undefined) {
        res.json({messageError: "You need to send the 'apikey' in the headers"})
    } else if (apikey.toString() !== process.env.apikey) {
        res.json({messageError: "Invalid apikey"})
    }
    const review = reviewModel(req.body);
    review.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({messageError: error}));
});

//Get promotions
router.get('/', (req, res) => {
    const {apikey} = req.headers;

    if (apikey === undefined) {
        res.json({messageError: "You need to send the 'apikey' in the headers"})
    } else if (apikey.toString() !== process.env.apikey) {
        res.json({messageError: "Invalid apikey"})
    }
    
    reviewModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({messageError: error}));
});

module.exports = router;