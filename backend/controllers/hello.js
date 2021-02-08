
const Hello = (req, res) => {
    // res
    return res.status(400).json({"hey": "welcome"});
}

module.exports = Hello;