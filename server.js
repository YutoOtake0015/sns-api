require("dotenv").config();
const express = require("express");
const authRoute = require("./routers/auth");

const app = express();
const PORT = 5555;

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
