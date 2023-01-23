const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Metadata info about our API
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

//setup docs
const swaggerDocs = (app, port) => {
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // app.get('/json', (req, res) => {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.send(swaggerSpec);
    // });

    console.log("Swagger docs already loaded!")
}


module.exports = { swaggerDocs };