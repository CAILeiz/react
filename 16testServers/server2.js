let express = require("express");
let app = express();
app.use((req, res, next) => {
    console.log("server2启动成功");
    next();
})
app.get("/cars", (req, res) => {
    const cars = [
        {id: 1, name: "宝马", age: 0},
        {id: 2, name: "奥迪", age: 0},
        {id: 3, name: "奥拓", age: 0},
    ]
    res.send(cars);
})
app.listen(5001, () => {
    console.log("http://localhost:5001");
})