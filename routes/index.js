var express = require("express");
var router = express.Router();
var path = require("path");
const app = express();
const baseUrl = `https://oss.x-lab.info/open_digger/github/`
const axios = require('axios');

/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render("index", { title: "Express" });
	res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get("/demo", function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/demo.html'));
    console.log('Routed to /demo page.')
});

router.get("/query1", function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/query1.html'));
});

router.post("/submit", async function(req, res, next) {
	const metric = req.body.userInput;
	const metricUrl = baseUrl + `X-lab2017/oss101/${metric}.json`;
	const response = await axios.get(metricUrl);
	// 计算两倍的结果
	const result = response.data
    res.send(result);
	console.log(result)
})

module.exports = router;
