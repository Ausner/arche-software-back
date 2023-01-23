const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const {swaggerDocs} = require('./swagger');
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


//import routes
const promotionRoutes = require("./routes/promotions");

const app = express();

const port = process.env.PORT || 9000;


//here
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Arche Software API Documentation",
            version: "1.0.0"
        },
    },
    apis: ["routes/promotions.js"]
};

var styleOps = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Arche Software API",
};

//Docs on JSON format
const swaggerSpec = swaggerJSDoc(options);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, styleOps));


//Middlewares
app.use(express.json());


//end here

// Routes
app.use('/api', promotionRoutes);


//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error.message));



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})