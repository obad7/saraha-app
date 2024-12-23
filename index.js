import express from "express";
import bootstrap from "./src/app,controller.js";

const app = express();
const port = process.env.PORT || 5000;

await bootstrap(app, express);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});