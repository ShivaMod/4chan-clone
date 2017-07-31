import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/test", () => {
  console.log("yes");
});

export default app;
