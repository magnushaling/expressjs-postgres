import express from "express";
import cors from "cors";
import pg from "pg";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM todos;");
  console.log(rows);
  res.send(JSON.stringify(rows));
});

app.put("/", async (req, res) => {
  await pool.query(`INSERT INTO todos (text) VALUES ('${req.body.text}');`);
  const { rows } = await pool.query("SELECT * FROM todos");
  res.send(JSON.stringify(rows));
});

app.delete("/", async (req, res) => {
  await pool.query(`DELETE FROM todos ('${req.body.todoId}');`);
  const { rows } = await pool.query("DELETE * FROM todos");
  res.send(JSON.stringify(rows));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});