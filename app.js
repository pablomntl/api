const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productsRoute = require("./routes/products");

const cors = require("cors");

const path = require("path");

//config swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
     info: {
      title: "node Petshop API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/products.js")}`],
   
};
 
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use("/api", productsRoute);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ruta de la documentacion de swagger
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsdoc(swaggerSpec))
);

app.set('view engine', 'ejs');
//route
app.get("/", (req, res) => {
  res.send("Welcome to my Petshop");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
//server connection
app.listen(port, () => console.log("Server listening to", port));
