const router = require("express").Router();
const Message = require("../models/Message");

router.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});

module.exports = router;