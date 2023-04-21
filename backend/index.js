const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 4000;
//mongodb conn
const mongo = process.env.MONGODB_URL;

mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection successful"))
  .catch(() => console.log("MongoDB connection failed"));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
});

//
const userModel = mongoose.model("users", userSchema);

//api
app.get("/", (req, res) => {
  res.send("server is running");
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    console.log(result);
    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = new userModel(req.body);
      const save = await data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error in signing up", alert: false });
  }
});
//login
app.post("/login", (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  userModel
    .findOne({ email: email })
    .then((result) => {
      if (result) {
        const dataSend = {
          _id: result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
        };
        console.log(dataSend);
        res.send({
          message: "Login is successfully",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Email is not available, please sign up",
          alert: false,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({
        message: "Something went wrong!",
        alert: false,
      });
    });
});

// product

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);
//save product in data
//api
app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);
  const data = await productModel(req.body);
  const datasave = await data.save();
  console.log(datasave);

  res.send({ message: "Upload successfully" });
});
app.get("/products", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});
//admin
app.get("/allUsers", async (req, res) => {
  const allUsers = await userModel.find({});
  res.send({ status: "ok", data: allUsers });
});

//
// Define Order schema
const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  message: String,
  contact: String,
});

// Define Order model
const Order = mongoose.model("order", orderSchema);

// Middleware for parsing request body

// POST route for creating a new order
app.post("/order", async (req, res) => {
  console.log(req.body);
  const data = await Order(req.body);
  const datasave = await data.save();
  console.log(datasave);

  res.send({ message: "Order created successfully" });
});

app.listen(PORT, () => console.log("server is running at port : " + PORT));
