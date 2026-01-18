import express from "express";
import "dotenv/config";
const app = express();

app.use(express.json());

app.post("/api/files/upload", (req, res) => {});
app.get("/api/files/user/:userId", (req, res) => {});
app.get("/api/files/user/:userId", (req, res) => {});
app.get("/api/files/user/:userId/count", (req, res) => {});

const port = process.env.PORT || 3101;

app.listen(port, () => {
  console.log(`file_manager service listening at http://localhost:${port}`);
});
