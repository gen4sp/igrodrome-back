const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10);
const password = bcrypt.hashSync('password', salt)

const products = [
    new User({
        name: "Admin",
        email: "admin@igrodrome.com",
        password: password,
        role_id: 1
    }),
    new User({
        name: "Creator",
        email: "creator@igrodrome.com",
        password: password,
        role_id: 2
    }),
    new User({
        name: "Player",
        email: "player@igrodrome.com",
        password: password,
        role_id: 3
    }),
]

mongoose
    .connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true})
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    });

products.map(async (p, index) => {
    await p.save((err, result) => {
        if (index === products.length - 1) {
            mongoose.disconnect();
        }
    });
});