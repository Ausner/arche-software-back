const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");


//import routes
const promotionRoutes = require("./routes/promotions");

const app = express();

const port = process.env.PORT || 9000;


// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "Arche Software API Documentation",
//             version: "1.0.0"
//         },
//     },
//     apis: ["routes/promotions.js"]
// };

// //Docs on JSON format
// const swaggerSpec = swaggerJSDoc(options);



// //Middlewares
// app.use(express.json());

// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', promotionRoutes);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
    //__dirname : It will resolve to your project folder.
});


//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error.message));



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})