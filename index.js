const express = require("express");
const cors = require("cors");

const app = express(); // harus duluan

const PORT = process.env.PORT || 3000;
const PIN_ADMIN = "757757"; // Ganti sesuai kebutuhan

app.use(cors());
app.use(express.json());

app.post("/check-pin", (req, res) => {
  const { pin } = req.body;
  if (pin === PIN_ADMIN) {
    res.json({ valid: true }); // GUNAKAN `valid`, bukan `success`
  } else {
    res.json({ valid: false });
  }
});

app.get("/", (req, res) => {
  res.send("✅ Server PIN Admin aktif.");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
