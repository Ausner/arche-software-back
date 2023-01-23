const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const {swaggerDocs} = require('./swagger');


//import routes
const promotionRoutes = require("./routes/promotions");

const app = express();

const port = process.env.PORT || 9000;





//Middlewares
app.use(express.json());


// Routes
app.use('/api', promotionRoutes);


//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error.message));



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    swaggerDocs(app, port);
})