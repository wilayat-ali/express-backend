const express = require("express");

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Express is running on Vercel Home page!");
});

app.get("/users", (req, res) => {
  res.json({ message: "Hello, Express is running on Vercel!" });
});

app.get("/test", (req, res) => {
  res.json({ message: "Hello, My Testing!" });
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Export the app (for Vercel)
module.exports = app;

// Start the server in local development
// if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
// }
