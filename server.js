const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (css, js, assets, slides)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "slides", "index.html"));
});

app.get("/slides/:page", (req, res) => {
    res.sendFile(path.join(__dirname, "slides", req.params.page));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
