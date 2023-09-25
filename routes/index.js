var express = require("express");
var router = express.Router();
var path = require("path");
const app = express();
const bodyParser = require("body-parser");

// 使用 body-parser 中间件处理表单数据
app.use(bodyParser.urlencoded({ extended: false }));

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/demo", function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/demo.html'));
});

router.get("/query1", function (req, res, next) {
    res.sendFile(path.join(__dirname, '../views/query1.html'));
});

app.post('/submit', (req, res) => {
  const userInput = req.body.userInput;
  console.log(`You submitted: ${userInput}`);
  res.send(`You submitted: ${userInput}`);
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

module.exports = router;
