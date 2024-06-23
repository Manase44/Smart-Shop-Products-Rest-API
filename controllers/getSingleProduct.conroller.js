import pool from "../db/db.config.js";

const getSingleProduct = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const specificUser = await pool.query(
      "SELECT * FROM products WHERE id=$1",
      [productId],
    );
    if (specificUser.rowCount === 0) {
      res.status(404).json({ ok: false, message: "The product was not found" });
    } else {
      res.status(200).json({ ok: true, data: specificUser.rows[0] });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

export default getSingleProduct;
