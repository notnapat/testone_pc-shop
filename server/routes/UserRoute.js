const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const UserModel = require("../models/UserModel");

router.post("/", async (req, res) => {
    const { username, email, phone, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        UserModel.create({
            username: username,
            email: email,
            phone: phone,
            password: hash,
        });
    });
    res.json("SUCCESS");
});

module.exports = router;

router.post("/login", async (req, res) => {
    const { username, email, password } = req.body;

    let user;
    if (username) {
        user = await UserModel.findOne({ where: { username: username } });
    } else if (email) {
        user = await UserModel.findOne({ where: { email: email } });
    }

    if (!user) res.json({ error: "User Doesn't Exist" });
    else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match)
                res.json({ error: "Wrong Username And Password Combination" });
            else {
                res.json(user);
            }
            // else {
            //     const accessToken = sign(
            //         { username: user.username, id: user.id },
            //         "importantsecret"
            //     );
            //     res.json({
            //         token: accessToken,
            //         username: user.username,
            //         id: user.id,
            //     });
            // }
        });
    }
});
