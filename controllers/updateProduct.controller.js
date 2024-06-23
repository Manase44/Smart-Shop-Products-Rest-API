import pool from "../db/db.config.js";

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { productUrl, productTitle, productDescription, productCost, onOffer } =
    req.body;
  try {
    const updateProduct = await pool.query(
      "UPDATE products SET productThumbnail = $1, productTitle = $2, productDescription = $3, productCost = $4, onOffer = $5 WHERE id= $6",
      [
        productUrl,
        productTitle,
        productDescription,
        productCost,
        onOffer,
        productId,
      ],
    );

    if (updateProduct.rowCount === 1) {
      res.status(200).json({
        ok: true,
        message: "Products details were updated successfully",
      });
    } else {
      res.status(500).json({
        ok: false,
        message: "Failed to find the product you want to update",
      });
    }
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

export default updateProduct;
