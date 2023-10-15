require("dotenv").config();
const express = require("express");
const authRoute = require("./routers/auth");
const postsRoute = require("./routers/posts");
const usersRoute = require("./routers/users");
const cors = require("cors");

const app = express();
const PORT = 5555;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute);
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
