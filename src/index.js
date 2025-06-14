const express = require("express");
const cors = require('cors');
const connectMongoDB = require("./db/mongo.bd");
const questionRoutes = require("./routes/question.route");

connectMongoDB();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/questions', questionRoutes);

app.get("/", (req, res) => {
  res.send(`Server is up and running`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
