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





//Middlewares
app.use(express.json());


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

//Docs on JSON format
const swaggerSpec = swaggerJSDoc(options);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


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