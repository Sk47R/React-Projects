const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51K80kIJvjrsid8ngvDvOOnkP8bGGOkJKOph2nc4fdApydeX0CTQhuRiNmgWghXJmF7JXMHfuEpHR47yGc84fqogz00S4dk5jXo"
);

// API

// APP config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//APi routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post(`/payments/create`, async (request, response) => {
  const total = request.query.total;
  console.log("payment recieved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // in subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// demo
// http://localhost:5001/e-clone-afeb1/us-central1/api
