const express = require("express");
const app = express();
const port = 3000;
const chefData = require("./data/ChefData.json");
const chefRecpiesData = require("./data/ChefPecpies.json");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Chef is cooking");
});

app.get("/chefdata", (req, res) => {
  res.send(chefData);
});

app.get("/chefrecpiesdata", (req, res) => {
  res.send(chefRecpiesData);
});
app.get("/chefrecpiesdata/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChefRecpies = chefRecpiesData.find((chefRecpie) => chefRecpie.chef_id == id);
  res.send(selectedChefRecpies);
  console.log(selectedChefRecpies);
});

app.listen(port, () => {
  console.log(`Chef Api port is running: ${port}`);
});
