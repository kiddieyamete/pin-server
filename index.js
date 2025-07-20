app.post("/check-pin", (req, res) => {
  const { pin } = req.body;
  if (pin === PIN_ADMIN) {
    res.json({ valid: true }); // <-- pakai 'valid'
  } else {
    res.json({ valid: false });
  }
});
