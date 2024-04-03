const express = require("express");
const crypto = require("node:crypto");
//zod to validate the data of the request

const app = express();
app.disable("x-powered-by"); //disable the header Express

app.get("/", (req, res) => {
  res.json({ message: "hola munso" });
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log("server");
});
