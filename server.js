require("dotenv").config();
const express = require("express");
const seoRoute = require("./routes/seo.route");
const cors = require("cors");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api", seoRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server has been hitted on /",
  });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
