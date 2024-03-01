import express from "express";
import router from "./routes/router.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});