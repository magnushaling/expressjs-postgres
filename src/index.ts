import express from "express";
import cors from "cors";
import pg from "pg";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
//const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
//  const { rows } = await pool.query("SELECT NOW()");
  res.send(JSON.stringify({ text: "todo1" }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
