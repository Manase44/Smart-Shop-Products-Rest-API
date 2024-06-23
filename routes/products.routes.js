import { Router } from "express";
import pool from "../db/db.config.js";

const route = Router()


route
.get("/", async(req, res) => {
    try {
        const allProducts = await pool.query("SELECT * FROM products")
        res.status(200).json({ok: true, data: allProducts.rows});
        
    } catch (error) {
        res.status(500).json({ok: false, message: error.message})
    }
})
.get("/:id", async(req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const specificUser = await pool.query("SELECT * FROM products WHERE id=$1", [productId])
        if (specificUser.rowCount === 0) {
            res.status(404).json({ok:false, message: "The product was not found"})
        } else {
            res.status(200).json({ok:true, data: specificUser.rows[0]})
        }
    } catch (error) {
        res.status(500).json({ok:false, message: error.message})
    }
})
.post("/", async(req, res) => {
    try {
        const {productUrl, productTitle, productDescription, productCost, onOffer}= req.body;
        const creatProduct = await pool.query("INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5)",[productUrl, productTitle, productDescription, productCost, onOffer])

        if (creatProduct.rowCount === 1) {
            res.status(201).json({ok:true, message: "The product was created successfully"})
        }
    } catch (error) {
        res.status(404).json({ok:false, message:error.message})
    }
    
 })
 
 .delete("/:id", async(req, res) => {
   const productId = parseInt(req.params.id);
   try {
    const deleteProduct = await pool.query("DELETE FROM products WHERE id=$1", [productId])
    if (deleteProduct.rowCount === 1) {
    res.json({ok:true, message: "The product was deleted successfully"})
        
    }
   } catch (error) {
    res.status(500).json({ok:false, message: error.message})
   }

 })



export default route;