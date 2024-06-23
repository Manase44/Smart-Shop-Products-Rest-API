import pool from "../db/db.config.js";

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    res.status(200).json({ ok: true, data: allProducts.rows });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

export default getAllProducts;
