const express = require("express");
const app = express(); 
app.use(express.static("public")); // Serve static files 
app.get("/", (req, res) => {
     res.set("Cache-Control", "public, max-age=30"); // Cache for 30 seconds
     res.send("Hello, this response is cached!");
});
app.listen(3000, () => console.log("Server running on http://localhost:3000")); 