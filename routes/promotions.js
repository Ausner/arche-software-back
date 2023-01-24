const express = require ("express");
const promotionModel = require("../models/promotions");
require("dotenv").config();


const router = express.Router();


//Create promotion
/**
 * @openapi
 * /api/promotions:
 *  post:
 *      tags:
 *        - Promotions
 *      requestBody:
 *          description: Body data
 *          content:
 *             application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Web Apps
 *                          details:
 *                              type: string
 *                              example: ""
 *                          price:
 *                              type: string
 *                              example: "10% Offer"
 *                          img:
 *                              type: string
 *                              example: webApps.png 
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *             application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Web Apps
 *                          details:
 *                              type: string
 *                              example: ""
 *                          price:
 *                              type: string
 *                              example: "10% Offer"
 *                          img:
 *                              type: string
 *                              example: webApps.png
 *        500:
 *           description: FAILED
 *           content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example: FAILED
 *      
 *  get:
 *      tags:
 *        - Promotions
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *             application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Web Apps
 *                          details:
 *                              type: string
 *                              example: ""
 *                          price:
 *                              type: string
 *                              example: "10% Offer"
 *                          img:
 *                              type: string
 *                              example: webApps.png
 *        500:
 *           description: FAILED
 *           content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example: FAILED
 *            
 * 
 * /api/promotions/{id}:
 *  get:
 *      tags:
 *        - Promotions
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          description: The promotion id
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *             application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Web Apps
 *                          details:
 *                              type: string
 *                              example: ""
 *                          price:
 *                              type: string
 *                              example: "10% Offer"
 *                          img:
 *                              type: string
 *                              example: webApps.png
 *        500:
 *           description: FAILED
 *           content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example: FAILED
 *
 * 
 *  put:
 *      tags:
 *        - Promotions
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          description: The promotion id
 *      requestBody:
 *          description: Body data
 *          content:
 *             application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Web Apps
 *                          details:
 *                              type: string
 *                              example: ""
 *                          price:
 *                              type: string
 *                              example: "10% Offer"
 *                          img:
 *                              type: string
 *                              example: webApps.png 
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *             application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Web Apps
 *                          details:
 *                              type: string
 *                              example: ""
 *                          price:
 *                              type: string
 *                              example: "10% Offer"
 *                          img:
 *                              type: string
 *                              example: webApps.png
 *        500:
 *           description: FAILED
 *           content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example: FAILED
 * 
 * 
 * 
 *  delete:
 *      tags:
 *        - Promotions
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          description: The promotion id
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *             application/json:
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: Web Apps
 *                          details:
 *                              type: string
 *                              example: ""
 *                          price:
 *                              type: string
 *                              example: "10% Offer"
 *                          img:
 *                              type: string
 *                              example: webApps.png 
 *        500:
 *           description: FAILED
 *           content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      example: FAILED                       
 */
router.post('/', (req, res) => {
    const {apikey} = req.headers;

    if (apikey === undefined) {
        res.json({messageError: "You need to send the 'apikey' in the headers"})
    } else if (apikey.toString() !== process.env.apikey) {
        res.json({messageError: "Invalid apikey"})
    }
    const promo = promotionModel(req.body);
    promo.save()
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
    
    promotionModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({messageError: error}));
});

//Get promotion by id
router.get('/:id', (req, res) => {
    const {apikey} = req.headers;

    if (apikey === undefined) {
        res.json({messageError: "You need to send the 'apikey' in the headers"})
    } else if (apikey.toString() !== process.env.apikey) {
        res.json({messageError: "Invalid apikey"})
    }

    const {id} = req.params;
    promotionModel.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({messageError: error}));
});


//Update promotion
router.put('/:id', (req, res) => {
    const {apikey} = req.headers;

    if (apikey === undefined) {
        res.json({messageError: "You need to send the 'apikey' in the headers"})
    } else if (apikey.toString() !== process.env.apikey) {
        res.json({messageError: "Invalid apikey"})
    }

    const { id } = req.params;
    console.log("id: ", id)
    const { name, detail, price, img } = req.body;
    promotionModel.updateOne({_id : `${id}`}, {$set:{name, detail, price, img}})
    .then((data) => res.json(data))
    .catch((error) => res.json({messageError: error}));
});


//Update promotion
router.delete('/:id', (req, res) => {
    const {apikey} = req.headers;

    if (apikey === undefined) {
        res.json({messageError: "You need to send the 'apikey' in the headers"})
    } else if (apikey.toString() !== process.env.apikey) {
        res.json({messageError: "Invalid apikey"})
    }


    const { id } = req.params;
    promotionModel.remove({_id : `${id}`})
    .then((data) => res.json(data))
    .catch((error) => res.json({messageError: error}));
});


module.exports = router;