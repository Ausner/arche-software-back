const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const cors = require('cors')

const app = express();

const port = process.env.PORT || 9000;

const promotionPath = '/api/promotions';
const reviewsPath = '/api/reviews';

//cors
app.use(cors());

// //Middlewares
app.use(express.json());


// Routes
app.use(promotionPath, require('./routes/promotions'));
app.use(reviewsPath, require('./routes/reviews'));
// app.use('/', reviewRoutes);

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