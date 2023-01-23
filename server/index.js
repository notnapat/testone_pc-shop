const express = require("express");
const app = express();
const cors = require("cors");

// const UsersModel = require("./models/UsersModel")

app.use(express.json());
app.use(cors());

// Routers
const userRouter = require("./routes/UserRoute");
app.use("/auth", userRouter);

// UsersModel.sequelize.sync().then(() => {
//     app.listen(3003, () => {
//         console.log("server running on port 3003");
//     });
// });


    app.listen(3003, () => {
        console.log("server running on port 3003");
    });
