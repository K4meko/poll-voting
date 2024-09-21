import express, {Express, Request, Response, Application} from "express";
import router from "./routes/user"; // Import the router
import dotenv from "dotenv";

//For env File
dotenv.config();

const app: Application = express();
var expressWs = require("express-ws")(app);

const port = process.env.PORT || 8000;

app.use("/user", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
