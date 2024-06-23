import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "manfikohdb",
  host: "localhost",
  post: "5432",
  database: "productapi",
});

export default pool;
