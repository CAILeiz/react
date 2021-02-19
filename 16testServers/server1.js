let express = require("express");
let app = express();
app.use((req, res, next) => {
    console.log("server1启动成功");
    next();
})
app.get("/students", (req, res) => {
    console.log(req.get("host"));
    const studentData = [
        {id: 1, name: "小张", age: 18},
        {id: 2, name: "小李", age: 19},
        {id: 3, name: "小高", age: 20},
    ]
    res.send(studentData);
})
app.listen(5000, () => {
    console.log("http://localhost:5000");
})