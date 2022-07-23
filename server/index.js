const express = require( "express");
const cors = require('cors')
const dotenv = require( "dotenv");
const connectDB = require('./config/db')
const bodyParser = require('body-parser')


dotenv.config()
connectDB()


const app = express();


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true, limit: '30mb'}))

app.use("/users", require("./routes/user"));
app.use("/users/comment", require("./routes/comment"));

app.use(cors())

app.listen(process.env.PORT, () =>
  console.log(`App Started on PORT: ${process.env.PORT}`)
);
