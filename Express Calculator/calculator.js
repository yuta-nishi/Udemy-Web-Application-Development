const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.listen(port, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("The result is " + result);
});

app.get("/bmi-calculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi-calculator", (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight / (height / 100) ** 2;
    res.send("Your BMI is " + bmi);
});
