const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Приложение запущено тут: http:  //localhost:${PORT}`);
});
