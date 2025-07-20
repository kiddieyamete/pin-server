const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const PIN_ADMIN = "757757"; // Ganti sesuai kebutuhan

app.use(cors());
app.use(express.json());

app.post("/check-pin", (req, res) => {
  const { pin } = req.body;
  if (pin === PIN_ADMIN) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get("/", (req, res) => {
  res.send("✅ Server PIN Admin aktif.");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});