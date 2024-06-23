import { Router } from "express";
const route = Router()

route.get("/", (req, res) => {
    res.send("The products route is working")
})

export default route;