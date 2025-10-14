
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const usersPath = path.join(__dirname, "users.json");
let users = { customers: [], wholesale: [] };
try {
  const data = fs.readFileSync(usersPath, "utf8");
  users = JSON.parse(data);
} catch (err) {
  console.error("Error reading users.json:", err);
}


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const match = users.customers.find(
    (u) => u.email === email && u.password === password
  );
  if (match) {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});


app.post("/wholesale", (req, res) => {
  const { email, password } = req.body;
  const match = users.wholesale.find(
    (u) => u.email === email && u.password === password
  );
  if (match) {
    res.json({ message: "Wholesale login successful" });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});


