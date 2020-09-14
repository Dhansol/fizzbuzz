const express = require("express");
const app = express();
const cors = require("cors");
const fizzbuzzArr = require("./fizzbuzz");
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/fizbuz", async (req, res) => {
  try {
    const returnValue = await fizzbuzzArr(req.query.count);
    res.status(200).send(returnValue);
  } catch (err) {
    console.log(err);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client_apps/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client_apps", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`This server is listening on PORT:${PORT}`);
});
