const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Dev",
      age: 20,
    },
    {
      id: 2,
      name: "Jay  Singh   ",
      age: 25,
    },
    {
      id: 3,
      name: " Devendra   Singh",
      age: 20,
    },
    {
      id: 44,
      name: "Dev Sa",
      age: 18,
    },
  ]);
});

app.get("/dev",(req,res)=> {
  res.send("Dev Sa");
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

