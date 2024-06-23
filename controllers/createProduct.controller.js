import pool from "../db/db.config.js";

const createProduct = async (req, res) => {
  try {
    const {
      productUrl,
      productTitle,
      productDescription,
      productCost,
      onOffer,
    } = req.body;
    const creatProduct = await pool.query(
      "INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5)",
      [productUrl, productTitle, productDescription, productCost, onOffer],
    );

    if (creatProduct.rowCount === 1) {
      res
        .status(201)
        .json({ ok: true, message: "The product was created successfully" });
    }
  } catch (error) {
    res.status(404).json({ ok: false, message: error.message });
  }
};

export default createProduct;
