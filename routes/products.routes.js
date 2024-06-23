import { Router } from "express";
const route = Router()


route
.get("/", (req, res) => {
    res.send("getting all the products")
})
.get("/:id", (req, res) => {
    res.send("getting a single product")
})
.post("/", (req, res) => {
    res.send("creating a product")
 })
 .patch("/:id", (req,res) => {
    res.send("updating a particular product")
 }
 )
 .delete("/:id", (req, res) => {
    res.send("deleting a single product")
 })



export default route;