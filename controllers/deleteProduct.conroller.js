import pool from "../db/db.config.js";

const deleteProduct = async (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const deleteProduct = await pool.query("DELETE FROM products WHERE id=$1", [
      productId,
    ]);
    if (deleteProduct.rowCount === 1) {
      res.json({ ok: true, message: "The product was deleted successfully" });
    } else {
      res
        .status(500)
        .json({
          ok: false,
          message: "Failed to find the product you want to delete",
        });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

export default deleteProduct;
