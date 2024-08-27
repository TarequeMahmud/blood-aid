import express from "express";
import { port, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import donorRoutes from "./routes/donorRoutes.js";
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to new app");
});

app.use("/donor", donorRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected to mongodb");
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
